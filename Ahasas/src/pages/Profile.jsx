import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, ChevronLeft, Shield, FileText, ZoomIn, ZoomOut, Maximize2, RotateCcw
} from 'lucide-react';
import { Link } from 'react-router-dom';

// PDF Viewer Imports
import { Worker, Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import profilePdf from '../assets/images/AHASAS PROFILE 2026.pdf';
import headerBg from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (2).png';

const Profile = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // PDF.js worker URL
  const workerUrl = "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 min-h-screen bg-[#F8FAFC]"
    >
      {/* Premium Header */}
      <section className="bg-[#0F172A] py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-10"></div>
        <img
          src={headerBg}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          alt="Header Background"
        />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
          <Link to="/" className="inline-flex items-center gap-2 text-secondary font-bold mb-6 hover:gap-4 transition-all uppercase tracking-widest text-xs">
            <ChevronLeft size={16} /> Return to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="inline-block bg-secondary/20 text-secondary text-[10px] font-black px-4 py-1.5 rounded-full tracking-[0.2em] uppercase border border-secondary/30">
                Official Corporate Portfolio
              </span>
              <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter uppercase">
                Company <span className="text-secondary">Profile</span>
              </h1>
              <p className="text-lg text-white/60 font-medium leading-relaxed">
                Review our licenses, registration documents, and architectural certifications directly below.
              </p>
            </div>
            <a 
              href={profilePdf} 
              download="AHASAS_PROFILE_2026.pdf"
              className="bg-secondary hover:bg-secondary-light text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center gap-3 shadow-2xl transition-all hover:-translate-y-1"
            >
              <Download size={18} /> Download Copy
            </a>
          </div>
        </div>
      </section>

      {/* Embedded PDF Viewer Section */}
      <section className="py-12 px-4 md:px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-200 h-[800px] md:h-[1000px] relative flex flex-col"
          >
            {/* Viewer Toolbar Info */}
            <div className="bg-slate-50 border-b border-slate-200 px-8 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary p-2 rounded-lg text-white">
                  <Shield size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-primary uppercase tracking-tight">Verified Document Viewer</h3>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">AHASAS_PROFILE_2026.pdf</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> Secure Connection</span>
                <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-secondary rounded-full"></div> High Resolution</span>
              </div>
            </div>

            {/* Loading State Overlay */}
            {!isLoaded && (
              <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-primary font-black uppercase tracking-widest text-xs">Initializing Secure Viewer...</p>
                </div>
              </div>
            )}

            {/* Actual Viewer Container */}
            <div className="flex-grow overflow-hidden relative">
              <Worker workerUrl={workerUrl}>
                <Viewer
                  fileUrl={profilePdf}
                  plugins={[defaultLayoutPluginInstance]}
                  defaultScale={SpecialZoomLevel.PageWidth}
                  onDocumentLoad={() => setIsLoaded(true)}
                  theme="light"
                />
              </Worker>
            </div>
          </motion.div>

          {/* Viewer Bottom Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
              <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                <FileText size={20} />
              </div>
              <p className="text-xs font-bold text-slate-600 leading-tight">Scroll to browse licenses and registration certificates.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
              <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                <ZoomIn size={20} />
              </div>
              <p className="text-xs font-bold text-slate-600 leading-tight">Use the toolbar controls to zoom into document details.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 shadow-sm">
              <div className="bg-secondary/10 p-3 rounded-xl text-secondary">
                <Maximize2 size={20} />
              </div>
              <p className="text-xs font-bold text-slate-600 leading-tight">Supports full-screen viewing for detailed inspection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Support Section */}
      <section className="py-20 bg-[#0F172A] text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center space-y-8 relative z-10">
          <h3 className="text-2xl font-black uppercase tracking-widest">Questions about our <span className="text-secondary">Credentials?</span></h3>
          <p className="text-white/60 max-w-xl mx-auto font-medium text-sm leading-relaxed">Our legal and technical teams are available to provide further clarification on any of our corporate certifications or engineering licenses.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-secondary text-white px-10 py-4 rounded-xl uppercase tracking-widest font-black text-xs hover:bg-secondary-light transition-all shadow-xl">Contact Registry</Link>
            <a href="tel:08038519889" className="bg-white/5 px-10 py-4 rounded-xl border border-white/10 uppercase tracking-widest font-black text-xs hover:bg-white/10 transition-all">Call Verification</a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Profile;
