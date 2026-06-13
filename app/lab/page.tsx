"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Beaker, Zap, Activity } from "lucide-react";
import Link from "next/link";

interface Reaction {
  reactants: string[];
  products: string;
  equation: string;
  type: "explosion" | "color-change" | "bubbling" | "precipitation" | "foam";
  colorTransition: string[];
  description: string;
}

const reactionsData: Reaction[] = [
  {
    reactants: ["Na", "H2O"],
    products: "NaOH + H2",
    equation: "2Na + 2H₂O → 2NaOH + H₂",
    type: "explosion",
    colorTransition: ["#1e293b", "#ef4444"],
    description: "Sodium reacts vigorously with water, releasing hydrogen gas and immense heat, often resulting in an explosion.",
  },
  {
    reactants: ["HCl", "NaOH"],
    products: "NaCl + H2O",
    equation: "HCl + NaOH → NaCl + H₂O",
    type: "color-change",
    colorTransition: ["#fca5a5", "#bae6fd"],
    description: "A classic neutralization reaction forming salt and water. The color change represents the shift to a neutral pH.",
  },
  {
    reactants: ["Mg", "HCl"],
    products: "MgCl2 + H2",
    equation: "Mg + 2HCl → MgCl₂ + H₂",
    type: "bubbling",
    colorTransition: ["#1e293b", "#fde047"],
    description: "Magnesium metal reacts with hydrochloric acid, producing magnesium chloride and visibly bubbling off hydrogen gas.",
  },
  {
    reactants: ["AgNO3", "NaCl"],
    products: "AgCl + NaNO3",
    equation: "AgNO₃ + NaCl → AgCl↓ + NaNO₃",
    type: "precipitation",
    colorTransition: ["#1e293b", "#cbd5e1"],
    description: "Silver nitrate reacts with sodium chloride to rapidly form a dense, cloudy white precipitate of solid silver chloride.",
  },
  {
    reactants: ["H2O2", "KI"],
    products: "H2O + O2 + I2",
    equation: "2H₂O₂ (with KI) → 2H₂O + O₂",
    type: "foam",
    colorTransition: ["#1e293b", "#f97316"],
    description: "Hydrogen peroxide rapidly decomposes when catalyzed by potassium iodide, creating a massive foam eruption known as 'Elephant's Toothpaste'.",
  },
  {
    reactants: ["Na", "HCl"],
    products: "NaCl + H2",
    equation: "2Na + 2HCl → 2NaCl + H₂",
    type: "explosion",
    colorTransition: ["#1e293b", "#dc2626"],
    description: "Extremely violent reaction! Sodium reacts explosively with hydrochloric acid to form salt and hydrogen gas.",
  },
  {
    reactants: ["KI", "AgNO3"],
    products: "AgI + KNO3",
    equation: "KI + AgNO₃ → AgI↓ + KNO₃",
    type: "precipitation",
    colorTransition: ["#1e293b", "#fef08a"],
    description: "Potassium iodide reacts with silver nitrate to form a distinct yellow precipitate of silver iodide.",
  },
  {
    reactants: ["H2O", "HCl"],
    products: "H3O+ + Cl-",
    equation: "HCl + H₂O → H₃O⁺ + Cl⁻",
    type: "color-change",
    colorTransition: ["#1e293b", "#93c5fd"],
    description: "Hydrochloric acid dissolves in water, dissociating completely into hydronium and chloride ions.",
  }
];

const availableReactants = [
  "Na", "H2O", "HCl", "NaOH", "Mg", "AgNO3", "NaCl", "H2O2", "KI"
];

export default function VirtualLab() {
  const [reactantA, setReactantA] = useState<string>("");
  const [reactantB, setReactantB] = useState<string>("");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [result, setResult] = useState<Reaction | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [flaskColor, setFlaskColor] = useState<string>("#1e293b");

  const findReaction = (a: string, b: string) => {
    return reactionsData.find(
      (r) =>
        (r.reactants[0] === a && r.reactants[1] === b) ||
        (r.reactants[0] === b && r.reactants[1] === a)
    );
  };

  const handleSimulate = () => {
    if (!reactantA || !reactantB) return;
    
    setIsSimulating(true);
    setShowResult(false);
    setFlaskColor("#1e293b");

    const reaction = findReaction(reactantA, reactantB);
    
    setTimeout(() => {
      if (reaction) {
        setFlaskColor(reaction.colorTransition[1]);
        setResult(reaction);
      } else {
        setResult(null);
      }
      setIsSimulating(false);
      setShowResult(true);
    }, 2500); // 2.5 second animation
  };

  const renderFlaskAnimation = () => {
    if (!isSimulating && !showResult) return null;
    
    const reactionType = result?.type;
    const isExplosion = reactionType === "explosion" || (!result && showResult && isSimulating); // simulate shaking when mixing invalid
    
    return (
      <AnimatePresence>
        {/* Bubbling Animation */}
        {isSimulating && reactionType === "bubbling" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 overflow-hidden flex justify-center items-end pb-8"
          >
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-white/50 rounded-full absolute"
                initial={{ bottom: "0%", left: `${20 + Math.random() * 60}%`, opacity: 0 }}
                animate={{
                  bottom: "100%",
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5],
                  x: (Math.random() - 0.5) * 20,
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </motion.div>
        )}

        {/* Precipitation Animation */}
        {isSimulating && reactionType === "precipitation" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 overflow-hidden"
          >
            {[...Array(40)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full absolute"
                style={{ backgroundColor: result.colorTransition[1] || "#fff" }}
                initial={{ top: "10%", left: `${15 + Math.random() * 70}%`, opacity: 0 }}
                animate={{
                  top: "92%",
                  opacity: [0, 1, 1],
                  scale: [0.5, 1, 1],
                }}
                transition={{
                  duration: 1.5 + Math.random(),
                  ease: "easeIn",
                  delay: i * 0.03,
                }}
              />
            ))}
            {/* Settled precipitate at bottom */}
            <motion.div 
               className="absolute bottom-0 inset-x-0 h-6 blur-sm"
               style={{ backgroundColor: result.colorTransition[1] || "#fff" }}
               initial={{ opacity: 0 }}
               animate={{ opacity: 0.8 }}
               transition={{ delay: 1, duration: 1.5 }}
            />
          </motion.div>
        )}

        {/* Foam / Elephant's Toothpaste Animation */}
        {isSimulating && reactionType === "foam" && (
          <motion.div
            initial={{ height: "0%", opacity: 0, borderRadius: "50%" }}
            animate={{ height: "250%", opacity: 1, top: "-150%", borderRadius: "20px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute bottom-0 inset-x-0 z-30 flex items-center justify-center overflow-hidden"
            style={{ 
              backgroundColor: result.colorTransition[1], 
              boxShadow: `0 0 30px ${result.colorTransition[1]}66` 
            }}
          >
            {[...Array(12)].map((_, i) => (
               <motion.div key={i} className="absolute w-12 h-12 bg-white/20 rounded-full blur-sm" 
                  animate={{ y: [0, -30, 0], x: [0, 15, -15, 0], scale: [1, 1.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  style={{ top: `${Math.random()*100}%`, left: `${Math.random()*100}%` }}
               />
            ))}
          </motion.div>
        )}
        
        {/* Explosion Animation */}
        {isSimulating && isExplosion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 0.15, repeat: 12 }}
            className="absolute inset-0 bg-white/80 z-40 rounded-b-[72px] rounded-t-3xl shadow-[0_0_80px_rgba(255,255,255,0.9)]"
          />
        )}
      </AnimatePresence>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 p-6 md:p-12 overflow-x-hidden"
    >
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="max-w-5xl mx-auto flex items-center justify-between mb-12"
      >
        <Link 
          href="/" 
          className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Periodic Table</span>
        </Link>
        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400 flex items-center gap-3">
          <Beaker className="text-cyan-400" size={32} />
          Quantum Virtual Lab
        </h1>
        <div className="w-24"></div>
      </motion.header>

      <main className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Col - Selectors */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 space-y-8 z-20"
        >
          <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 shadow-xl shadow-black/50">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity className="text-indigo-400" size={20} />
              Reactants
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Reactant A</label>
                <div className="grid grid-cols-3 gap-2">
                  {availableReactants.map(r => (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      key={`A-${r}`}
                      onClick={() => setReactantA(r)}
                      className={`py-2 px-2 rounded-lg text-sm font-medium transition-all ${
                        reactantA === r 
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.2)]" 
                          : "bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 hover:bg-slate-700"
                      }`}
                    >
                      {r}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Reactant B</label>
                <div className="grid grid-cols-3 gap-2">
                  {availableReactants.map(r => (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      key={`B-${r}`}
                      onClick={() => setReactantB(r)}
                      className={`py-2 px-2 rounded-lg text-sm font-medium transition-all ${
                        reactantB === r 
                          ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/50 shadow-[0_0_15px_rgba(99,102,241,0.2)]" 
                          : "bg-slate-800 text-slate-300 border border-slate-700 hover:border-slate-500 hover:bg-slate-700"
                      }`}
                    >
                      {r}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            <motion.button
              whileHover={(!reactantA || !reactantB || isSimulating) ? {} : { scale: 1.02, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
              whileTap={(!reactantA || !reactantB || isSimulating) ? {} : { scale: 0.98 }}
              onClick={handleSimulate}
              disabled={!reactantA || !reactantB || isSimulating}
              className={`mt-8 w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                !reactantA || !reactantB || isSimulating
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-cyan-500 to-indigo-500 text-white"
              }`}
            >
              <Zap size={20} className={isSimulating ? "animate-pulse" : ""} />
              {isSimulating ? "Reaction in Progress..." : "Simulate Reaction"}
            </motion.button>
          </div>
        </motion.div>

        {/* Center/Right Col - Stage and Results */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-7 flex flex-col items-center justify-center"
        >
          {/* Reaction Flask Visual */}
          <div className="relative mb-16 mt-8">
            <motion.div 
              animate={{ 
                x: (isSimulating && (result?.type === "explosion" || !result)) ? [-20, 20, -20, 20, 0] : 0 
              }}
              transition={{ duration: 0.3, repeat: isSimulating ? 8 : 0 }}
              className="relative w-64 h-64 flex items-center justify-center"
            >
              {/* Beaker Outline */}
              <div className="absolute inset-0 border-[6px] border-slate-400/40 rounded-b-[72px] rounded-t-3xl backdrop-blur-sm z-20 flex flex-col justify-end overflow-hidden shadow-[inset_0_0_30px_rgba(255,255,255,0.15)]">
                {/* Liquid Inside */}
                <motion.div
                  className="w-full relative rounded-b-[66px]"
                  initial={{ height: "30%", backgroundColor: "#1e293b" }}
                  animate={{ 
                    height: (reactantA || reactantB) ? "65%" : "30%",
                    backgroundColor: showResult && result ? result.colorTransition[1] : flaskColor
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  {/* Liquid Surface */}
                  <div className="absolute top-0 inset-x-0 h-8 bg-white/20 rounded-[50%] -mt-4 shadow-[0_0_15px_rgba(255,255,255,0.4)]"></div>
                  {renderFlaskAnimation()}
                </motion.div>
              </div>
              
              {/* Beaker Markings */}
              <div className="absolute left-6 bottom-16 space-y-5 z-30 opacity-60">
                <div className="w-4 h-[2px] bg-white"></div>
                <div className="w-8 h-[2px] bg-white"></div>
                <div className="w-4 h-[2px] bg-white"></div>
                <div className="w-8 h-[2px] bg-white"></div>
              </div>
              
              {/* Beaker Lip */}
              <div className="absolute top-[-14px] w-40 h-8 border-[6px] border-slate-400/40 rounded-[50%] z-30 bg-transparent"></div>
              
              {/* Falling Droplets from Selectors */}
              <AnimatePresence>
                {isSimulating && !showResult && (
                  <>
                    <motion.div
                      initial={{ top: -150, left: 30, opacity: 0, scale: 0.5 }}
                      animate={{ top: 200, opacity: [0, 1, 0], scale: 1 }}
                      transition={{ duration: 0.8, repeat: 2, ease: "easeIn", delay: 0.1 }}
                      className="absolute w-4 h-6 bg-cyan-400/80 rounded-full blur-[2px] rounded-t-xl z-40 shadow-[0_0_15px_rgba(6,182,212,0.8)]"
                    />
                    <motion.div
                      initial={{ top: -150, right: 30, opacity: 0, scale: 0.5 }}
                      animate={{ top: 200, opacity: [0, 1, 0], scale: 1 }}
                      transition={{ duration: 0.8, repeat: 2, ease: "easeIn", delay: 0.4 }}
                      className="absolute w-4 h-6 bg-indigo-400/80 rounded-full blur-[2px] rounded-t-xl z-40 shadow-[0_0_15px_rgba(99,102,241,0.8)]"
                    />
                  </>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Glowing Backdrop */}
            <motion.div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[100px] -z-10"
              initial={{ backgroundColor: "rgba(14, 165, 233, 0.05)" }}
              animate={{
                backgroundColor: showResult && result 
                  ? result.colorTransition[1]
                  : flaskColor
              }}
              style={{ opacity: 0.2 }}
              transition={{ duration: 1.5 }}
            />
          </div>

          {/* Results Card */}
          <AnimatePresence mode="wait">
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                className="w-full max-w-2xl bg-slate-900/80 backdrop-blur-3xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
              >
                {result ? (
                  <>
                    <div className="absolute -top-6 -right-6 p-4 opacity-[0.04] pointer-events-none text-cyan-400">
                      <Beaker size={200} />
                    </div>
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider">
                        <Activity size={12} /> Reaction Successful
                      </div>
                      <h3 className="text-3xl font-bold mb-2">
                        {reactantA} + {reactantB}
                      </h3>
                      <div className="text-xl font-mono text-indigo-300 mb-6 pb-6 border-b border-slate-700/50">
                        {result.equation}
                      </div>
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800/80 mb-4 border border-slate-700">
                      <Zap className="text-slate-400" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-slate-300">No Reaction</h3>
                    <p className="text-slate-500 text-lg">
                      These two chemicals ({reactantA} and {reactantB}) do not react significantly under normal conditions in our virtual lab.
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </main>
    </motion.div>
  );
}
