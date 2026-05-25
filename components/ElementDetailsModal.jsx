"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Layers, Activity, Box, Info, Radiation } from 'lucide-react';
import { CATEGORIES } from '@/lib/elementsData';
import Atom3D from './Atom3D';
import DataTrends from './DataTrends';

// Helper to format electron configuration nicely with superscripts
const formatElectronConfig = (config) => {
  if (!config || config === "[Unknown]") return <span>[Unknown]</span>;
  
  return config.split(' ').map((part, index) => {
    const match = part.match(/([spdf])(\d+)/);
    if (match) {
      const base = part.substring(0, match.index + 1); // e.g., "3d"
      const sup = match[2]; // e.g., "10"
      return (
        <span key={index} className="mr-1.5 inline-block">
          {base}<sup className="text-[9px]">{sup}</sup>
        </span>
      );
    }
    return <span key={index} className="mr-1.5 inline-block">{part}</span>;
  });
};

export default function ElementDetailsModal({ el, onClose }) {
  const [activeTab, setActiveTab] = useState('3d');
  const [selectedIsotope, setSelectedIsotope] = useState(null);

  // Reset selected isotope when a new element is opened
  useEffect(() => {
    setSelectedIsotope(null);
  }, [el]);

  if (!el) return null;
  const cat = CATEGORIES[el.cat] || { color: '#ffffff', glow: 'rgba(255,255,255,0.5)' };

  // Generate dynamic text for selected isotope
  const renderIsotopeDetails = () => {
    if (!selectedIsotope) {
      return (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-white/70 text-sm leading-relaxed space-y-4"
        >
          <p>
            <strong className="text-white">{el.name}</strong> is a chemical element with the symbol <strong className="text-white">{el.sym}</strong> and atomic number <strong className="text-white">{el.n}</strong>. 
            It is classified as a <strong style={{ color: cat.color }}>{cat.label || el.cat}</strong> and is located in Period {el.period}, Group {el.group} of the periodic table.
          </p>
          <p>
            {el.melt || el.boil ? `At standard conditions, its phase transitions occur at ${el.melt ? el.melt + ' K (melting)' : ''} ${el.boil ? 'and ' + el.boil + ' K (boiling)' : ''}. ` : ''}
            It has a standard atomic weight of {el.mass}.
          </p>
          <div className="mt-4 p-4 rounded-xl border border-dashed border-white/20 bg-white/5 flex items-center justify-center text-white/40 text-center">
            Click on any isotope card above to view its specific composition and detailed properties.
          </div>
        </motion.div>
      );
    }

    const isStable = selectedIsotope.stable;
    const abundance = selectedIsotope.abundance ? `makes up about ${selectedIsotope.abundance} of naturally occurring ${el.name}` : `is a synthetic or trace isotope`;
    const halfLifeStr = !isStable && selectedIsotope.halfLife ? ` with a half-life of ${selectedIsotope.halfLife}` : '';
    const massStr = selectedIsotope.mass ? ` It has a precise atomic mass of ${selectedIsotope.mass} u.` : '';
    
    // extract mass number from iso.name (e.g., "²⁰Ne" -> 20)
    const superMap = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
    let parsedMass = '';
    for(let char of selectedIsotope.name) if (superMap[char]) parsedMass += superMap[char];
    const massNum = parsedMass ? parseInt(parsedMass) : Math.round(parseFloat(selectedIsotope.mass || el.mass));
    
    const neutrons = Math.max(0, massNum - el.n);

    return (
      <motion.div 
        key={selectedIsotope.name}
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
        className="text-white/80 text-sm leading-relaxed space-y-5"
      >
        <p className="bg-black/30 p-4 rounded-xl border border-white/10 shadow-inner">
          <strong className="text-white text-base">{el.name}-{massNum}</strong> ({selectedIsotope.name}) is a <strong className={isStable ? 'text-emerald-400' : 'text-amber-400'}>{isStable ? 'stable' : 'radioactive'}</strong> isotope of {el.name}. 
          It {abundance}{halfLifeStr}.{massStr}
        </p>
        
        <div className="bg-black/20 rounded-xl p-5 border border-white/5 inline-block w-full" style={{ boxShadow: `0 0 20px ${cat.glow}` }}>
          <h4 className="text-xs font-bold uppercase text-white/50 mb-4 tracking-widest flex items-center gap-2">
            <Box size={14} /> Nucleus Composition
          </h4>
          <div className="flex gap-8 items-center">
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg">
              <div className="w-4 h-4 rounded-full bg-[#ff4d6d] shadow-[0_0_10px_#ff4d6d]"></div>
              <div className="flex flex-col">
                <span className="font-mono text-lg font-bold leading-none">{el.n}</span>
                <span className="text-[10px] text-white/50 uppercase tracking-wider">Protons</span>
              </div>
            </div>
            
            <div className="text-white/20 text-2xl font-light">+</div>
            
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-lg">
              <div className="w-4 h-4 rounded-full bg-[#3f3f46] shadow-[0_0_10px_#3f3f46]"></div>
              <div className="flex flex-col">
                <span className="font-mono text-lg font-bold leading-none">{neutrons}</span>
                <span className="text-[10px] text-white/50 uppercase tracking-wider">Neutrons</span>
              </div>
            </div>
            
            <div className="text-white/20 text-2xl font-light">=</div>
            
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-lg border border-white/10">
              <div className="flex flex-col">
                <span className="font-mono text-xl font-black leading-none text-white">{massNum}</span>
                <span className="text-[10px] text-white/50 uppercase tracking-wider">Nucleons (Mass)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: "rgba(4,6,15,0.85)", backdropFilter: "blur(12px)" }} />

      {/* Modal Card */}
      <motion.div 
        className="relative z-10 w-full max-w-5xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-2xl"
        style={{
          background: "linear-gradient(135deg, rgba(13,27,62,0.95) 0%, rgba(6,10,20,0.98) 100%)",
          borderColor: `${cat.color}44`,
          borderWidth: "1px",
          boxShadow: `0 0 50px ${cat.glow}, inset 0 0 30px rgba(255,255,255,0.05)`,
        }}
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-110 transition-all cursor-pointer z-20 bg-black/50 backdrop-blur-md"
          style={{ 
            border: `1px solid ${cat.color}44`, 
            color: cat.color,
          }}
        >
          <X size={20} />
        </button>

        {/* Sidebar / Element Header */}
        <div className="flex flex-col gap-6 md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6 shrink-0">
          
          <div className="flex gap-4 items-center">
            <div 
              className="flex flex-col items-center justify-center rounded-2xl p-4 w-28 h-32 shrink-0 relative overflow-hidden"
              style={{
                background: `${cat.color}15`,
                border: `1px solid ${cat.color}55`,
                boxShadow: `0 0 20px ${cat.glow}`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              <span className="text-xs font-mono opacity-60 absolute top-2 left-2" style={{ color: cat.color }}>{el.n}</span>
              <span className="text-[10px] font-mono opacity-60 absolute top-2 right-2" style={{ color: cat.color }}>{el.mass}</span>
              <span className="text-5xl font-black mt-2" style={{
                color: cat.color,
                textShadow: `0 0 15px ${cat.color}`,
              }}>{el.sym}</span>
            </div>
            
            <div className="flex flex-col overflow-hidden">
              <h2 className="text-3xl font-black text-white tracking-tight leading-none mb-1 truncate">{el.name}</h2>
              <span className="text-xs font-bold uppercase tracking-widest mt-1" style={{ color: cat.color }}>
                {cat.label || el.cat}
              </span>
              
              {/* Beautiful Electron Configuration Chip */}
              <div 
                className="flex items-center gap-2 mt-3 text-xs font-mono px-3 py-1.5 rounded-lg border w-fit"
                style={{ 
                  background: `${cat.color}11`, 
                  borderColor: `${cat.color}33`,
                  color: '#e2e8f0',
                  boxShadow: `inset 0 0 10px rgba(255,255,255,0.02)`
                }}
              >
                <Layers size={12} style={{ color: cat.color }} className="shrink-0" />
                <div className="flex flex-wrap items-center whitespace-nowrap">
                  {formatElectronConfig(el.electronConfiguration)}
                </div>
              </div>

            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-2">
            <StatBox label="Melting Pt" value={el.melt ? `${el.melt} K` : 'Unknown'} color={cat.color} />
            <StatBox label="Boiling Pt" value={el.boil ? `${el.boil} K` : 'Unknown'} color={cat.color} />
            <StatBox label="Electronegativity" value={el.electronegativity || 'N/A'} color={cat.color} />
            <StatBox label="Atomic Radius" value={el.atomicRadius ? `${el.atomicRadius} pm` : 'N/A'} color={cat.color} />
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-col gap-2 mt-auto pt-4">
            <TabButton 
              active={activeTab === '3d'} 
              onClick={() => setActiveTab('3d')} 
              icon={<Box size={16} />} 
              label="Interactive 3D Model" 
              color={cat.color} 
            />
            <TabButton 
              active={activeTab === 'trends'} 
              onClick={() => setActiveTab('trends')} 
              icon={<Activity size={16} />} 
              label="Data Trends & Graphs" 
              color={cat.color} 
            />
            <TabButton 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')} 
              icon={<Info size={16} />} 
              label="Isotopes & Overview" 
              color={cat.color} 
            />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-[400px] w-full overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === '3d' && (
              <motion.div 
                key="3d"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Box className="text-[#4cc9f0]" /> Bohr Atom Model
                  </h3>
                </div>
                <div className="flex-1 bg-black/40 rounded-xl border border-white/5 overflow-hidden h-full min-h-[400px]">
                  <Atom3D el={el} iso={el.iso && el.iso[0] ? el.iso[0] : { name: el.sym, mass: el.mass }} />
                </div>
              </motion.div>
            )}

            {activeTab === 'trends' && (
              <motion.div 
                key="trends"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Activity className="text-[#ff9f1c]" /> Periodic Trends
                  </h3>
                </div>
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                  <DataTrends el={el} />
                </div>
              </motion.div>
            )}

            {activeTab === 'overview' && (
              <motion.div 
                key="overview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex-1 flex flex-col h-full"
              >
                <div className="flex items-center justify-between mb-4 shrink-0">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Info className="text-[#a8dadc]" /> Isotopes & Overview
                  </h3>
                </div>
                
                {/* Grid layout for isotope cards (Original Style without scroll) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 pr-4 content-start mb-4 shrink-0">
                  {el.iso && el.iso.map((iso, idx) => {
                    const isSelected = selectedIsotope?.name === iso.name;
                    return (
                      <div 
                        key={idx} 
                        onClick={() => setSelectedIsotope(iso)}
                        className={`bg-white/5 p-3 rounded-lg flex flex-col gap-1 cursor-pointer transition-all border ${isSelected ? 'border-white/40 scale-[1.02]' : 'border-white/10 hover:bg-white/10 hover:border-white/20'}`}
                        style={{
                          boxShadow: isSelected ? `0 0 15px ${cat.color}44, inset 0 0 10px rgba(255,255,255,0.05)` : 'none'
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-bold text-white text-base">{iso.name}</span>
                          <span className={`flex items-center justify-center text-[10px] px-2 py-0.5 rounded ${iso.stable ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'}`}>
                            {iso.stable ? 'Stable' : <Radiation size={14} className="animate-pulse" style={{ filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.9))' }} />}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-white/50 mt-2">
                          <span>Mass:</span>
                          <span className="text-white/80 font-mono">{iso.mass}</span>
                        </div>
                        <div className="flex justify-between text-xs text-white/50">
                          <span>Abund:</span>
                          <span className="text-white/80 font-mono">{iso.abundance}</span>
                        </div>
                      </div>
                    );
                  })}
                  {(!el.iso || el.iso.length === 0) && (
                    <div className="w-full p-4 text-center text-white/40 border border-dashed border-white/10 rounded-lg">
                      No detailed isotope data available.
                    </div>
                  )}
                </div>

                {/* Details Section taking up remaining space */}
                <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar bg-black/20 rounded-xl p-6 border border-white/5">
                  {renderIsotopeDetails()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatBox({ label, value, color }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-3 flex flex-col gap-1">
      <span className="text-[10px] text-white/40 uppercase tracking-wider">{label}</span>
      <span className="text-sm font-mono font-bold" style={{ color: color || '#fff' }}>{value}</span>
    </div>
  );
}

function TabButton({ active, onClick, icon, label, color }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm border ${
        active 
          ? 'bg-white/10 text-white' 
          : 'bg-transparent text-white/50 hover:bg-white/5 hover:text-white'
      }`}
      style={{
        borderColor: active ? color : 'transparent',
        boxShadow: active ? `inset 0 0 20px ${color}22` : 'none'
      }}
    >
      <span style={{ color: active ? color : 'inherit' }}>{icon}</span>
      {label}
    </button>
  );
}
