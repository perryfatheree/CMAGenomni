import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { 
  Hammer, ShieldCheck, Ruler, Sparkles, 
  Construction, MapPin, Calendar, Info
} from 'lucide-react';

interface NewConstructionTemplateProps {
  data: CMAData;
}

export default function NewConstructionTemplate({ data }: NewConstructionTemplateProps) {
  const { subjectProperty, comparables, suggestedPriceRange } = data;

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900 selection:bg-blue-500/10">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;700&family=Inter:wght@300;400;600&display=swap');
        .new-display { font-family: 'Space Grotesk', sans-serif; }
        .new-sans { font-family: 'Inter', sans-serif; }
      `}} />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center p-12 bg-slate-50">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-bold uppercase tracking-widest"
            >
              <Construction className="w-4 h-4" />
              New Construction Report
            </motion.div>
            <h1 className="new-display text-6xl md:text-8xl font-bold leading-tight tracking-tighter">
              The Future of <br />
              <span className="text-blue-600">Living.</span>
            </h1>
            <p className="new-sans text-xl text-slate-500 max-w-md">
              {subjectProperty.address}, {subjectProperty.city} • Modern Architecture & Builder Warranty
            </p>
          </div>
          <div className="relative">
            <img
              src={subjectProperty.images[0]}
              alt={subjectProperty.address}
              className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -left-8 p-8 bg-white shadow-xl rounded-2xl border border-slate-100">
               <div className="flex items-center gap-4">
                 <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                   <ShieldCheck className="w-6 h-6" />
                 </div>
                 <div>
                   <p className="text-xs uppercase tracking-widest text-slate-400">Warranty</p>
                   <p className="font-bold">10-Year Structural</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Builder & Specs */}
      <section className="py-32 px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="new-display text-5xl font-bold">Architectural Excellence</h2>
            <p className="new-sans text-lg text-slate-600 leading-relaxed">
              {subjectProperty.description}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Ruler, label: 'Lot Size', value: '0.25 Acres' },
                { icon: Hammer, label: 'Builder', value: 'Elite Homes' },
                { icon: Sparkles, label: 'Finishes', value: 'Premium' },
                { icon: Calendar, label: 'Completion', value: '2024' },
              ].map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="p-3 bg-slate-100 rounded-xl w-fit text-slate-600">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-slate-400">{item.label}</p>
                  <p className="font-bold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-8 bg-slate-900 text-white rounded-3xl">
              <h3 className="new-display text-2xl mb-6">Standard Features</h3>
              <ul className="space-y-4">
                {subjectProperty.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm opacity-80">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <img
              src={subjectProperty.images[1]}
              alt="Interior detail"
              className="w-full h-64 object-cover rounded-3xl shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* New Comps */}
      <section className="py-32 bg-slate-50 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-24">
            <div>
              <span className="new-sans text-xs font-bold uppercase tracking-[0.5em] text-blue-600 mb-4 block">Market Context</span>
              <h2 className="new-display text-6xl font-bold">New Build Comparables</h2>
            </div>
            <div className="new-sans text-xs font-bold uppercase tracking-widest opacity-40">
              Recent Construction Sales
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comparables.map((comp, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 group">
                <div className="aspect-video overflow-hidden rounded-2xl mb-6">
                  <img
                    src={comp.image}
                    alt={comp.address}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="new-display text-xl font-bold mb-2">{comp.address}</h3>
                <p className="new-sans text-blue-600 font-bold mb-4">{formatCurrency(comp.price)}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 uppercase tracking-widest">
                  <span>{comp.sqft} sqft</span>
                  <span>{comp.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation */}
      <footer className="py-48 px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="inline-block p-6 bg-blue-50 rounded-full text-blue-600">
            <Construction className="w-12 h-12" />
          </div>
          <h2 className="new-display text-7xl font-bold leading-tight tracking-tighter">Strategic Market <br />Valuation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="space-y-2">
              <p className="new-sans text-xs uppercase tracking-widest text-slate-400">Entry Level</p>
              <p className="new-display text-2xl font-bold">{formatCurrency(data.suggestedPriceRange.min)}</p>
            </div>
            <div className="p-16 bg-blue-600 text-white rounded-[3rem] shadow-2xl relative">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-slate-900 text-white new-sans text-[10px] font-bold uppercase tracking-widest rounded-full">
                 Recommended
               </div>
               <p className="new-sans text-xs uppercase tracking-widest text-blue-200 mb-4">Market Value</p>
               <p className="new-display text-6xl font-bold">{formatCurrency(data.suggestedPriceRange.recommended)}</p>
            </div>
            <div className="space-y-2">
              <p className="new-sans text-xs uppercase tracking-widest text-slate-400">Aspirational</p>
              <p className="new-display text-2xl font-bold">{formatCurrency(data.suggestedPriceRange.max)}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
