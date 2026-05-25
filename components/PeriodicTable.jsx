"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ELEMENTS, CATEGORIES } from "@/lib/elementsData";
import ElementDetailsModal from "./ElementDetailsModal";
import { Search, Thermometer, Radiation, Atom } from "lucide-react";

const getGridPosition = (el) => {
  if (el.cat === "lanthanide") {
    const lans = [57,58,59,60,61,62,63,64,65,66,67,68,69,70,71];
    return { row: 9, col: lans.indexOf(el.n) + 4 };
  }
  if (el.cat === "actinide") {
    const acts = [89,90,91,92,93,94,95,96,97,98,99,100,101,102,103];
    return { row: 10, col: acts.indexOf(el.n) + 4 };
  }
  return { row: el.period, col: el.group };
};

const getStateOfMatter = (el, tempK) => {
  if (tempK === undefined) return 'solid';
  if (el.boil && tempK >= el.boil) return 'gas';
  if (el.melt && tempK >= el.melt) return 'liquid';
  return 'solid';
};

const isRadioactive = (el) => {
  if (el.iso && el.iso.length > 0) return el.iso.every(iso => !iso.stable);
  if (el.n > 83 || el.cat === 'actinide') return true;
  return false;
};

// Loading Screen Component
function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [phrase, setPhrase] = useState("INITIALIZING QUANTUM CORE...");
  const [particles, setParticles] = useState([]);

  const phrases = [
    "INITIALIZING QUANTUM CORE...",
    "CALIBRATING ATOMIC RADII...",
    "SYNTHESIZING ISOTOPES...",
    "STABILIZING ELECTRON SHELLS...",
    "RENDERING BOHR MODELS..."
  ];

  useEffect(() => {
    setParticles([...Array(25)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 2 + 1,
      delay: Math.random()
    })));

    let startTime = Date.now();
    const duration = 2800;
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(percent);
      
      const phraseIndex = Math.floor((percent / 100) * phrases.length);
      setPhrase(phrases[Math.min(phraseIndex, phrases.length - 1)]);
      
      if (percent >= 100) clearInterval(interval);
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#04060f] overflow-hidden px-4 text-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{ left: `${p.left}vw`, top: `${p.top}vh` }}
          animate={{ y: [0, -100], opacity: [0, 0.5, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}

      <motion.div
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ rotate: { duration: 4, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="text-[#4cc9f0] drop-shadow-[0_0_25px_rgba(76,201,240,0.8)] relative z-10"
      >
        <Atom size={64} strokeWidth={1} />
      </motion.div>
      
      <div className="mt-8 flex flex-col items-center z-10 w-full max-w-xs">
        <h2 className="text-[9px] md:text-[10px] font-mono text-[#f72585] tracking-[0.2em] md:tracking-[0.3em] mb-4 h-4 uppercase drop-shadow-[0_0_10px_rgba(247,37,133,0.8)]">
          {phrase}
        </h2>
        
        <div className="flex items-end gap-1.5 mb-2">
          <span className="text-3xl md:text-4xl font-black text-transparent bg-clip-text tracking-tighter" style={{ backgroundImage: "linear-gradient(to right, #4cc9f0, #c77dff)" }}>
            {progress}
          </span>
          <span className="text-lg md:text-xl font-bold text-white/50 mb-1">%</span>
        </div>
        
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden relative shadow-[0_0_20px_rgba(76,201,240,0.3)]">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#4cc9f0] to-[#c77dff]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function PeriodicTable() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedElement, setSelectedElement] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [temperature, setTemperature] = useState(298);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => { setIsLoading(false); }, 2800); 
    return () => clearTimeout(timer);
  }, []);

  const visibleElements = useMemo(() => {
    return ELEMENTS.filter(el => {
      const matchSearch = !searchQuery || 
        el.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        el.sym.toLowerCase().includes(searchQuery.toLowerCase()) || 
        el.n.toString() === searchQuery;
      
      const matchCat = activeCategory ? el.cat === activeCategory : true;
      
      return matchSearch && matchCat;
    });
  }, [searchQuery, activeCategory]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          className="min-h-screen bg-[#04060f] flex flex-col items-center justify-start pt-6 md:pt-16 pb-8 md:p-4 font-sans select-none overflow-x-hidden relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Background glow effects */}
          <div 
            className="absolute inset-0 pointer-events-none transition-colors duration-1000" 
            style={{ 
              background: `radial-gradient(circle at 50% 0%, ${
                temperature > 3000 ? 'rgba(255,70,30,0.15)' : 
                temperature < 200 ? 'rgba(30,120,255,0.15)' : 
                'rgba(30,50,100,0.15)'
              } 0%, transparent 70%)` 
            }} 
          />

          {/* Top Controls Area - Responsive Mobile Layout */}
          <motion.div 
            className="w-full px-4 md:px-0 md:absolute md:top-6 md:right-6 z-40 flex flex-row justify-between md:justify-end items-center gap-3 md:gap-4 mb-6 md:mb-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Search */}
            <div className="relative group flex-1 md:flex-none">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-[#4cc9f0] transition-colors" size={14} />
              <input 
                type="text" 
                placeholder="Search element..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-48 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full py-2 md:py-1.5 pl-9 pr-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#4cc9f0] transition-all"
              />
            </div>
            
            {/* Temperature */}
            <div className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 md:py-1.5 rounded-full transition-all shrink-0">
              <Thermometer size={14} className={temperature > 3000 ? "text-red-500" : temperature < 200 ? "text-blue-500" : "text-amber-500"} />
              <input 
                type="range" 
                min="0" 
                max="6000" 
                step="1" 
                value={temperature} 
                onChange={(e) => setTemperature(parseInt(e.target.value))}
                className="w-16 md:w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-[10px] md:text-[10px] font-mono font-bold text-white/70 w-8 text-right">{temperature}K</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <div className="relative z-10 w-full max-w-[1300px] flex flex-col items-center text-center mb-8 md:mb-10 pointer-events-none select-none px-4">
            <motion.h1 
              className="text-4xl md:text-7xl font-black text-transparent bg-clip-text tracking-tighter" 
              style={{ 
                backgroundImage: "linear-gradient(to right, #4cc9f0, #c77dff)",
                filter: "drop-shadow(0 0 25px rgba(76,201,240,0.4))" 
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, type: "spring" }}
            >
              QUANTUM
            </motion.h1>
            <motion.h2 
              className="text-sm md:text-2xl font-bold text-white/90 tracking-[0.2em] md:tracking-[0.3em] uppercase mt-1 md:mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              Periodic Table
            </motion.h2>
          </div>

          {/* Main Table Grid Layout - Mobile Scrollable */}
          <div className="relative z-10 w-full max-w-[1300px] overflow-x-auto pb-6 custom-scrollbar flex justify-start md:justify-center px-4 md:px-0">
            <div 
              className="grid gap-[3px] md:gap-[4px] lg:gap-[6px] pb-6 shrink-0 w-max md:w-full" 
              style={{ 
                gridTemplateColumns: "repeat(18, minmax(45px, 1fr))",
                gridTemplateRows: "repeat(10, minmax(45px, 1fr))",
                minWidth: "800px"
              }}
            >
              <AnimatePresence>
                {ELEMENTS.map((el, i) => {
                  const pos = getGridPosition(el);
                  const cat = CATEGORIES[el.cat] || { color: '#ffffff', glow: 'rgba(255,255,255,0.5)' };
                  const isHovered = hoveredElement === el.n;
                  const isSelected = selectedElement?.n === el.n;
                  
                  const isVisible = visibleElements.some(v => v.n === el.n);
                  const stateOfMatter = getStateOfMatter(el, temperature);
                  const radio = isRadioactive(el);
                  
                  const opacity = (searchQuery || activeCategory) ? (isVisible ? 1 : 0.1) : 1;

                  return (
                    <motion.div
                      key={el.n}
                      className={`relative flex flex-col justify-between p-1 rounded-md cursor-pointer transition-all duration-300 ${!isVisible && (searchQuery || activeCategory) ? 'grayscale pointer-events-none' : ''}`}
                      style={{
                        gridColumn: pos.col,
                        gridRow: pos.row,
                        background: isHovered || isSelected 
                          ? `${cat.color}44` 
                          : `linear-gradient(135deg, ${cat.color}11 0%, ${cat.color}22 100%)`,
                        border: `1px solid ${isHovered || isSelected ? cat.color : `${cat.color}44`}`,
                        boxShadow: isHovered || isSelected 
                          ? `0 0 15px ${cat.glow}, inset 0 0 10px rgba(255,255,255,0.2)` 
                          : `0 0 5px rgba(0,0,0,0.5)`,
                        opacity: opacity,
                      }}
                      onMouseEnter={() => setHoveredElement(el.n)}
                      onMouseLeave={() => setHoveredElement(null)}
                      onClick={() => setSelectedElement(el)}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: opacity, 
                        scale: isHovered || isSelected ? 1.15 : 1,
                        zIndex: isHovered || isSelected ? 50 : 1
                      }}
                      transition={{ 
                        opacity: { duration: 0.3 },
                        scale: { type: "spring", stiffness: 300, damping: 20 },
                        default: { delay: i * 0.005 }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex justify-between items-start w-full leading-none">
                        <span className="text-[9px] md:text-[10px] font-mono text-white/80">{el.n}</span>
                        
                        <div className="flex items-center gap-[2px]">
                          {radio && <Radiation size={7} className="text-amber-500 animate-pulse" />}
                          {stateOfMatter === 'gas' && <span className="text-[7px] opacity-40">☁️</span>}
                          {stateOfMatter === 'liquid' && <span className="text-[7px] opacity-40">💧</span>}
                        </div>
                      </div>
                      
                      <div className="flex-1 flex items-center justify-center">
                        <span 
                          className="text-lg md:text-xl font-black tracking-tighter" 
                          style={{ 
                            color: cat.color,
                            textShadow: isHovered || isSelected ? `0 0 10px ${cat.color}` : 'none'
                          }}
                        >
                          {el.sym}
                        </span>
                      </div>
                      
                      <span className="text-[7px] md:text-[8px] font-bold text-center truncate text-white/90 leading-none pb-0.5">
                        {el.name}
                      </span>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              
              {/* Legend / Gap area labels */}
              <motion.div 
                className="col-start-3 col-end-4 row-start-6 flex items-center justify-center text-[10px] font-mono opacity-40"
                initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1 }}
              >57-71</motion.div>
              <motion.div 
                className="col-start-3 col-end-4 row-start-7 flex items-center justify-center text-[10px] font-mono opacity-40"
                initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1 }}
              >89-103</motion.div>
            </div>
          </div>

          {/* Category Legend & Filters at Bottom */}
          <motion.div 
            className="relative z-10 w-full max-w-[1000px] flex flex-wrap gap-1.5 md:gap-2 mt-4 md:mb-12 justify-center px-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <button 
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1.5 rounded-full text-[9px] md:text-[10px] uppercase tracking-wider font-bold transition-all border ${!activeCategory ? 'bg-white/20 border-white/40 text-white' : 'bg-transparent border-white/10 text-white/40 hover:bg-white/5 hover:text-white'}`}
            >
              All Elements
            </button>
            {Object.entries(CATEGORIES).map(([key, cat]) => (
              <button 
                key={key}
                onClick={() => setActiveCategory(activeCategory === key ? null : key)}
                className={`px-2 md:px-3 py-1.5 rounded-full text-[8px] md:text-[10px] uppercase tracking-wider font-bold transition-all border flex items-center gap-1.5`}
                style={{
                  borderColor: activeCategory === key ? cat.color : `${cat.color}33`,
                  backgroundColor: activeCategory === key ? `${cat.color}22` : 'transparent',
                  color: activeCategory === key ? '#fff' : 'rgba(255,255,255,0.5)',
                  boxShadow: activeCategory === key ? `0 0 10px ${cat.glow}` : 'none'
                }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: cat.color, boxShadow: `0 0 5px ${cat.color}` }}></div>
                {cat.label}
              </button>
            ))}
          </motion.div>

          {/* Details Modal */}
          <AnimatePresence>
            {selectedElement && (
              <ElementDetailsModal 
                el={selectedElement} 
                onClose={() => setSelectedElement(null)} 
              />
            )}
          </AnimatePresence>

        </motion.div>
      )}
    </>
  );
}
