import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { 
  GraduationCap, HelpCircle, CheckCircle2, 
  MapPin, Home, DollarSign, Calculator,
  ArrowRight, Info, Sparkles
} from 'lucide-react';

interface FirstTimeBuyerTemplateProps {
  data: CMAData;
}

export default function FirstTimeBuyerTemplate({ data }: FirstTimeBuyerTemplateProps) {
  const { subjectProperty, comparables, suggestedPriceRange } = data;

  return (
    <div className="bg-[#fdfcfb] min-h-screen font-sans text-slate-900 selection:bg-indigo-500/10">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&family=Inter:wght@300;400;600&display=swap');
        .ftb-display { font-family: 'Outfit', sans-serif; }
        .ftb-sans { font-family: 'Inter', sans-serif; }
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
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/60 to-purple-900/40 backdrop-blur-[1px]" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30"
          >
            <GraduationCap className="w-4 h-4" />
            First-Time Homebuyer Guide
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="ftb-display text-6xl md:text-8xl font-bold leading-tight tracking-tight"
          >
            Your First <br />
            <span className="text-indigo-300 italic">Big Step.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="ftb-sans text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto"
          >
            Navigating the path to homeownership at {subjectProperty.address}.
          </motion.p>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div>
              <span className="ftb-display text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4 block">The Journey</span>
              <h2 className="ftb-display text-5xl font-bold leading-tight mb-8">Homeownership <br />Made Simple.</h2>
              <p className="ftb-sans text-lg text-slate-600 leading-relaxed">
                Buying your first home is a milestone. We've analyzed the market at {subjectProperty.address} to ensure you're making a confident, informed decision.
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                { title: 'Market Value Analysis', desc: 'Understanding what similar homes in OKC are actually selling for.' },
                { title: 'Monthly Cost Breakdown', desc: 'Estimating your mortgage, taxes, and insurance for this property.' },
                { title: 'Future Appreciation', desc: 'Looking at how this neighborhood has grown over the last 5 years.' },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-bold">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="ftb-display text-lg font-bold mb-1">{step.title}</h3>
                    <p className="ftb-sans text-sm text-slate-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-indigo-600 rounded-[4rem] overflow-hidden shadow-2xl rotate-3">
              <img
                src={subjectProperty.images[1]}
                alt="Living Space"
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 p-10 bg-white rounded-[3rem] shadow-2xl border border-slate-100 max-w-xs">
               <div className="flex items-center gap-4 mb-4">
                 <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                   <CheckCircle2 className="w-6 h-6" />
                 </div>
                 <p className="font-bold ftb-display">Move-In Ready</p>
               </div>
               <p className="text-sm text-slate-500 leading-relaxed">
                 This property has been pre-inspected and meets all standard first-time buyer financing requirements.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Context for Buyers */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="ftb-display text-4xl font-bold mb-4 italic">The Neighborhood Pulse</h2>
              <p className="ftb-sans text-slate-500">See how this home compares to other recent sales in the area.</p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-2 bg-white rounded-full border border-slate-200 text-xs font-bold uppercase tracking-widest text-slate-500">
                 Market Data: Active & Sold
               </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comparables.slice(0, 3).map((comp, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={comp.image}
                    alt={comp.address}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest text-slate-900">
                    {comp.status}
                  </div>
                </div>
                <h3 className="ftb-display text-xl font-bold mb-1">{comp.address}</h3>
                <p className="ftb-sans text-indigo-600 font-bold mb-4">{formatCurrency(comp.price)}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Home className="w-4 h-4" /> {comp.sqft} sqft</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {comp.distance} mi</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Guidance */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="inline-block p-6 bg-indigo-50 rounded-full text-indigo-600 mb-8">
            <Calculator className="w-10 h-10" />
          </div>
          <h2 className="ftb-display text-6xl font-bold leading-tight tracking-tight">Making the <span className="text-indigo-600 italic">Numbers Work.</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="p-10 bg-white border border-slate-200 rounded-[3rem] text-left space-y-6">
              <h3 className="ftb-display text-2xl font-bold">Estimated Monthly</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-slate-500">Principal & Interest</span>
                  <span className="font-bold">$4,850</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-slate-500">Property Taxes</span>
                  <span className="font-bold">$850</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-50">
                  <span className="text-slate-500">Home Insurance</span>
                  <span className="font-bold">$250</span>
                </div>
                <div className="flex justify-between items-center pt-4 text-xl">
                  <span className="font-bold">Total Estimate</span>
                  <span className="font-bold text-indigo-600">$5,950</span>
                </div>
              </div>
            </div>
            
            <div className="p-10 bg-indigo-900 text-white rounded-[3rem] text-left flex flex-col justify-between shadow-2xl">
              <div>
                <h3 className="ftb-display text-2xl font-bold mb-4">The Value Proposition</h3>
                <p className="ftb-sans text-indigo-200 leading-relaxed opacity-80">
                  Based on current market trends in OKC, this property is positioned at a competitive entry point with significant long-term appreciation potential.
                </p>
              </div>
              <div className="pt-12">
                <p className="text-xs uppercase tracking-widest text-indigo-400 mb-2">Recommended Offer Range</p>
                <p className="ftb-display text-4xl font-bold">
                  {formatCurrency(suggestedPriceRange.min)} — {formatCurrency(suggestedPriceRange.max)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-slate-100 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="ftb-display text-3xl font-bold text-slate-300">First Step Studio</div>
          <p className="ftb-sans text-sm text-slate-400">
            Empowering the next generation of OKC homeowners with data and heart.
          </p>
        </div>
      </footer>
    </div>
  );
}
