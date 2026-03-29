import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { 
  Heart, Home, Coffee, School, TreePine, Map, 
  Sparkles, MessageCircle, Star, Quote
} from 'lucide-react';

interface StorytellerTemplateProps {
  data: CMAData;
}

export default function StorytellerTemplate({ data }: StorytellerTemplateProps) {
  const { subjectProperty, comparables, marketTrends, suggestedPriceRange } = data;

  return (
    <div className="bg-[#fffcf7] min-h-screen font-sans text-stone-800">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;600&display=swap');
        .story-font-serif { font-family: 'Libre Baskerville', serif; }
        .story-font-sans { font-family: 'Outfit', sans-serif; }
      `}} />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center p-6">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={subjectProperty.images[0]}
            alt={subjectProperty.address}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-stone-900/40 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/30"
          >
            <Heart className="w-4 h-4 fill-white" />
            Your Future Home Story
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="story-font-serif text-6xl md:text-8xl font-bold leading-tight"
          >
            Welcome to <br />
            <span className="italic font-normal text-stone-200">{subjectProperty.address.split(' ')[1]} Street</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="story-font-sans text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto"
          >
            More than just a property, this is where your next chapter begins.
          </motion.p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div>
              <span className="story-font-sans text-sm font-bold uppercase tracking-widest text-amber-600 mb-4 block">The Narrative</span>
              <h2 className="story-font-serif text-5xl mb-8 leading-tight">A space designed for <span className="italic">living well.</span></h2>
              <p className="story-font-sans text-lg text-stone-600 leading-relaxed">
                {subjectProperty.description}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: TreePine, label: 'Nature Nearby', value: '3 Parks' },
                { icon: Coffee, label: 'Local Vibe', value: '12 Cafes' },
                { icon: School, label: 'Education', value: 'Top Rated' },
                { icon: Map, label: 'Walk Score', value: '92/100' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-2xl text-amber-700">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold story-font-sans">{item.label}</p>
                    <p className="text-stone-500 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl rotate-2">
              <img
                src={subjectProperty.images[1]}
                alt="Lifestyle"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 aspect-square w-64 rounded-[3rem] overflow-hidden shadow-2xl -rotate-6 border-8 border-white">
              <img
                src={subjectProperty.images[2]}
                alt="Lifestyle Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Love */}
      <section className="py-32 bg-stone-100 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          <div className="max-w-2xl mx-auto">
            <h2 className="story-font-serif text-5xl mb-6 italic">The Neighborhood Pulse</h2>
            <p className="story-font-sans text-stone-500">See how your home compares to the surrounding community stories.</p>
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
                  <div className="absolute inset-0 bg-stone-900/20" />
                </div>
                <h3 className="story-font-serif text-2xl mb-2">{comp.address}</h3>
                <p className="story-font-sans text-amber-600 font-bold mb-4">{formatCurrency(comp.price)}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-stone-400">
                  <span className="flex items-center gap-1"><Home className="w-4 h-4" /> {comp.sqft} sqft</span>
                  <span className="flex items-center gap-1"><Star className="w-4 h-4" /> {comp.beds}br</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Strategy */}
      <section className="py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="inline-block p-4 bg-amber-50 rounded-full text-amber-700 mb-8">
            <Sparkles className="w-8 h-8" />
          </div>
          <h2 className="story-font-serif text-6xl md:text-7xl leading-tight">Finding the <span className="italic text-amber-600">Perfect Match</span></h2>
          <p className="story-font-sans text-xl text-stone-500 max-w-2xl mx-auto">
            Our goal is to find the family that will love this home as much as you have. Here is our recommended starting point for your next chapter.
          </p>
          
          <div className="mt-24 p-16 bg-stone-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[100px] -mr-32 -mt-32" />
             <div className="relative z-10">
               <span className="story-font-sans text-sm uppercase tracking-[0.3em] text-amber-400 mb-8 block">Recommended Listing Price</span>
               <span className="story-font-serif text-7xl md:text-8xl font-bold">{formatCurrency(suggestedPriceRange.recommended)}</span>
               <div className="flex justify-center gap-12 mt-12 story-font-sans text-stone-400 text-sm">
                 <div className="flex flex-col gap-1">
                   <span>Market Entry</span>
                   <span className="text-white font-bold">{formatCurrency(suggestedPriceRange.min)}</span>
                 </div>
                 <div className="w-px h-12 bg-stone-800" />
                 <div className="flex flex-col gap-1">
                   <span>Aspirational</span>
                   <span className="text-white font-bold">{formatCurrency(suggestedPriceRange.max)}</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-stone-200 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="story-font-serif text-3xl italic text-stone-400">Home Story Studio</div>
          <p className="story-font-sans text-sm text-stone-400">
            Prepared with heart and data for the residents of {subjectProperty.address}.
          </p>
        </div>
      </footer>
    </div>
  );
}
