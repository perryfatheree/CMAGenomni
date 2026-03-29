import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { 
  Map, Ruler, Info, Activity, 
  Compass, Droplets, Sun, Wind,
  Zap, Trees
} from 'lucide-react';

interface LandTemplateProps {
  data: CMAData;
}

export default function LandTemplate({ data }: LandTemplateProps) {
  const { subjectProperty, comparables, suggestedPriceRange } = data;

  return (
    <div className="bg-[#f8fafc] min-h-screen font-mono text-slate-900 selection:bg-indigo-500/10">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600&family=Inter:wght@400;600;700&display=swap');
        .land-font-mono { font-family: 'JetBrains Mono', monospace; }
        .land-font-sans { font-family: 'Inter', sans-serif; }
      `}} />

      <div className="max-w-7xl mx-auto p-8 space-y-8">
        {/* Header */}
        <header className="bg-white border border-slate-200 p-12 rounded-sm shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-[100px] -mr-32 -mt-32" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-indigo-600 mb-4">
              <Map className="w-6 h-6" />
              <span className="land-font-mono text-xs font-bold uppercase tracking-[0.4em]">Land Development Analysis</span>
            </div>
            <h1 className="land-font-sans text-5xl font-bold tracking-tight">{subjectProperty.address}</h1>
            <p className="text-slate-500 land-font-mono text-sm mt-2">{subjectProperty.city}, {subjectProperty.state} • Unimproved Land</p>
          </div>
          <div className="bg-slate-50 p-6 border border-slate-200 rounded-sm relative z-10">
            <p className="land-font-mono text-[10px] uppercase text-slate-400 mb-2 tracking-widest">Acreage Total</p>
            <p className="land-font-mono text-3xl font-bold">12.45 AC</p>
          </div>
        </header>

        {/* Technical Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Zoning Class', value: 'R-1 Residential', icon: Info, color: 'text-indigo-600' },
            { label: 'Topography', value: 'Level / Cleared', icon: Compass, color: 'text-emerald-600' },
            { label: 'Utilities', value: 'At Perimeter', icon: Droplets, color: 'text-blue-600' },
            { label: 'Access', value: 'Paved Road', icon: Activity, color: 'text-amber-600' },
          ].map((metric, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
              <metric.icon className={`w-6 h-6 ${metric.color} mb-6`} />
              <p className="text-xl font-bold land-font-sans mb-1">{metric.value}</p>
              <p className="text-[10px] land-font-mono text-slate-400 uppercase tracking-widest">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white border border-slate-200 p-12 rounded-sm shadow-sm space-y-12">
            <div className="flex items-center justify-between">
              <h2 className="land-font-sans text-2xl font-bold">Development Potential</h2>
              <span className="land-font-mono text-[10px] uppercase tracking-widest text-slate-400">Section 01</span>
            </div>
            <p className="land-font-sans text-lg text-slate-600 leading-relaxed">
              {subjectProperty.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-slate-100">
              <div className="space-y-4">
                <h3 className="land-font-mono text-xs font-bold uppercase tracking-widest text-indigo-600">Site Advantages</h3>
                <ul className="space-y-3">
                  {['High visibility corridor', 'Minimal clearing required', 'Favorable soil report', 'Established drainage'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm land-font-sans text-slate-500">
                      <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="land-font-mono text-xs font-bold uppercase tracking-widest text-indigo-600">Zoning Details</h3>
                <ul className="space-y-3">
                  {['Max density: 4 units/acre', 'Setback: 25ft front', 'Height limit: 35ft', 'Utility easements: 10ft'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm land-font-sans text-slate-500">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
              <h2 className="land-font-sans text-xl font-bold mb-6">Aerial Context</h2>
              <div className="aspect-square rounded-sm overflow-hidden bg-slate-100">
                <img 
                  src={subjectProperty.images[0]} 
                  alt="Aerial" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="bg-indigo-900 text-white p-8 rounded-sm shadow-xl">
              <Ruler className="w-10 h-10 mb-6 text-indigo-400 opacity-40" />
              <h3 className="land-font-sans text-xl font-bold mb-4">Market Positioning</h3>
              <p className="land-font-mono text-xs text-indigo-200 leading-relaxed opacity-80">
                This parcel represents a strategic acquisition in the OKC path of progress. Current valuation reflects unimproved state with significant upside upon entitlement.
              </p>
            </div>
          </div>
        </div>

        {/* Comparables */}
        <div className="bg-white border border-slate-200 rounded-sm shadow-sm overflow-hidden">
          <div className="p-12 border-b border-slate-200">
            <h2 className="land-font-sans text-2xl font-bold">Comparable Land Sales</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-6 land-font-mono text-[10px] uppercase text-slate-400 tracking-widest">Address</th>
                  <th className="p-6 land-font-mono text-[10px] uppercase text-slate-400 tracking-widest">Status</th>
                  <th className="p-6 land-font-mono text-[10px] uppercase text-slate-400 tracking-widest">Price</th>
                  <th className="p-6 land-font-mono text-[10px] uppercase text-slate-400 tracking-widest">Acreage</th>
                  <th className="p-6 land-font-mono text-[10px] uppercase text-slate-400 tracking-widest">$/Acre</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparables.map((comp, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 land-font-sans text-sm font-bold">{comp.address}</td>
                    <td className="p-6">
                      <span className={`text-[10px] land-font-mono font-bold px-3 py-1 rounded-full ${
                        comp.status === 'Sold' ? 'bg-emerald-100 text-emerald-700' :
                        comp.status === 'Pending' ? 'bg-amber-100 text-amber-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {comp.status}
                      </span>
                    </td>
                    <td className="p-6 land-font-mono text-sm">{formatCurrency(comp.price)}</td>
                    <td className="p-6 land-font-mono text-sm">{(comp.sqft / 43560).toFixed(2)} AC</td>
                    <td className="p-6 land-font-mono text-sm">{formatCurrency(comp.price / (comp.sqft / 43560))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Future Build Potential */}
        <div className="bg-slate-900 text-white p-12 rounded-sm shadow-sm overflow-hidden relative">
          <div className="absolute inset-0 opacity-10">
            <img 
              src={subjectProperty.images[1]} 
              alt="Site View" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-emerald-400 mb-4">
                <Zap className="w-6 h-6" />
                <span className="land-font-mono text-xs font-bold uppercase tracking-[0.4em]">Future Build Potential</span>
              </div>
              <h2 className="land-font-sans text-4xl font-bold leading-tight">Development <br />Readiness Analysis.</h2>
              <p className="land-font-sans text-lg text-slate-400 leading-relaxed">
                This parcel has been evaluated for immediate residential or commercial development. Our analysis covers the critical infrastructure required for your vision.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Zap, label: 'Utility Access', value: 'Electric at Road' },
                  { icon: Droplets, label: 'Water Rights', value: 'Well Permit Ready' },
                  { icon: Trees, label: 'Site Clearing', value: 'Minimal / Level' },
                  { icon: Ruler, label: 'Soil Quality', value: 'Perc Test Passed' },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-sm">
                    <item.icon className="w-5 h-5 text-emerald-400 mb-3" />
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-1">{item.label}</p>
                    <p className="font-bold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-video rounded-sm border border-white/10 bg-white/5 flex items-center justify-center p-12 text-center">
                <div className="space-y-4">
                  <p className="land-font-mono text-xs uppercase tracking-[0.3em] text-emerald-400">Architectural Vision</p>
                  <p className="land-font-sans text-2xl font-bold">Site is ready for immediate foundation work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Valuation Summary */}
        <div className="bg-slate-900 text-white p-16 rounded-sm shadow-2xl flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
          <div className="space-y-6 text-center md:text-left relative z-10">
            <h2 className="land-font-sans text-4xl font-bold">Valuation Summary</h2>
            <p className="land-font-mono text-slate-400 text-sm max-w-xl">
              Valuation derived from a comparative analysis of unimproved land sales within a 5-mile radius, adjusted for utility access and zoning entitlements.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4 relative z-10">
            <span className="land-font-mono text-[10px] uppercase tracking-[0.4em] text-indigo-400">Recommended List Price</span>
            <span className="land-font-sans text-7xl font-bold tracking-tighter">{formatCurrency(suggestedPriceRange.recommended)}</span>
            <div className="flex gap-6 land-font-mono text-xs text-slate-500 mt-4">
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
