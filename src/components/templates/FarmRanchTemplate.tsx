import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { 
  TreePine, Tractor, Droplets, Map, 
  Sun, Wind, Compass, Fence
} from 'lucide-react';

interface FarmRanchTemplateProps {
  data: CMAData;
}

export default function FarmRanchTemplate({ data }: FarmRanchTemplateProps) {
  const { subjectProperty, comparables, suggestedPriceRange } = data;

  return (
    <div className="bg-[#fcfaf5] min-h-screen font-sans text-stone-800 selection:bg-emerald-900/10">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600&family=Baskervville:ital,wght@0,400;1,400&display=swap');
        .farm-serif { font-family: 'Baskervville', serif; }
        .farm-sans { font-family: 'Outfit', sans-serif; }
      `}} />

      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center p-12 overflow-hidden">
        <img
          src={subjectProperty.images[0]}
          alt={subjectProperty.address}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/60" />
        
        <div className="relative z-10 text-center text-white max-w-5xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2 bg-stone-900/30 backdrop-blur-md rounded-full border border-white/20 text-sm font-bold uppercase tracking-widest"
          >
            <TreePine className="w-4 h-4" />
            Farm & Ranch Portfolio
          </motion.div>
          <h1 className="farm-serif text-6xl md:text-9xl font-bold leading-tight">
            The {subjectProperty.address.split(' ')[1]} <br />
            <span className="italic font-normal text-stone-200">Acreage</span>
          </h1>
          <p className="farm-sans text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
            {subjectProperty.city}, Oklahoma • 40+ Acres of Potential
          </p>
        </div>
      </section>

      {/* Land Features */}
      <section className="py-32 px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <span className="farm-sans text-sm font-bold uppercase tracking-widest text-emerald-700 mb-4 block">Land & Legacy</span>
              <h2 className="farm-serif text-5xl italic leading-tight mb-8">Where the Horizon <br />Meets Opportunity</h2>
              <p className="farm-sans text-lg text-stone-600 leading-relaxed">
                {subjectProperty.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: Tractor, label: 'Acreage', value: '42.5 Acres' },
                { icon: Droplets, label: 'Water Rights', value: 'Well & Pond' },
                { icon: Fence, label: 'Fencing', value: 'Perimeter Fenced' },
                { icon: Sun, label: 'Zoning', value: 'Agricultural' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-stone-50 rounded-3xl border border-stone-100">
                  <div className="p-3 bg-emerald-100 rounded-2xl text-emerald-700">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold farm-sans">{item.label}</p>
                    <p className="text-stone-500 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <img
                src={subjectProperty.images[1]}
                alt="Land view 1"
                className="w-full h-80 object-cover rounded-[3rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
              <div className="p-8 bg-emerald-900 text-white rounded-[3rem] shadow-xl">
                <Compass className="w-10 h-10 mb-6 opacity-40" />
                <h3 className="farm-serif text-2xl mb-4 italic">Strategic Position</h3>
                <p className="farm-sans text-sm opacity-70 leading-relaxed">
                  Located in the high-growth corridor of OKC, this parcel offers both immediate utility and long-term appreciation.
                </p>
              </div>
            </div>
            <div className="pt-12 space-y-6">
              <div className="p-8 bg-stone-100 rounded-[3rem] border border-stone-200">
                <Wind className="w-10 h-10 mb-6 text-emerald-700 opacity-40" />
                <h3 className="farm-serif text-2xl mb-4 italic">Natural Assets</h3>
                <p className="farm-sans text-sm text-stone-500 leading-relaxed">
                  Rich soil composition and established drainage patterns make this ideal for diverse agricultural pursuits.
                </p>
              </div>
              <img
                src={subjectProperty.images[2]}
                alt="Land view 2"
                className="w-full h-80 object-cover rounded-[3rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rural Comparables */}
      <section className="py-32 bg-stone-900 text-white px-12 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <span className="farm-sans text-sm font-bold uppercase tracking-widest text-emerald-400 mb-4 block">Market Context</span>
              <h2 className="farm-serif text-6xl italic leading-tight">Comparable Parcels</h2>
              <p className="farm-sans text-stone-400 mt-6">A curated selection of similar acreage sales in the OKC rural market.</p>
            </div>
            <div className="flex gap-4">
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                 <Map className="w-5 h-5" />
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {comparables.slice(0, 3).map((comp, idx) => (
              <div key={idx} className="group">
                <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-8 relative">
                  <img
                    src={comp.image}
                    alt={comp.address}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest">
                    {comp.status}
                  </div>
                </div>
                <h3 className="farm-serif text-3xl mb-2">{comp.address}</h3>
                <p className="farm-sans text-emerald-400 text-xl font-bold mb-4">{formatCurrency(comp.price)}</p>
                <div className="flex items-center gap-6 text-xs uppercase tracking-widest text-stone-500">
                  <span>{comp.sqft} sqft</span>
                  <span>{comp.distance} mi</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuation */}
      <footer className="py-48 px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="inline-block p-6 bg-emerald-50 rounded-full text-emerald-700">
            <Compass className="w-12 h-12" />
          </div>
          <h2 className="farm-serif text-7xl italic leading-tight">Strategic Market <br />Positioning</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="space-y-2">
              <p className="farm-sans text-xs uppercase tracking-widest text-stone-400">Entry Level</p>
              <p className="farm-serif text-2xl">{formatCurrency(data.suggestedPriceRange.min)}</p>
            </div>
            <div className="p-16 bg-stone-900 text-white rounded-[4rem] shadow-2xl relative">
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-emerald-500 text-stone-900 farm-sans text-[10px] font-bold uppercase tracking-widest rounded-full">
                 Recommended
               </div>
               <p className="farm-sans text-xs uppercase tracking-widest text-stone-500 mb-4">Market Value</p>
               <p className="farm-serif text-6xl font-bold">{formatCurrency(data.suggestedPriceRange.recommended)}</p>
            </div>
            <div className="space-y-2">
              <p className="farm-sans text-xs uppercase tracking-widest text-stone-400">Aspirational</p>
              <p className="farm-serif text-2xl">{formatCurrency(data.suggestedPriceRange.max)}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
