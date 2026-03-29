import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { 
  Coffee, Heart, MapPin, Home, 
  Sparkles, CheckCircle2, Info, ArrowRight,
  ShieldCheck, Activity, Users, Star
} from 'lucide-react';

interface DownsizerTemplateProps {
  data: CMAData;
}

export default function DownsizerTemplate({ data }: DownsizerTemplateProps) {
  const { subjectProperty, comparables, suggestedPriceRange } = data;

  return (
    <div className="bg-[#fcfaf5] min-h-screen font-sans text-stone-800 selection:bg-amber-900/10">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;600&display=swap');
        .ds-serif { font-family: 'Libre Baskerville', serif; }
        .ds-sans { font-family: 'Outfit', sans-serif; }
      `}} />

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center p-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={subjectProperty.images[0]}
            alt={subjectProperty.address}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/30 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30"
          >
            <Sparkles className="w-4 h-4" />
            The Lifestyle Transition
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="ds-serif text-6xl md:text-8xl font-bold leading-tight tracking-tight"
          >
            A Refined <br />
            <span className="italic font-normal text-stone-200">New Chapter.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="ds-sans text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto"
          >
            Simplifying your space, amplifying your life at {subjectProperty.address}.
          </motion.p>
        </div>
      </section>

      {/* Lifestyle Benefits */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div>
              <span className="ds-sans text-sm font-bold uppercase tracking-widest text-amber-700 mb-4 block">The Transition</span>
              <h2 className="ds-serif text-5xl font-bold leading-tight mb-8 italic">Less Maintenance, <br />More Living.</h2>
              <p className="ds-sans text-lg text-stone-600 leading-relaxed">
                Transitioning to a smaller footprint doesn't mean compromising on quality. It's about curating your environment to focus on what truly matters.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, label: 'Low Maintenance', value: 'Lock & Leave' },
                { icon: Activity, label: 'Active Lifestyle', value: 'Walkable' },
                { icon: Users, label: 'Community', value: 'Vibrant' },
                { icon: Star, label: 'Quality', value: 'High-End' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 rounded-2xl text-amber-700">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold ds-sans">{item.label}</p>
                    <p className="text-stone-500 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl rotate-2">
              <img
                src={subjectProperty.images[1]}
                alt="Interior Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 p-10 bg-white rounded-[3rem] shadow-2xl border border-stone-100 max-w-xs">
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                   <Heart className="w-6 h-6" />
                 </div>
                 <p className="font-bold ds-sans">Equity Freedom</p>
               </div>
               <p className="text-sm text-stone-500 leading-relaxed">
                 Downsizing often unlocks significant equity, providing financial freedom for travel, hobbies, and family.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context for Sellers/Buyers */}
      <section className="py-24 bg-stone-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="ds-serif text-5xl mb-6 italic">The Neighborhood Pulse</h2>
            <p className="ds-sans text-stone-500">See how this home compares to other recent sales in the area.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparables.slice(0, 3).map((comp, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-8 relative">
                  <img
                    src={comp.image}
                    alt={comp.address}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-stone-900">
                    {comp.status}
                  </div>
                </div>
                <h3 className="ds-serif text-2xl mb-2">{comp.address}</h3>
                <p className="ds-sans text-amber-700 font-bold mb-4">{formatCurrency(comp.price)}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-stone-400">
                  <span className="flex items-center gap-1"><Home className="w-4 h-4" /> {comp.sqft} sqft</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {comp.distance} mi</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Valuation */}
      <section className="py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="inline-block p-6 bg-amber-50 rounded-full text-amber-700 mb-8">
            <Sparkles className="w-10 h-10" />
          </div>
          <h2 className="ds-serif text-6xl md:text-7xl leading-tight italic">The Value of <br />Your Next Chapter</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mt-24">
            <div className="space-y-2">
              <p className="ds-sans text-xs uppercase tracking-widest text-stone-400">Conservative Entry</p>
              <p className="ds-serif text-2xl">{formatCurrency(suggestedPriceRange.min)}</p>
            </div>
            <div className="p-16 bg-stone-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[100px] -mr-32 -mt-32" />
               <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-amber-500 text-stone-900 ds-sans text-[10px] font-bold uppercase tracking-widest rounded-full">
                 Recommended
               </div>
               <p className="ds-sans text-xs uppercase tracking-widest text-stone-500 mb-4">Market Value</p>
               <p className="ds-serif text-6xl font-bold">{formatCurrency(suggestedPriceRange.recommended)}</p>
            </div>
            <div className="space-y-2">
              <p className="ds-sans text-xs uppercase tracking-widest text-stone-400">Aspirational</p>
              <p className="ds-serif text-2xl">{formatCurrency(suggestedPriceRange.max)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-stone-200 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="ds-serif text-3xl italic text-stone-400">Lifestyle Studio</div>
          <p className="ds-sans text-sm text-stone-400">
            Curating the next chapter of your life with data and heart.
          </p>
        </div>
      </footer>
    </div>
  );
}
