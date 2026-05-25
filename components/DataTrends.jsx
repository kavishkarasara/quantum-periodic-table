import React, { useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid } from 'recharts';
import { ELEMENTS } from '@/lib/elementsData';
import { Activity, CircleDashed } from 'lucide-react';

export default function DataTrends({ el }) {
  const [metric, setMetric] = useState('electronegativity'); // 'electronegativity' | 'atomicRadius' | 'melt'
  const [comparison, setComparison] = useState('period'); // 'period' | 'group'

  const data = useMemo(() => {
    let filtered = [];
    if (comparison === 'period') {
      filtered = ELEMENTS.filter(e => e.period === el.period);
    } else {
      filtered = ELEMENTS.filter(e => e.group === el.group && el.group !== null);
      if (filtered.length === 0) {
        // Fallback for lanthanides/actinides which don't have standard groups
        filtered = ELEMENTS.filter(e => e.cat === el.cat);
      }
    }

    // Sort by atomic number
    filtered.sort((a, b) => a.n - b.n);

    return filtered.map(e => ({
      name: e.sym,
      fullName: e.name,
      value: e[metric] || 0,
      isCurrent: e.n === el.n,
      color: e.n === el.n ? '#ff4d6d' : '#4cc9f0'
    }));
  }, [el, metric, comparison]);

  const metricLabel = {
    electronegativity: 'Electronegativity (Pauling)',
    atomicRadius: 'Atomic Radius (pm)',
    melt: 'Melting Point (K)'
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Controls */}
      <div className="flex flex-wrap gap-4 items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
        <div className="flex gap-2">
          <button 
            onClick={() => setMetric('electronegativity')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors ${metric === 'electronegativity' ? 'bg-[#4cc9f0] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            <Activity size={14} /> Electronegativity
          </button>
          <button 
            onClick={() => setMetric('atomicRadius')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors ${metric === 'atomicRadius' ? 'bg-[#4cc9f0] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            <CircleDashed size={14} /> Atomic Radius
          </button>
          <button 
            onClick={() => setMetric('melt')}
            className={`px-3 py-1.5 text-xs font-bold rounded-md flex items-center gap-1.5 transition-colors ${metric === 'melt' ? 'bg-[#4cc9f0] text-black' : 'bg-white/10 text-white hover:bg-white/20'}`}
          >
            <span className="text-sm leading-none">🌡️</span> Melting Point
          </button>
        </div>
        
        <div className="flex gap-2 bg-black/40 p-1 rounded-lg border border-white/5">
          <button 
            onClick={() => setComparison('period')}
            className={`px-3 py-1 text-xs rounded-md transition-colors ${comparison === 'period' ? 'bg-white/20 text-white font-bold' : 'text-white/50 hover:text-white'}`}
          >
            Same Period
          </button>
          <button 
            onClick={() => setComparison('group')}
            className={`px-3 py-1 text-xs rounded-md transition-colors ${comparison === 'group' ? 'bg-white/20 text-white font-bold' : 'text-white/50 hover:text-white'}`}
          >
            Same Group
          </button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[300px] w-full bg-black/20 rounded-xl p-4 border border-white/5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 25 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis 
              dataKey="name" 
              stroke="rgba(255,255,255,0.5)" 
              tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} 
              axisLine={false} 
              tickLine={false} 
              label={{ value: comparison === 'period' ? 'Elements in Same Period' : 'Elements in Same Group', position: 'insideBottom', offset: -15, fill: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 'bold' }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.5)" 
              tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} 
              axisLine={false} 
              tickLine={false} 
              label={{ value: metricLabel[metric], angle: -90, position: 'insideLeft', offset: 10, fill: 'rgba(255,255,255,0.7)', fontSize: 11, fontWeight: 'bold' }}
            />
            <Tooltip 
              cursor={{fill: 'rgba(255,255,255,0.05)'}}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-[#0a0f1c] border border-white/20 p-3 rounded-lg shadow-xl">
                      <p className="font-bold text-white mb-1">{data.fullName} ({data.name})</p>
                      <p className="text-sm" style={{color: data.color}}>
                        {metricLabel[metric]}: {data.value || 'N/A'}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="value" radius={[4, 4, 0, 0]} animationDuration={1000}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center">
        <p className="text-xs text-white/40 italic">
          Comparing <strong className="text-white/70">{el.name}</strong> against other elements in its {comparison}.
        </p>
      </div>
    </div>
  );
}
