import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { MapPin, Bed, Bath, Square, Calendar, TrendingUp, DollarSign, ChevronRight } from 'lucide-react';

interface LuxuryTemplateProps {
  data: CMAData;
}

export default function LuxuryTemplate({ data }: LuxuryTemplateProps) {
  const { subjectProperty, comparables, marketTrends, suggestedPriceRange } = data;

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-serif text-white selection:bg-amber-500/30">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@300;400;600&display=swap');
        .luxury-font-serif { font-family: 'Playfair Display', serif; }
        .luxury-font-sans { font-family: 'Montserrat', sans-serif; }
      `}} />

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end p-12 overflow-hidden">
        <img
          src={subjectProperty.images[0]}
          alt={subjectProperty.address}
          className="absolute inset-0 w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        <div className="relative z-10 max-w-6xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <span className="luxury-font-sans text-xs uppercase tracking-[0.5em] text-amber-400 mb-4 block">
              Exclusive Market Analysis
            </span>
            <h1 className="luxury-font-serif text-7xl md:text-9xl font-bold leading-tight mb-4">
              {subjectProperty.address.split(' ')[0]} <br />
              <span className="italic font-normal text-amber-200/80">Residence</span>
            </h1>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-white/20 pt-8">
            <div className="luxury-font-sans text-sm tracking-widest uppercase opacity-60">
              {subjectProperty.address}, {subjectProperty.city}
            </div>
            <div className="flex gap-12 luxury-font-sans text-xs tracking-widest uppercase">
              <div className="flex flex-col gap-1">
                <span className="opacity-40">Beds</span>
                <span>{subjectProperty.beds}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="opacity-40">Baths</span>
                <span>{subjectProperty.baths}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="opacity-40">Sq Ft</span>
                <span>{subjectProperty.sqft.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          <div className="lg:col-span-5">
            <h2 className="luxury-font-serif text-5xl mb-12 leading-tight">
              A Legacy <br />
              <span className="italic">of Distinction</span>
            </h2>
            <p className="luxury-font-sans text-lg font-light leading-relaxed text-white/70 mb-12">
              {subjectProperty.description}
            </p>
            <div className="space-y-4">
              {subjectProperty.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 group cursor-default">
                  <div className="w-8 h-px bg-amber-500/50 group-hover:w-12 transition-all duration-500" />
                  <span className="luxury-font-sans text-xs uppercase tracking-widest opacity-80 group-hover:opacity-100 transition-opacity">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={subjectProperty.images[1]}
                alt="Interior detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 aspect-square overflow-hidden rounded-sm border-8 border-[#0a0a0a]">
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

      {/* Market Comparison */}
      <section className="py-32 bg-[#111] px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-24">
            <div>
              <span className="luxury-font-sans text-xs uppercase tracking-[0.5em] text-amber-400 mb-4 block text-center lg:text-left">
                Market Context
              </span>
              <h2 className="luxury-font-serif text-6xl italic">Comparable Estates</h2>
            </div>
            <div className="hidden lg:block luxury-font-sans text-xs uppercase tracking-widest opacity-40">
              Curated Selection
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {comparables.map((comp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-8">
                  <img
                    src={comp.image}
                    alt={comp.address}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-6 right-6 luxury-font-sans text-[10px] uppercase tracking-widest bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20">
                    {comp.status}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="luxury-font-serif text-2xl mb-2">{comp.address}</h3>
                    <p className="luxury-font-sans text-xs uppercase tracking-widest opacity-40">
                      {comp.sqft.toLocaleString()} SQ FT • {comp.beds} BEDS • {comp.baths} BATHS
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="luxury-font-serif text-2xl text-amber-200">{formatCurrency(comp.price)}</p>
                    <p className="luxury-font-sans text-[10px] uppercase tracking-widest opacity-40 mt-1">
                      {comp.status === 'Sold' ? `Sold ${comp.date}` : 'Currently Listed'}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation */}
      <section className="py-48 px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500 rounded-full blur-[160px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="luxury-font-sans text-xs uppercase tracking-[0.5em] text-amber-400 mb-8 block">
            Strategic Valuation
          </span>
          <h2 className="luxury-font-serif text-7xl md:text-8xl mb-16 leading-tight">
            The Art of <br />
            <span className="italic">Positioning</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="luxury-font-sans text-xs uppercase tracking-widest opacity-40">
              Conservative Entry <br />
              <span className="text-xl text-white mt-2 block">{formatCurrency(suggestedPriceRange.min)}</span>
            </div>
            <div className="p-12 border border-white/10 bg-white/5 backdrop-blur-sm relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black luxury-font-sans text-[10px] font-bold uppercase tracking-widest px-4 py-1">
                Recommended
              </div>
              <span className="luxury-font-sans text-xs uppercase tracking-widest opacity-40 block mb-4">Market Value</span>
              <span className="luxury-font-serif text-5xl text-amber-200">{formatCurrency(suggestedPriceRange.recommended)}</span>
            </div>
            <div className="luxury-font-sans text-xs uppercase tracking-widest opacity-40">
              Aspirational Value <br />
              <span className="text-xl text-white mt-2 block">{formatCurrency(suggestedPriceRange.max)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-white/10 px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="luxury-font-serif text-3xl italic opacity-80">
            Prestige Realty Group
          </div>
          <div className="luxury-font-sans text-[10px] uppercase tracking-[0.3em] opacity-30 text-center md:text-right">
            Confidential Market Analysis • Prepared Exclusively for the Owner of {subjectProperty.address}
          </div>
        </div>
      </footer>
    </div>
  );
}
