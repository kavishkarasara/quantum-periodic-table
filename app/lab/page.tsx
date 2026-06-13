"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Trash2, RotateCcw, FlaskConical, UserSquare2 } from "lucide-react";
import Link from "next/link";

// 1. Data Engine
interface Chemical {
  symbol: string;
  name: string;
  color: string;
}

const inventoryData: Record<string, Chemical[]> = {
  "Metals": [
    { symbol: "Na", name: "Sodium", color: "#d1d5db" },
    { symbol: "Mg", name: "Magnesium", color: "#9ca3af" },
    { symbol: "Fe", name: "Iron", color: "#78716c" },
    { symbol: "Cu", name: "Copper", color: "#b45309" },
    { symbol: "Ag", name: "Silver", color: "#e5e7eb" },
    { symbol: "Ca", name: "Calcium", color: "#f3f4f6" },
  ],
  "Amphoteric metals": [
    { symbol: "Al", name: "Aluminum", color: "#cbd5e1" },
    { symbol: "Zn", name: "Zinc", color: "#e2e8f0" },
  ],
  "Nonmetals": [
    { symbol: "C", name: "Carbon", color: "#1c1917" },
    { symbol: "S", name: "Sulfur", color: "#fef08a" },
    { symbol: "I", name: "Iodine", color: "#4c1d95" },
  ],
  "Acids": [
    { symbol: "HCl", name: "Hydrochloric Acid", color: "#38bdf8" }, 
    { symbol: "H2SO4", name: "Sulfuric Acid", color: "#fde047" },
    { symbol: "HNO3", name: "Nitric Acid", color: "#f8fafc" },
    { symbol: "CH3COOH", name: "Acetic Acid", color: "#f8fafc" },
  ],
  "Bases": [
    { symbol: "NaOH", name: "Sodium Hydroxide", color: "#e0f2fe" },
    { symbol: "KOH", name: "Potassium Hydroxide", color: "#bae6fd" },
    { symbol: "NH3", name: "Ammonia", color: "#f8fafc" },
  ],
  "Salts (Aqueous)": [
    { symbol: "AgNO3", name: "Silver Nitrate", color: "#f8fafc" },
    { symbol: "BaCl2", name: "Barium Chloride", color: "#f8fafc" },
    { symbol: "KI", name: "Potassium Iodide", color: "#f8fafc" },
    { symbol: "CuSO4", name: "Copper Sulfate", color: "#3b82f6" },
  ],
  "Solvents": [
    { symbol: "H2O", name: "Water", color: "#f0f9ff" }
  ]
};

interface ReactionResult {
  reactants: string[];
  finalEquation: string;
  liquidColor: string;
  bubbleType: "vigorous" | "moderate" | "none" | "precipitation";
  gasColor?: string;
  precipitationColor?: string;
}

const reactionDatabase: ReactionResult[] = [
  // --- METALS + HCl ---
  { reactants: ["Na", "HCl"], finalEquation: "2Na(s) + 2HCl(aq) → 2NaCl(aq) + H₂(g) ↑", liquidColor: "#f1f5f9", bubbleType: "vigorous", gasColor: "#ffffff" },
  { reactants: ["Mg", "HCl"], finalEquation: "Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Fe", "HCl"], finalEquation: "Fe(s) + 2HCl(aq) → FeCl₂(aq) + H₂(g) ↑", liquidColor: "#dcfce7", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Al", "HCl"], finalEquation: "2Al(s) + 6HCl(aq) → 2AlCl₃(aq) + 3H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#ffffff" },
  { reactants: ["Zn", "HCl"], finalEquation: "Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Ca", "HCl"], finalEquation: "Ca(s) + 2HCl(aq) → CaCl₂(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#ffffff" },

  // --- METALS + H2SO4 ---
  { reactants: ["Na", "H2SO4"], finalEquation: "2Na(s) + H₂SO₄(aq) → Na₂SO₄(aq) + H₂(g) ↑", liquidColor: "#f1f5f9", bubbleType: "vigorous", gasColor: "#ffffff" },
  { reactants: ["Mg", "H2SO4"], finalEquation: "Mg(s) + H₂SO₄(aq) → MgSO₄(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Fe", "H2SO4"], finalEquation: "Fe(s) + H₂SO₄(aq) → FeSO₄(aq) + H₂(g) ↑", liquidColor: "#dcfce7", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Al", "H2SO4"], finalEquation: "2Al(s) + 3H₂SO₄(aq) → Al₂(SO₄)₃(aq) + 3H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Zn", "H2SO4"], finalEquation: "Zn(s) + H₂SO₄(aq) → ZnSO₄(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Cu", "H2SO4"], finalEquation: "Cu(s) + 2H₂SO₄(conc) → CuSO₄(aq) + SO₂(g) ↑ + 2H₂O(l)", liquidColor: "#3b82f6", bubbleType: "moderate", gasColor: "#fef08a" },
  { reactants: ["Ca", "H2SO4"], finalEquation: "Ca(s) + H₂SO₄(aq) → CaSO₄(s) ↓ + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff", precipitationColor: "#ffffff" },
  { reactants: ["Ag", "H2SO4"], finalEquation: "2Ag(s) + 2H₂SO₄(conc) → Ag₂SO₄(aq) + SO₂(g) ↑ + 2H₂O(l)", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#fef08a" },

  // --- METALS + HNO3 ---
  { reactants: ["Na", "HNO3"], finalEquation: "Na(s) + 2HNO₃(aq) → NaNO₃(aq) + NO₂(g) ↑ + H₂O(l)", liquidColor: "#f1f5f9", bubbleType: "vigorous", gasColor: "#d97706" },
  { reactants: ["Mg", "HNO3"], finalEquation: "Mg(s) + 4HNO₃(aq) → Mg(NO₃)₂(aq) + 2NO₂(g) ↑ + 2H₂O(l)", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#d97706" },
  { reactants: ["Fe", "HNO3"], finalEquation: "Fe(s) + 6HNO₃(aq) → Fe(NO₃)₃(aq) + 3NO₂(g) ↑ + 3H₂O(l)", liquidColor: "#fef08a", bubbleType: "vigorous", gasColor: "#d97706" },
  { reactants: ["Al", "HNO3"], finalEquation: "Al(s) + HNO₃(conc) → Passivation (No Reaction)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["Zn", "HNO3"], finalEquation: "Zn(s) + 4HNO₃(aq) → Zn(NO₃)₂(aq) + 2NO₂(g) ↑ + 2H₂O(l)", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#d97706" },
  { reactants: ["Cu", "HNO3"], finalEquation: "Cu(s) + 4HNO₃(aq) → Cu(NO₃)₂(aq) + 2NO₂(g) ↑ + 2H₂O(l)", liquidColor: "#3b82f6", bubbleType: "vigorous", gasColor: "#d97706" },
  { reactants: ["Ca", "HNO3"], finalEquation: "Ca(s) + 4HNO₃(aq) → Ca(NO₃)₂(aq) + 2NO₂(g) ↑ + 2H₂O(l)", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#d97706" },
  { reactants: ["Ag", "HNO3"], finalEquation: "Ag(s) + 2HNO₃(aq) → AgNO₃(aq) + NO₂(g) ↑ + H₂O(l)", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#d97706" },

  // --- METALS + ACETIC ACID (CH3COOH) ---
  { reactants: ["Na", "CH3COOH"], finalEquation: "2Na(s) + 2CH₃COOH(aq) → 2CH₃COONa(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#ffffff" },
  { reactants: ["Mg", "CH3COOH"], finalEquation: "Mg(s) + 2CH₃COOH(aq) → (CH₃COO)₂Mg(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Ca", "CH3COOH"], finalEquation: "Ca(s) + 2CH₃COOH(aq) → (CH₃COO)₂Ca(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Fe", "CH3COOH"], finalEquation: "Fe(s) + 2CH₃COOH(aq) → (CH₃COO)₂Fe(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },

  // --- BASES + ACIDS (Neutralization) ---
  { reactants: ["NaOH", "HCl"], finalEquation: "NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["NaOH", "H2SO4"], finalEquation: "2NaOH(aq) + H₂SO₄(aq) → Na₂SO₄(aq) + 2H₂O(l)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["NaOH", "HNO3"], finalEquation: "NaOH(aq) + HNO₃(aq) → NaNO₃(aq) + H₂O(l)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["NaOH", "CH3COOH"], finalEquation: "NaOH(aq) + CH₃COOH(aq) → CH₃COONa(aq) + H₂O(l)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["KOH", "HCl"], finalEquation: "KOH(aq) + HCl(aq) → KCl(aq) + H₂O(l)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["KOH", "H2SO4"], finalEquation: "2KOH(aq) + H₂SO₄(aq) → K₂SO₄(aq) + 2H₂O(l)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["KOH", "HNO3"], finalEquation: "KOH(aq) + HNO₃(aq) → KNO₃(aq) + H₂O(l)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["NH3", "HCl"], finalEquation: "NH₃(aq) + HCl(aq) → NH₄Cl(aq)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["NH3", "H2SO4"], finalEquation: "2NH₃(aq) + H₂SO₄(aq) → (NH₄)₂SO₄(aq)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["NH3", "HNO3"], finalEquation: "NH₃(aq) + HNO₃(aq) → NH₄NO₃(aq)", liquidColor: "#e2e8f0", bubbleType: "none" },
  { reactants: ["NH3", "CH3COOH"], finalEquation: "NH₃(aq) + CH₃COOH(aq) → CH₃COONH₄(aq)", liquidColor: "#e2e8f0", bubbleType: "none" },

  // --- AMPHOTERIC METALS + BASES ---
  { reactants: ["Al", "NaOH"], finalEquation: "2Al(s) + 2NaOH(aq) + 6H₂O(l) → 2Na[Al(OH)₄](aq) + 3H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Zn", "NaOH"], finalEquation: "Zn(s) + 2NaOH(aq) + 2H₂O(l) → Na₂[Zn(OH)₄](aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Al", "KOH"], finalEquation: "2Al(s) + 2KOH(aq) + 6H₂O(l) → 2K[Al(OH)₄](aq) + 3H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["Zn", "KOH"], finalEquation: "Zn(s) + 2KOH(aq) + 2H₂O(l) → K₂[Zn(OH)₄](aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },

  // --- NONMETALS + ACIDS ---
  { reactants: ["C", "HNO3"], finalEquation: "C(s) + 4HNO₃(conc) → CO₂(g) ↑ + 4NO₂(g) ↑ + 2H₂O(l)", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#d97706" },
  { reactants: ["C", "H2SO4"], finalEquation: "C(s) + 2H₂SO₄(conc) → CO₂(g) ↑ + 2SO₂(g) ↑ + 2H₂O(l)", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#fef08a" },
  { reactants: ["S", "HNO3"], finalEquation: "S(s) + 6HNO₃(conc) → H₂SO₄(aq) + 6NO₂(g) ↑ + 2H₂O(l)", liquidColor: "#fde047", bubbleType: "vigorous", gasColor: "#d97706" },
  { reactants: ["S", "H2SO4"], finalEquation: "S(s) + 2H₂SO₄(conc) → 3SO₂(g) ↑ + 2H₂O(l)", liquidColor: "#fde047", bubbleType: "vigorous", gasColor: "#fef08a" },
  { reactants: ["I", "HNO3"], finalEquation: "I₂(s) + 10HNO₃(conc) → 2HIO₃(aq) + 10NO₂(g) ↑ + 4H₂O(l)", liquidColor: "#fde047", bubbleType: "vigorous", gasColor: "#d97706" },

  // --- PRECIPITATION REACTIONS (SALTS, BASES, ETC) ---
  { reactants: ["AgNO3", "HCl"], finalEquation: "AgNO₃(aq) + HCl(aq) → AgCl(s) ↓ + HNO₃(aq)", liquidColor: "#f8fafc", bubbleType: "precipitation", precipitationColor: "#ffffff" },
  { reactants: ["AgNO3", "KI"], finalEquation: "AgNO₃(aq) + KI(aq) → AgI(s) ↓ + KNO₃(aq)", liquidColor: "#f8fafc", bubbleType: "precipitation", precipitationColor: "#fde047" }, // Yellow ppt
  { reactants: ["BaCl2", "H2SO4"], finalEquation: "BaCl₂(aq) + H₂SO₄(aq) → BaSO₄(s) ↓ + 2HCl(aq)", liquidColor: "#f8fafc", bubbleType: "precipitation", precipitationColor: "#ffffff" },
  { reactants: ["BaCl2", "CuSO4"], finalEquation: "BaCl₂(aq) + CuSO₄(aq) → BaSO₄(s) ↓ + CuCl₂(aq)", liquidColor: "#6ee7b7", bubbleType: "precipitation", precipitationColor: "#ffffff" }, // Blue/green liquid, white ppt
  { reactants: ["KI", "CuSO4"], finalEquation: "4KI(aq) + 2CuSO₄(aq) → 2CuI(s) ↓ + I₂(aq) + 2K₂SO₄(aq)", liquidColor: "#b45309", bubbleType: "precipitation", precipitationColor: "#fde047" }, // Brown liquid, yellowish/tan ppt
  { reactants: ["NaOH", "CuSO4"], finalEquation: "2NaOH(aq) + CuSO₄(aq) → Cu(OH)₂(s) ↓ + Na₂SO₄(aq)", liquidColor: "#e0f2fe", bubbleType: "precipitation", precipitationColor: "#3b82f6" }, // Blue ppt
  { reactants: ["KOH", "CuSO4"], finalEquation: "2KOH(aq) + CuSO₄(aq) → Cu(OH)₂(s) ↓ + K₂SO₄(aq)", liquidColor: "#e0f2fe", bubbleType: "precipitation", precipitationColor: "#3b82f6" },
  { reactants: ["NH3", "CuSO4"], finalEquation: "4NH₃(aq) + CuSO₄(aq) → [Cu(NH₃)₄]SO₄(aq)", liquidColor: "#1d4ed8", bubbleType: "none" }, // Deep blue complex solution (no ppt)

  // --- DISPLACEMENT REACTIONS ---
  { reactants: ["Cu", "AgNO3"], finalEquation: "Cu(s) + 2AgNO₃(aq) → Cu(NO₃)₂(aq) + 2Ag(s) ↓", liquidColor: "#3b82f6", bubbleType: "precipitation", precipitationColor: "#9ca3af" }, // Gray/Silver ppt, blue liquid
  { reactants: ["Mg", "CuSO4"], finalEquation: "Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s) ↓", liquidColor: "#f8fafc", bubbleType: "precipitation", precipitationColor: "#b45309" }, // Copper ppt
  { reactants: ["Fe", "CuSO4"], finalEquation: "Fe(s) + CuSO₄(aq) → FeSO₄(aq) + Cu(s) ↓", liquidColor: "#dcfce7", bubbleType: "precipitation", precipitationColor: "#b45309" }, // Pale green liquid, Copper ppt
  { reactants: ["Zn", "CuSO4"], finalEquation: "Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s) ↓", liquidColor: "#f8fafc", bubbleType: "precipitation", precipitationColor: "#b45309" }, // Copper ppt

  // --- REACTIONS WITH WATER (H2O) ---
  { reactants: ["Na", "H2O"], finalEquation: "2Na(s) + 2H₂O(l) → 2NaOH(aq) + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "vigorous", gasColor: "#ffffff" },
  { reactants: ["Ca", "H2O"], finalEquation: "Ca(s) + 2H₂O(l) → Ca(OH)₂(s) ↓ + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "precipitation", precipitationColor: "#ffffff", gasColor: "#ffffff" },
  { reactants: ["Mg", "H2O"], finalEquation: "Mg(s) + 2H₂O(l) → Mg(OH)₂(s) ↓ + H₂(g) ↑", liquidColor: "#f8fafc", bubbleType: "precipitation", precipitationColor: "#ffffff", gasColor: "#ffffff" },
  { reactants: ["H2SO4", "H2O"], finalEquation: "H₂SO₄(l) + H₂O(l) → H₃O⁺(aq) + HSO₄⁻(aq) (Highly Exothermic!)", liquidColor: "#f8fafc", bubbleType: "moderate", gasColor: "#ffffff" },
  { reactants: ["HCl", "H2O"], finalEquation: "HCl(g) + H₂O(l) → H₃O⁺(aq) + Cl⁻(aq) (Dilution)", liquidColor: "#f8fafc", bubbleType: "none" },
  { reactants: ["HNO3", "H2O"], finalEquation: "HNO₃(l) + H₂O(l) → H₃O⁺(aq) + NO₃⁻(aq) (Dilution)", liquidColor: "#f8fafc", bubbleType: "none" },
  { reactants: ["CH3COOH", "H2O"], finalEquation: "CH₃COOH(l) + H₂O(l) ⇌ H₃O⁺(aq) + CH₃COO⁻(aq)", liquidColor: "#f8fafc", bubbleType: "none" },
  { reactants: ["NaOH", "H2O"], finalEquation: "NaOH(s) + H₂O(l) → Na⁺(aq) + OH⁻(aq) (Exothermic Dissolution)", liquidColor: "#f8fafc", bubbleType: "none" },
  { reactants: ["KOH", "H2O"], finalEquation: "KOH(s) + H₂O(l) → K⁺(aq) + OH⁻(aq) (Exothermic Dissolution)", liquidColor: "#f8fafc", bubbleType: "none" },
  { reactants: ["NH3", "H2O"], finalEquation: "NH₃(g) + H₂O(l) ⇌ NH₄⁺(aq) + OH⁻(aq)", liquidColor: "#f8fafc", bubbleType: "none" }
];

export default function VirtualLabUI() {
  const [selectedChemicals, setSelectedChemicals] = useState<Chemical[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");
  const [currentResult, setCurrentResult] = useState<ReactionResult | null>(null);

  const handleSelect = (chem: Chemical) => {
    if (status !== "idle") return;
    if (selectedChemicals.length < 2) {
      setSelectedChemicals(prev => [...prev, chem]);
    }
  };

  const handleClear = () => {
    if (status !== "idle") return;
    setSelectedChemicals([]);
  };

  const handleReset = () => {
    setSelectedChemicals([]);
    setStatus("idle");
    setCurrentResult(null);
  };

  const handleStart = () => {
    if (selectedChemicals.length === 0) return;
    
    setStatus("loading");
    
    // Find Reaction
    const symbols = selectedChemicals.map(c => c.symbol);
    const reaction = reactionDatabase.find(r => 
      r.reactants.length === symbols.length &&
      r.reactants.every(sym => symbols.includes(sym))
    );

    setTimeout(() => {
      setStatus("done");
      if (reaction) {
        setCurrentResult(reaction);
      } else {
        // Fallback for no reaction
        setCurrentResult({
          reactants: symbols,
          finalEquation: `${symbols.join(" + ")} → No Reaction`,
          liquidColor: "#334155",
          bubbleType: "none"
        });
      }
    }, 2000); // 2 second animation
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans p-4 md:p-8 overflow-x-hidden">
      
      {/* Header */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between mb-6">
        <Link href="/" className="flex items-center gap-2 p-2 bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span className="hidden md:inline pr-2 font-semibold">Back</span>
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-bold text-xl md:text-3xl text-cyan-400">Lab Simulator</span>
          <div className="p-1 bg-slate-800 rounded-lg shadow-inner">
             <UserSquare2 size={28} className="text-slate-300" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Inventory */}
        <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 lg:max-h-[80vh] overflow-y-auto custom-scrollbar shadow-2xl flex flex-col gap-6">
          {Object.entries(inventoryData).map(([category, chemicals]) => (
            <div key={category}>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-800 pb-2">
                {category}
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-4 gap-3">
                {chemicals.map((chem) => {
                  const isSelected = selectedChemicals.includes(chem);
                  return (
                    <motion.button
                      whileTap={status === "idle" && !isSelected && selectedChemicals.length < 2 ? { scale: 0.9 } : {}}
                      onClick={() => handleSelect(chem)}
                      disabled={status !== "idle" || selectedChemicals.length >= 2 || isSelected}
                      key={chem.symbol}
                      className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center p-2 transition-all border-2 ${
                        isSelected 
                          ? "border-cyan-500 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.3)] opacity-50" 
                          : "border-slate-800 bg-slate-950 hover:border-slate-600"
                      } disabled:opacity-40 disabled:cursor-not-allowed`}
                    >
                      <div 
                        className="w-8 h-8 rounded-lg mb-2 shadow-inner border border-white/10 flex items-center justify-center"
                        style={{ backgroundColor: chem.color }}
                      >
                        <FlaskConical size={16} className="text-black/40" />
                      </div>
                      <span className="font-bold text-slate-300 text-sm">{chem.symbol}</span>
                      
                      {isSelected && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-500 text-slate-900 rounded-full flex items-center justify-center text-xs font-black shadow-lg">
                          ✓
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Right Col: Stage, Equation, Controls */}
        <div className="lg:col-span-7 flex flex-col bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 lg:max-h-[80vh] shadow-2xl relative">
          
          {/* Top Section (Equation Area) */}
          <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 h-[100px] flex items-center justify-center relative overflow-hidden shadow-inner shrink-0">
            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.span 
                  key="empty"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="text-slate-500 font-mono text-sm text-center"
                >
                  Select up to 2 chemicals to simulate a reaction...
                </motion.span>
              )}
              {status === "loading" && (
                <motion.div 
                  key="loading"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="flex gap-2"
                >
                  <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce"></div>
                  <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </motion.div>
              )}
              {status === "done" && currentResult && (
                <motion.div 
                  key="done"
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center font-mono font-bold text-base md:text-xl text-white"
                >
                  {currentResult.finalEquation}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Center Section (The Stage) */}
          <div className="flex-1 flex flex-col items-center justify-center relative py-12 shrink-0 min-h-[300px]">
            <div className="relative w-56 h-64 flex items-end justify-center">
              
              {/* Beaker Outline */}
              <div className="absolute inset-0 border-[8px] border-slate-600/60 rounded-b-[48px] rounded-t-lg z-20 pointer-events-none"></div>
              <div className="absolute -top-3 w-60 h-8 border-[8px] border-slate-600/60 rounded-[50%] z-20 pointer-events-none bg-slate-950/20 backdrop-blur-[2px]"></div>

              {/* Solid Items Dropping In (Before Reaction) */}
              <div className="absolute bottom-8 flex gap-4 z-10 w-full justify-center">
                <AnimatePresence>
                  {status === "idle" && selectedChemicals.map((chem, i) => (
                    <motion.div
                      key={`${chem.symbol}-${i}`}
                      initial={{ y: -300, opacity: 0, rotate: Math.random() * 90 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-xl text-slate-900 shadow-xl border-2 border-white/30"
                      style={{ backgroundColor: chem.color }}
                    >
                      {chem.symbol}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Liquid Animation (During & After Reaction) */}
              {(status === "loading" || status === "done") && currentResult && (
                 <motion.div
                   initial={{ height: "0%" }}
                   animate={{ height: "75%" }}
                   transition={{ duration: 1.5, ease: "easeInOut" }}
                   className="w-[calc(100%-16px)] absolute bottom-[8px] rounded-b-[40px] z-10 overflow-hidden"
                   style={{ backgroundColor: currentResult.liquidColor, boxShadow: `0 0 50px ${currentResult.liquidColor}40` }}
                 >
                   {/* Surface Ellipse */}
                   <div className="absolute top-0 inset-x-0 h-6 bg-white/30 rounded-[50%] -mt-3 z-10"></div>
                   
                   {/* Precipitation */}
                   {currentResult.precipitationColor && (
                     <motion.div
                       className="absolute bottom-0 inset-x-0 rounded-b-[40px] bg-opacity-90 border-t border-black/10 z-0"
                       style={{ backgroundColor: currentResult.precipitationColor }}
                       initial={{ height: "0%", opacity: 0 }}
                       animate={{ height: "25%", opacity: 1 }}
                       transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                     >
                       <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle, #000 2px, transparent 2px)', backgroundSize: '8px 8px' }}></div>
                     </motion.div>
                   )}

                   {/* Bubbles */}
                   {currentResult.bubbleType !== "none" && (
                     <div className="absolute inset-0 z-20">
                        {[...Array(currentResult.bubbleType === "vigorous" ? 25 : 10)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute bg-white/50 rounded-full"
                            style={{
                              width: Math.random() * 10 + 4,
                              height: Math.random() * 10 + 4,
                              left: `${Math.random() * 80 + 10}%`,
                            }}
                            initial={{ bottom: "-10%", opacity: 0 }}
                            animate={{ 
                              bottom: "100%", 
                              opacity: [0, 1, 0],
                              x: (Math.random() - 0.5) * 40
                            }}
                            transition={{
                              duration: Math.random() * 1.5 + 0.5,
                              repeat: Infinity,
                              delay: Math.random() * 2
                            }}
                          />
                        ))}
                     </div>
                   )}
                 </motion.div>
              )}

              {/* Smoke / Gas Animation */}
              {(status === "loading" || status === "done") && currentResult?.gasColor && (
                <div className="absolute -top-48 inset-x-0 h-56 pointer-events-none z-30 flex justify-center overflow-visible">
                  {[...Array(25)].map((_, i) => (
                    <motion.div
                      key={`gas-${i}`}
                      className="absolute bottom-10 w-16 h-16 rounded-full blur-[16px]"
                      style={{ backgroundColor: currentResult.gasColor }}
                      initial={{ y: 0, opacity: 0, scale: 0.5, x: 0 }}
                      animate={{ 
                        y: -180 - Math.random() * 120, 
                        opacity: [0, 0.5, 0], 
                        scale: 1 + Math.random() * 3,
                        x: (Math.random() - 0.5) * 100
                      }}
                      transition={{
                        duration: 2.5 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2.5,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 shrink-0 pt-4">
            <button
              onClick={handleClear}
              disabled={status !== "idle" || selectedChemicals.length === 0}
              className="p-4 rounded-full bg-slate-800 text-slate-400 disabled:opacity-30 hover:bg-red-500/20 hover:text-red-400 transition-colors"
            >
              <Trash2 size={28} />
            </button>
            
            <button
              onClick={handleStart}
              disabled={status !== "idle" || selectedChemicals.length === 0}
              className="flex-1 py-4 rounded-full bg-cyan-500 text-slate-950 font-bold text-xl disabled:opacity-30 disabled:bg-slate-800 disabled:text-slate-500 active:scale-95 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] disabled:shadow-none"
            >
              Start reaction
            </button>
            
            <button
              onClick={handleReset}
              disabled={status === "idle" && selectedChemicals.length === 0}
              className="p-4 rounded-full bg-slate-800 text-slate-400 disabled:opacity-30 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <RotateCcw size={28} />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
