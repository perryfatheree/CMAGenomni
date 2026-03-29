/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TemplateType } from './types';
import { MOCK_CMA_DATA } from './constants';
import TemplateSelector from './components/TemplateSelector';
import ModernTemplate from './components/templates/ModernTemplate';
import LuxuryTemplate from './components/templates/LuxuryTemplate';
import AnalystTemplate from './components/templates/AnalystTemplate';
import StorytellerTemplate from './components/templates/StorytellerTemplate';
import HistoricTemplate from './components/templates/HistoricTemplate';
import FarmRanchTemplate from './components/templates/FarmRanchTemplate';
import UrbanChicTemplate from './components/templates/UrbanChicTemplate';
import NewConstructionTemplate from './components/templates/NewConstructionTemplate';
import LandTemplate from './components/templates/LandTemplate';
import FirstTimeBuyerTemplate from './components/templates/FirstTimeBuyerTemplate';
import DownsizerTemplate from './components/templates/DownsizerTemplate';
import { Eye, Settings, Share2, Download, ChevronLeft } from 'lucide-react';

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateType>('modern');
  const [view, setView] = useState<'selector' | 'preview'>('selector');

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate data={MOCK_CMA_DATA} />;
      case 'luxury':
        return <LuxuryTemplate data={MOCK_CMA_DATA} />;
      case 'analyst':
        return <AnalystTemplate data={MOCK_CMA_DATA} />;
      case 'storyteller':
        return <StorytellerTemplate data={MOCK_CMA_DATA} />;
      case 'historic':
        return <HistoricTemplate data={MOCK_CMA_DATA} />;
      case 'farm-ranch':
        return <FarmRanchTemplate data={MOCK_CMA_DATA} />;
      case 'urban-chic':
        return <UrbanChicTemplate data={MOCK_CMA_DATA} />;
      case 'new-construction':
        return <NewConstructionTemplate data={MOCK_CMA_DATA} />;
      case 'land':
        return <LandTemplate data={MOCK_CMA_DATA} />;
      case 'first-time-buyer':
        return <FirstTimeBuyerTemplate data={MOCK_CMA_DATA} />;
      case 'downsizer':
        return <DownsizerTemplate data={MOCK_CMA_DATA} />;
      default:
        return <ModernTemplate data={MOCK_CMA_DATA} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans selection:bg-blue-500/30">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {view === 'preview' && (
              <button 
                onClick={() => setView('selector')}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
            )}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-sm" />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">CMA Studio</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {view === 'preview' && (
              <>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                  <Download className="w-4 h-4" />
                  Export PDF
                </button>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 rounded-full transition-all shadow-sm">
                  <Share2 className="w-4 h-4" />
                  Share Link
                </button>
              </>
            )}
            {view === 'selector' && (
              <button 
                onClick={() => setView('preview')}
                className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
              >
                <Eye className="w-4 h-4" />
                Preview Current
              </button>
            )}
          </div>
        </div>
      </nav>

      <main>
        <AnimatePresence mode="wait">
          {view === 'selector' ? (
            <motion.div
              key="selector"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
                <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl shadow-slate-200">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -mr-48 -mt-48" />
                  <div className="relative z-10 max-w-2xl">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Elevate Your CMA Presentations</h1>
                    <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                      Choose from our curated selection of templates designed to resonate with every market segment. From minimalist urban lofts to luxury estates.
                    </p>
                    <div className="flex items-center gap-6 text-sm font-medium text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                        MLS Connected
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        AI-Powered Insights
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-amber-500 rounded-full" />
                        Custom Branding
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <TemplateSelector 
                selectedId={selectedTemplate} 
                onSelect={(id) => {
                  setSelectedTemplate(id);
                  setView('preview');
                }} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="preview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderTemplate()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Quick Settings Floating Button */}
      {view === 'preview' && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed bottom-8 right-8 w-14 h-14 bg-white border border-slate-200 shadow-2xl rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-all z-50 group"
        >
          <Settings className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
        </motion.button>
      )}
    </div>
  );
}

