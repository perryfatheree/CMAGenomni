import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { 
  Zap, Coffee, Music, ShoppingBag, 
  TrainFront, MapPin, Star, Sparkles
} from 'lucide-react';

interface UrbanChicTemplateProps {
  data: CMAData;
}

export default function UrbanChicTemplate({ data }: UrbanChicTemplateProps) {
  const { subjectProperty, comparables, suggestedPriceRange } = data;

  return (
    <div className="bg-[#050505] min-h-screen font-sans text-white selection:bg-cyan-500/30">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;700;900&display=swap');
        .urban-display { font-family: 'Anton', sans-serif; }
        .urban-sans { font-family: 'Inter', sans-serif; }
      `}} />

      {/* Hero */}
      <section className="relative h-screen flex flex-col justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 grayscale-[0.5] contrast-[1.2]">
          <img
            src={subjectProperty.images[0]}
            alt={subjectProperty.address}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-6xl w-full mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500 text-black rounded-full text-xs font-black uppercase tracking-widest"
          >
            <Zap className="w-4 h-4 fill-black" />
            Downtown Urban Chic
          </motion.div>
          <h1 className="urban-display text-[12vw] leading-[0.85] uppercase tracking-tighter">
            {subjectProperty.address.split(' ')[1]} <br />
            <span className="text-cyan-400">District</span>
          </h1>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-12 pt-12 border-t border-white/20">
            <div className="urban-sans text-sm font-black uppercase tracking-[0.3em] opacity-60">
              {subjectProperty.address}, OKC
            </div>
            <div className="flex gap-12 urban-sans text-xs font-black uppercase tracking-widest">
              <div className="flex flex-col gap-1">
                <span className="opacity-40">Beds</span>
                <span className="text-xl">{subjectProperty.beds}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="opacity-40">Baths</span>
                <span className="text-xl">{subjectProperty.baths}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="opacity-40">Sq Ft</span>
                <span className="text-xl">{subjectProperty.sqft.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Grid */}
      <section className="py-32 px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-12">
            <h2 className="urban-display text-7xl uppercase leading-none">The Pulse <br />of the City</h2>
            <p className="urban-sans text-lg font-light leading-relaxed text-white/70">
              {subjectProperty.description}
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Coffee, label: 'Cafes', value: '12+' },
                { icon: Music, label: 'Nightlife', value: 'High' },
                { icon: ShoppingBag, label: 'Retail', value: 'Boutique' },
                { icon: TrainFront, label: 'Transit', value: 'Streetcar' },
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
                  <item.icon className="w-6 h-6 mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40">{item.label}</p>
                  <p className="text-xl font-black uppercase">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img
                src={subjectProperty.images[1]}
                alt="Urban view 1"
                className="w-full h-[500px] object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="p-12 bg-cyan-500 text-black rounded-3xl">
                <Sparkles className="w-12 h-12 mb-8" />
                <h3 className="urban-display text-4xl uppercase mb-4">Modern Edge</h3>
                <p className="urban-sans text-sm font-bold leading-relaxed opacity-80">
                  Industrial aesthetics meet contemporary luxury in the heart of Oklahoma City's most vibrant district.
                </p>
              </div>
            </div>
            <div className="pt-24 space-y-6">
              <div className="p-12 bg-white/5 border border-white/10 rounded-3xl">
                <Star className="w-12 h-12 mb-8 text-cyan-400" />
                <h3 className="urban-display text-4xl uppercase mb-4">Elite Living</h3>
                <p className="urban-sans text-sm font-bold leading-relaxed opacity-60">
                  Unparalleled access to the city's finest dining, entertainment, and cultural landmarks.
                </p>
              </div>
              <img
                src={subjectProperty.images[2]}
                alt="Urban view 2"
                className="w-full h-[500px] object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Urban Comps */}
      <section className="py-32 bg-white text-black px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div>
              <span className="urban-sans text-xs font-black uppercase tracking-[0.5em] text-cyan-500 mb-4 block">Market Context</span>
              <h2 className="urban-display text-8xl uppercase leading-none">The Competition</h2>
            </div>
            <div className="urban-sans text-xs font-black uppercase tracking-widest opacity-40">
              Curated Urban Selection
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {comparables.map((comp, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl mb-8">
                  <img
                    src={comp.image}
                    alt={comp.address}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-8 right-8 px-6 py-2 bg-black text-white urban-sans text-[10px] font-black uppercase tracking-widest rounded-full">
                    {comp.status}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="urban-display text-4xl uppercase mb-2">{comp.address}</h3>
                    <p className="urban-sans text-xs font-black uppercase tracking-widest opacity-40">
                      {comp.sqft.toLocaleString()} SQ FT • {comp.beds} BEDS • {comp.baths} BATHS
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="urban-display text-4xl text-cyan-500">{formatCurrency(comp.price)}</p>
                    <p className="urban-sans text-[10px] font-black uppercase tracking-widest opacity-40 mt-1">
                      {comp.status === 'Sold' ? `Sold ${comp.date}` : 'Currently Listed'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation */}
      <footer className="py-48 px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-cyan-500 rounded-full blur-[200px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-16">
          <span className="urban-sans text-xs font-black uppercase tracking-[0.5em] text-cyan-400 mb-8 block">Strategic Valuation</span>
          <h2 className="urban-display text-[10vw] leading-none uppercase">Market <br />Domination</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="urban-sans text-xs font-black uppercase tracking-widest opacity-40">
              Entry Point <br />
              <span className="text-2xl text-white mt-2 block">{formatCurrency(suggestedPriceRange.min)}</span>
            </div>
            <div className="p-16 border-4 border-cyan-500 bg-black relative">
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-cyan-500 text-black urban-sans text-[10px] font-black uppercase tracking-widest px-8 py-2 rounded-full">
                Recommended
              </div>
              <span className="urban-sans text-xs font-black uppercase tracking-widest opacity-40 block mb-4">Market Value</span>
              <span className="urban-display text-8xl text-cyan-400">{formatCurrency(suggestedPriceRange.recommended)}</span>
            </div>
            <div className="urban-sans text-xs font-black uppercase tracking-widest opacity-40">
              Aspirational <br />
              <span className="text-2xl text-white mt-2 block">{formatCurrency(suggestedPriceRange.max)}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
