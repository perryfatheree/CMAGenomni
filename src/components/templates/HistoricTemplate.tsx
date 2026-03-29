import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { 
  History, Landmark, ShieldCheck, Map, 
  Camera, Info, Award
} from 'lucide-react';

interface HistoricTemplateProps {
  data: CMAData;
}

export default function HistoricTemplate({ data }: HistoricTemplateProps) {
  const { subjectProperty, comparables, suggestedPriceRange } = data;

  return (
    <div className="bg-[#fdfbf7] min-h-screen font-serif text-stone-900 selection:bg-amber-900/10">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,700;1,400&display=swap');
        .historic-serif { font-family: 'Crimson Pro', serif; }
        .historic-display { font-family: 'Playfair Display', serif; }
      `}} />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center p-12">
        <div className="absolute inset-0 grayscale-[0.3] sepia-[0.2]">
          <img
            src={subjectProperty.images[0]}
            alt={subjectProperty.address}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/30" />
        </div>
        
        <div className="relative z-10 text-center text-white border-4 border-white/40 p-12 max-w-5xl backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6"
          >
            <History className="w-12 h-12 mx-auto mb-4 opacity-80" />
            <span className="historic-serif text-sm uppercase tracking-[0.4em] opacity-80">Heritage & Legacy Report</span>
          </motion.div>
          <h1 className="historic-display text-6xl md:text-8xl font-bold mb-4">
            {subjectProperty.address}
          </h1>
          <p className="historic-serif text-2xl italic opacity-90">
            Established {subjectProperty.yearBuilt} • A Piece of OKC History
          </p>
        </div>
      </section>

      {/* Preservation & Detail */}
      <section className="py-32 px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 text-amber-800 bg-amber-50 px-4 py-2 rounded-full border border-amber-100">
              <Landmark className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Architectural Integrity</span>
            </div>
            <h2 className="historic-display text-5xl italic leading-tight">Preserving the <br />Character of the Past</h2>
            <p className="historic-serif text-xl text-stone-600 leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
              {subjectProperty.description}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-stone-200">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400">Status</p>
                  <p className="font-bold">Historic District</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400">Condition</p>
                  <p className="font-bold">Restored Original</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl">
              <img
                src={subjectProperty.images[1]}
                alt="Interior detail"
                className="w-full h-full object-cover grayscale-[0.2]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 w-72 aspect-square overflow-hidden rounded-sm border-[12px] border-[#fdfbf7] shadow-xl">
              <img
                src={subjectProperty.images[2]}
                alt="Exterior detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historic Comparables */}
      <section className="py-32 bg-stone-100 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="historic-display text-5xl italic mb-4">Neighborhood Context</h2>
            <p className="historic-serif text-stone-500 text-lg">Comparing similar architectural gems in the district.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {comparables.map((comp, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden mb-6 rounded-sm shadow-md transition-all group-hover:shadow-xl">
                  <img
                    src={comp.image}
                    alt={comp.address}
                    className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                </div>
                <h3 className="historic-display text-2xl mb-1">{comp.address}</h3>
                <p className="historic-serif text-amber-900 font-bold mb-2">{formatCurrency(comp.price)}</p>
                <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-stone-400">
                  <span>{comp.sqft} sqft</span>
                  <div className="w-1 h-1 bg-stone-300 rounded-full" />
                  <span>{comp.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation */}
      <footer className="py-48 px-12 text-center border-t border-stone-200">
        <div className="max-w-3xl mx-auto space-y-12">
          <span className="historic-serif text-sm uppercase tracking-[0.4em] text-stone-400">Strategic Market Valuation</span>
          <h2 className="historic-display text-7xl italic leading-tight">Timeless Value <br />in a Modern Market</h2>
          <div className="p-16 border-2 border-stone-200 inline-block w-full">
            <p className="historic-serif text-stone-400 mb-4 uppercase tracking-widest">Recommended Listing Price</p>
            <p className="historic-display text-7xl font-bold text-stone-900">{formatCurrency(data.suggestedPriceRange.recommended)}</p>
          </div>
          <p className="historic-serif text-stone-500 italic text-lg">
            "History is not just what happened, it's what survives."
          </p>
        </div>
      </footer>
    </div>
  );
}
