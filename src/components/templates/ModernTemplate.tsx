import React from 'react';
import { motion } from 'motion/react';
import { CMAData } from '../../types';
import { formatCurrency } from '../../lib/utils';
import { MapPin, Bed, Bath, Square, Calendar, TrendingUp, DollarSign } from 'lucide-react';

interface ModernTemplateProps {
  data: CMAData;
}

export default function ModernTemplate({ data }: ModernTemplateProps) {
  const { subjectProperty, comparables, marketTrends, suggestedPriceRange } = data;

  return (
    <div className="bg-white min-h-screen font-sans text-slate-900">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src={subjectProperty.images[0]}
          alt={subjectProperty.address}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white p-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          >
            Comparative Market Analysis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl font-light opacity-90"
          >
            {subjectProperty.address}, {subjectProperty.city}, {subjectProperty.state}
          </motion.p>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-8">Property Overview</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {subjectProperty.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-100 rounded-xl">
                  <Bed className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Bedrooms</p>
                  <p className="font-bold">{subjectProperty.beds}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-100 rounded-xl">
                  <Bath className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Bathrooms</p>
                  <p className="font-bold">{subjectProperty.baths}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-100 rounded-xl">
                  <Square className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Square Feet</p>
                  <p className="font-bold">{subjectProperty.sqft.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-slate-100 rounded-xl">
                  <Calendar className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Year Built</p>
                  <p className="font-bold">{subjectProperty.yearBuilt}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {subjectProperty.images.slice(1).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Property view ${idx + 2}`}
                className="rounded-2xl w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparables */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Comparable Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comparables.map((comp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
              >
                <div className="relative h-48">
                  <img
                    src={comp.image}
                    alt={comp.address}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className={cn(
                    "absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider",
                    comp.status === 'Sold' ? 'bg-green-500 text-white' :
                    comp.status === 'Pending' ? 'bg-amber-500 text-white' : 'bg-blue-500 text-white'
                  )}>
                    {comp.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold mb-1 truncate">{comp.address}</h3>
                  <p className="text-xl font-bold text-slate-900 mb-4">{formatCurrency(comp.price)}</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="flex items-center gap-1"><Bed className="w-4 h-4" /> {comp.beds}</span>
                    <span className="flex items-center gap-1"><Bath className="w-4 h-4" /> {comp.baths}</span>
                    <span className="flex items-center gap-1"><Square className="w-4 h-4" /> {comp.sqft}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Price */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-600 font-medium mb-8">
          <TrendingUp className="w-4 h-4" />
          Market Valuation
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Suggested Listing Strategy</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12">
          <div className="text-center">
            <p className="text-slate-500 mb-2">Price Range</p>
            <p className="text-3xl font-light text-slate-400">
              {formatCurrency(suggestedPriceRange.min)} — {formatCurrency(suggestedPriceRange.max)}
            </p>
          </div>
          <div className="w-px h-24 bg-slate-200 hidden md:block" />
          <div className="text-center">
            <p className="text-slate-500 mb-2">Recommended Price</p>
            <p className="text-6xl font-bold text-slate-900">
              {formatCurrency(suggestedPriceRange.recommended)}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 px-6 text-center text-slate-500 text-sm">
        <p>© 2024 Real Estate Professional Services. All data sourced from MLS.</p>
      </footer>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
