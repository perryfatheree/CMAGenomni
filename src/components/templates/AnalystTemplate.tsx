import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { 
  Table, TrendingUp, Activity, BarChart3, PieChart, 
  ArrowUpRight, ArrowDownRight, Info, CheckCircle2
} from 'lucide-react';

interface AnalystTemplateProps {
  data: CMAData;
}

export default function AnalystTemplate({ data }: AnalystTemplateProps) {
  const { subjectProperty, comparables, marketTrends, suggestedPriceRange } = data;

  const avgCompPrice = comparables.reduce((acc, curr) => acc + curr.price, 0) / comparables.length;
  const avgCompSqft = comparables.reduce((acc, curr) => acc + curr.sqft, 0) / comparables.length;
  const avgPricePerSqft = avgCompPrice / avgCompSqft;

  return (
    <div className="bg-[#f8fafc] min-h-screen font-mono text-slate-900 p-8">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&family=Inter:wght@400;600;700&display=swap');
        .analyst-font-mono { font-family: 'JetBrains Mono', monospace; }
        .analyst-font-sans { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <header className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Activity className="w-5 h-5" />
              <span className="analyst-font-mono text-xs font-bold uppercase tracking-widest">Market Intelligence Report</span>
            </div>
            <h1 className="analyst-font-sans text-3xl font-bold tracking-tight">{subjectProperty.address}</h1>
            <p className="text-slate-500 analyst-font-mono text-sm mt-1">{subjectProperty.city}, {subjectProperty.state} {subjectProperty.zip}</p>
          </div>
          <div className="bg-slate-50 p-4 border border-slate-200 rounded-sm">
            <p className="analyst-font-mono text-[10px] uppercase text-slate-400 mb-1">Report Generated</p>
            <p className="analyst-font-mono text-sm font-bold">{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
        </header>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Avg. Comp Price', value: formatCurrency(avgCompPrice), icon: TrendingUp, color: 'text-blue-600' },
            { label: 'Price per Sq Ft', value: formatCurrency(avgPricePerSqft), icon: BarChart3, color: 'text-indigo-600' },
            { label: 'Avg. Days on Market', value: '18 Days', icon: Activity, color: 'text-emerald-600' },
            { label: 'Inventory Level', value: '1.2 Months', icon: PieChart, color: 'text-amber-600' },
          ].map((metric, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-sm shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
                <span className="text-[10px] analyst-font-mono text-slate-400 uppercase tracking-widest">Metric {idx + 1}</span>
              </div>
              <p className="text-2xl font-bold analyst-font-sans">{metric.value}</p>
              <p className="text-xs analyst-font-mono text-slate-500 mt-1">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Market Trends Chart */}
          <div className="lg:col-span-2 bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h2 className="analyst-font-sans text-xl font-bold flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Price Trend Analysis
              </h2>
              <div className="flex gap-4 text-[10px] analyst-font-mono uppercase tracking-widest">
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full" /> Avg Price</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 bg-slate-300 rounded-full" /> Inventory</span>
              </div>
            </div>
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={marketTrends}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fontSize: 10, fill: '#94a3b8', fontFamily: 'JetBrains Mono' }}
                    tickFormatter={(val) => `$${val/1000}k`}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '0px', border: '1px solid #e2e8f0', fontFamily: 'JetBrains Mono', fontSize: '12px' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="avgPrice" 
                    stroke="#3b82f6" 
                    strokeWidth={3} 
                    dot={{ r: 4, fill: '#3b82f6', strokeWidth: 0 }} 
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Subject Property Details */}
          <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm space-y-6">
            <h2 className="analyst-font-sans text-xl font-bold">Subject Property</h2>
            <div className="aspect-video rounded-sm overflow-hidden bg-slate-100">
              <img 
                src={subjectProperty.images[0]} 
                alt="Subject" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="analyst-font-mono text-xs text-slate-500 uppercase">Square Footage</span>
                <span className="analyst-font-mono text-sm font-bold">{subjectProperty.sqft.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="analyst-font-mono text-xs text-slate-500 uppercase">Year Built</span>
                <span className="analyst-font-mono text-sm font-bold">{subjectProperty.yearBuilt}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-100">
                <span className="analyst-font-mono text-xs text-slate-500 uppercase">Beds / Baths</span>
                <span className="analyst-font-mono text-sm font-bold">{subjectProperty.beds} / {subjectProperty.baths}</span>
              </div>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-sm">
              <p className="analyst-font-mono text-[10px] uppercase text-blue-600 font-bold mb-2">Analyst Note</p>
              <p className="analyst-font-sans text-sm text-blue-900 leading-relaxed">
                Property is positioned in a high-demand micro-market with inventory levels 20% below the city average.
              </p>
            </div>
          </div>
        </div>

        {/* Comparables Table */}
        <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden">
          <div className="p-8 border-b border-slate-200">
            <h2 className="analyst-font-sans text-xl font-bold">Comparable Sales Data</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 analyst-font-mono text-[10px] uppercase text-slate-400 tracking-widest">Address</th>
                  <th className="p-4 analyst-font-mono text-[10px] uppercase text-slate-400 tracking-widest">Status</th>
                  <th className="p-4 analyst-font-mono text-[10px] uppercase text-slate-400 tracking-widest">Price</th>
                  <th className="p-4 analyst-font-mono text-[10px] uppercase text-slate-400 tracking-widest">Sq Ft</th>
                  <th className="p-4 analyst-font-mono text-[10px] uppercase text-slate-400 tracking-widest">$/Sq Ft</th>
                  <th className="p-4 analyst-font-mono text-[10px] uppercase text-slate-400 tracking-widest">Distance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparables.map((comp, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 analyst-font-sans text-sm font-bold">{comp.address}</td>
                    <td className="p-4">
                      <span className={`text-[10px] analyst-font-mono font-bold px-2 py-1 rounded-full ${
                        comp.status === 'Sold' ? 'bg-emerald-100 text-emerald-700' :
                        comp.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {comp.status}
                      </span>
                    </td>
                    <td className="p-4 analyst-font-mono text-sm">{formatCurrency(comp.price)}</td>
                    <td className="p-4 analyst-font-mono text-sm">{comp.sqft.toLocaleString()}</td>
                    <td className="p-4 analyst-font-mono text-sm">{formatCurrency(comp.price / comp.sqft)}</td>
                    <td className="p-4 analyst-font-mono text-sm">{comp.distance} mi</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Valuation Summary */}
        <div className="bg-slate-900 text-white p-12 rounded-sm shadow-xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="analyst-font-sans text-3xl font-bold">Valuation Summary</h2>
            <p className="analyst-font-mono text-slate-400 text-sm max-w-xl">
              Based on a weighted analysis of recent sales, current inventory, and seasonal trends, we recommend the following pricing strategy.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="analyst-font-mono text-[10px] uppercase tracking-[0.3em] text-blue-400">Recommended List Price</span>
            <span className="analyst-font-sans text-6xl font-bold tracking-tighter">{formatCurrency(suggestedPriceRange.recommended)}</span>
            <div className="flex gap-4 analyst-font-mono text-xs text-slate-500 mt-2">
              <span>MIN: {formatCurrency(suggestedPriceRange.min)}</span>
              <span className="text-slate-700">|</span>
              <span>MAX: {formatCurrency(suggestedPriceRange.max)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
