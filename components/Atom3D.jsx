"use client";

import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Trail, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Calculate protons, neutrons, electrons
const getParticles = (el, iso) => {
  const protons = el.n;
  const massMatch = iso?.name?.match(/([0-9]+)/);
  let mass = Math.round(parseFloat(iso?.mass || el.mass));
  if (massMatch) {
    const superMap = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
    let parsedMass = '';
    for(let char of iso.name) if (superMap[char]) parsedMass += superMap[char];
    if (parsedMass) mass = parseInt(parsedMass);
  }
  const neutrons = Math.max(0, mass - protons);
  return { protons, neutrons, electrons: protons };
};

// Generate 3D clustered points for nucleus
const generateNucleus = (protons, neutrons) => {
  const total = protons + neutrons;
  const positions = [];
  const colors = [];
  const radius = Math.cbrt(total) * 0.25; 
  
  const colorProton = new THREE.Color('#ff4d6d');
  const colorNeutron = new THREE.Color('#3f3f46');

  for (let i = 0; i < total; i++) {
    const isProton = i < protons;
    const phi = Math.acos(1 - 2 * (i + 0.5) / total);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    
    const r = radius * Math.cbrt(Math.random() * 0.5 + 0.5);
    
    positions.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
    
    const c = isProton ? colorProton : colorNeutron;
    colors.push(c.r, c.g, c.b);
  }
  return { positions: new Float32Array(positions), colors: new Float32Array(colors), count: total };
};

// Calculate electron shells
const getShells = (electrons) => {
  const shells = [];
  let remaining = electrons;
  const maxPerShell = [2, 8, 18, 32, 32, 18, 8];
  
  maxPerShell.forEach((max, i) => {
    if (remaining > 0) {
      const count = Math.min(remaining, max);
      shells.push({ n: i + 1, count, radius: 2 + i * 1.2 });
      remaining -= count;
    }
  });
  return shells;
};

// Instanced Nucleus for massive performance boost
function NucleusInstanced({ data }) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    if (meshRef.current) {
      for (let i = 0; i < data.count; i++) {
        dummy.position.set(
          data.positions[i * 3],
          data.positions[i * 3 + 1],
          data.positions[i * 3 + 2]
        );
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        
        meshRef.current.setColorAt(
          i, 
          new THREE.Color(data.colors[i*3], data.colors[i*3+1], data.colors[i*3+2])
        );
      }
      meshRef.current.instanceMatrix.needsUpdate = true;
      meshRef.current.instanceColor.needsUpdate = true;
    }
  }, [data, dummy]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group>
      <instancedMesh ref={meshRef} args={[null, null, data.count]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshPhysicalMaterial 
          roughness={0.2}
          metalness={0.8}
        />
      </instancedMesh>
      <pointLight color="#ff4d6d" intensity={2} distance={5} />
    </group>
  );
}

function ElectronShell({ shell, index, totalShells }) {
  const { n, count, radius } = shell;
  const groupRef = useRef();
  
  // Perfect circle orbits, slightly tilted based on shell index for 3D effect
  // but perfectly circular path.
  const tiltX = (index / totalShells) * Math.PI;
  const tiltY = (index % 2 === 0 ? 1 : -1) * (Math.PI / 4);
  
  const speed = 1 / (n * 0.5);

  useFrame(() => {
    if (groupRef.current) {
      // Rotate the electrons along the Z axis of their local tilted group (perfect circle)
      groupRef.current.rotation.z += speed * 0.05;
    }
  });

  const electrons = useMemo(() => {
    const els = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      els.push({ angle });
    }
    return els;
  }, [count]);

  return (
    <group rotation={[tiltX, tiltY, 0]}>
      {/* Orbit Ring */}
      <mesh>
        <torusGeometry args={[radius, 0.01, 8, 64]} />
        <meshBasicMaterial color="#4cc9f0" transparent opacity={0.15} />
      </mesh>
      
      {/* Rotating Electrons */}
      <group ref={groupRef}>
        {electrons.map((e, i) => {
          const x = Math.cos(e.angle) * radius;
          const y = Math.sin(e.angle) * radius;
          return (
            <mesh key={i} position={[x, y, 0]}>
              <sphereGeometry args={[0.08, 8, 8]} />
              <meshBasicMaterial color="#4cc9f0" />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

export default function Atom3D({ el, iso }) {
  const { protons, neutrons, electrons } = useMemo(() => getParticles(el, iso), [el, iso]);
  const nucleusData = useMemo(() => generateNucleus(protons, neutrons), [protons, neutrons]);
  const shells = useMemo(() => getShells(electrons), [electrons]);

  return (
    <div className="w-full h-full relative bg-transparent rounded-xl overflow-hidden">
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <NucleusInstanced data={nucleusData} />
        {shells.map((shell, i) => (
          <ElectronShell key={i} shell={shell} index={i} totalShells={shells.length} />
        ))}

        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={20}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
