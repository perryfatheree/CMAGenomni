import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TemplateType, Audience } from '../types';
import { 
  Layout, Star, BarChart, Heart, 
  History, TreePine, Zap, Construction, 
  Map, Users, Home, Search, Filter,
  GraduationCap, Sparkles
} from 'lucide-react';

interface TemplateOption {
  id: TemplateType;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  target: string;
  audience: Audience[];
}

const TEMPLATES: TemplateOption[] = [
  {
    id: 'modern',
    name: 'The Modernist',
    description: 'Clean, minimalist, and mobile-first. Perfect for urban listings and tech-savvy buyers.',
    icon: Layout,
    color: 'bg-blue-500',
    target: 'Suburban & Modern',
    audience: ['buyer', 'seller'],
  },
  {
    id: 'luxury',
    name: 'The Luxury Edition',
    description: 'Editorial-style layout with high-end typography. Designed for the luxury market.',
    icon: Star,
    color: 'bg-amber-500',
    target: 'Luxury Estates',
    audience: ['buyer', 'seller'],
  },
  {
    id: 'analyst',
    name: 'The Market Analyst',
    description: 'Data-heavy with interactive charts and deep market insights. For investors and analytical sellers.',
    icon: BarChart,
    color: 'bg-indigo-500',
    target: 'Investors & Analysts',
    audience: ['seller'],
  },
  {
    id: 'storyteller',
    name: 'The Storyteller',
    description: 'Emotional, lifestyle-focused narrative. Connects with the heart of the community.',
    icon: Heart,
    color: 'bg-rose-500',
    target: 'Family & Lifestyle',
    audience: ['buyer', 'seller'],
  },
  {
    id: 'historic',
    name: 'The Heritage',
    description: 'Sepia-toned, architectural focus. Perfect for OKC historic districts like Heritage Hills or Mesta Park.',
    icon: History,
    color: 'bg-stone-600',
    target: 'Historic Districts',
    audience: ['buyer', 'seller'],
  },
  {
    id: 'farm-ranch',
    name: 'Farm & Ranch',
    description: 'Earthy, expansive layout focusing on acreage, water rights, and rural utility.',
    icon: TreePine,
    color: 'bg-emerald-600',
    target: 'Rural & Acreage',
    audience: ['buyer', 'seller'],
  },
  {
    id: 'urban-chic',
    name: 'Urban Chic',
    description: 'High-contrast, high-energy. Designed for downtown OKC, Bricktown, and Midtown lofts.',
    icon: Zap,
    color: 'bg-cyan-500',
    target: 'Downtown & Midtown',
    audience: ['buyer', 'seller'],
  },
  {
    id: 'new-construction',
    name: 'The Builder',
    description: 'Clean, architectural focus. Highlights builder warranties, floor plans, and modern finishes.',
    icon: Construction,
    color: 'bg-blue-600',
    target: 'New Construction',
    audience: ['buyer', 'seller'],
  },
  {
    id: 'land',
    name: 'Land Development',
    description: 'Technical analysis of unimproved land and future build potential.',
    icon: Map,
    color: 'bg-emerald-600',
    target: 'Unimproved Land',
    audience: ['seller'],
  },
  {
    id: 'first-time-buyer',
    name: 'First-Time Buyer',
    description: 'Educational and encouraging guide for first-time homebuyers. Focuses on the journey and financial basics.',
    icon: GraduationCap,
    color: 'bg-indigo-500',
    target: 'First-Time Buyers',
    audience: ['buyer'],
  },
  {
    id: 'downsizer',
    name: 'Downsizer Lifestyle',
    description: 'Focuses on lifestyle transition, equity freedom, and ease of living for empty nesters.',
    icon: Sparkles,
    color: 'bg-amber-500',
    target: 'Downsizers',
    audience: ['buyer', 'seller'],
  },
];

interface TemplateSelectorProps {
  onSelect: (id: TemplateType) => void;
  selectedId: TemplateType;
}

export default function TemplateSelector({ onSelect, selectedId }: TemplateSelectorProps) {
  const [activeAudience, setActiveAudience] = useState<Audience | 'all'>('all');

  const filteredTemplates = TEMPLATES.filter(t => 
    activeAudience === 'all' || t.audience.includes(activeAudience)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Select a CMA Template</h2>
          <p className="text-slate-500 text-lg max-w-xl">
            Tailor your presentation to the specific needs of your OKC clients, from historic preservation to rural acreage.
          </p>
        </div>
        
        <div className="flex bg-slate-100 p-1 rounded-2xl border border-slate-200">
          {[
            { id: 'all', label: 'All Templates', icon: Filter },
            { id: 'seller', label: 'Sellers', icon: Home },
            { id: 'buyer', label: 'Buyers', icon: Users },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveAudience(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeAudience === tab.id 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredTemplates.map((template) => (
            <motion.button
              key={template.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onSelect(template.id)}
              className={`text-left p-8 rounded-[2.5rem] border-2 transition-all duration-300 group relative overflow-hidden flex flex-col h-full ${
                selectedId === template.id 
                  ? 'border-slate-900 bg-slate-900 text-white shadow-2xl' 
                  : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
                selectedId === template.id ? 'bg-white/10' : template.color + ' bg-opacity-10'
              }`}>
                <template.icon className={`w-7 h-7 ${
                  selectedId === template.id ? 'text-white' : template.color.replace('bg-', 'text-')
                }`} />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">{template.name}</h3>
                <p className={`text-sm mb-8 leading-relaxed ${
                  selectedId === template.id ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {template.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <div className={`inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${
                  selectedId === template.id ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-500'
                }`}>
                  {template.target}
                </div>
                {template.audience.map(a => (
                  <div key={a} className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full ${
                    selectedId === template.id ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-50 text-blue-600'
                  }`}>
                    {a}
                  </div>
                ))}
              </div>
              
              {selectedId === template.id && (
                <div className="absolute top-8 right-8">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                </div>
              )}
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

