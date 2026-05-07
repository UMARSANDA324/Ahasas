import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541976590-71394168159b?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Construction" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        <div className="max-w-3xl space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-secondary text-white text-xs md:text-sm font-bold px-4 py-2 rounded-full mb-6 tracking-widest uppercase shadow-lg">
              Engineering Excellence Since 2025
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Building <span className="text-secondary">Excellence</span>, <br />
              Engineering the <span className="relative">Future.<span className="absolute bottom-2 left-0 w-full h-2 bg-secondary/30 -z-10"></span></span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl font-medium"
          >
            AHASAS Construction Ventures Limited delivers world-class infrastructure and building solutions across Nigeria. We combine safety, quality, and modern technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Link to="/projects" className="btn-secondary group flex items-center gap-3">
              View Our Projects
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link to="/services" className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-3.5 rounded-lg font-bold transition-all border border-white/20 flex items-center gap-3">
              Our Services
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-12 grid grid-cols-3 gap-8 border-t border-white/10"
          >
            <div>
              <p className="text-3xl font-bold text-white">50+</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Projects Done</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">100%</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Safety Record</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">24/7</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">Support</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-12 right-12 hidden lg:block z-10">
        <div className="relative group">
          <div className="absolute inset-0 bg-secondary rounded-full animate-ping opacity-25"></div>
          <button className="bg-secondary text-white p-6 rounded-full relative hover:scale-110 transition-transform">
            <Play size={32} fill="white" />
          </button>
          <span className="absolute top-1/2 right-full mr-6 -translate-y-1/2 text-white font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Watch Presentation
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
