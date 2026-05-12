import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import heroBg from '../../assets/images/background.png';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate home first
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          src={heroBg} 
          alt="Modern Construction" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-32 md:pt-40 lg:pt-48">
        <div className="max-w-5xl space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-secondary text-white text-xs md:text-sm font-bold px-6 py-2.5 rounded-full mb-6 tracking-[0.2em] uppercase shadow-2xl border border-white/20">
              Engineering Excellence Since 2025
            </span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] tracking-tighter">
              Welcome to <br />
              <span className="text-secondary drop-shadow-sm uppercase">AHASAS</span> <br className="hidden md:block" />
              <span className="text-white/90 text-3xl md:text-5xl lg:text-6xl font-light tracking-normal block mt-4">Construction Ventures Limited</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-20 md:h-28 overflow-hidden"
          >
            <div className="flex flex-col animate-text-slide">
              {[
                "Architectural Design",
                "General Building Construction",
                "General Contracts",
                "General Consultancy",
                "Renovation and Maintenance",
                "Project Management",
                "Civil Engineering Works",
                "General Supply of Building Materials"
              ].map((service, i) => (
                <p key={i} className="text-secondary text-2xl md:text-4xl lg:text-5xl font-black h-20 md:h-28 flex items-center uppercase tracking-tight">
                  {service}
                </p>
              ))}
              {/* Duplicate first item for seamless loop */}
              <p className="text-secondary text-2xl md:text-4xl lg:text-5xl font-black h-20 md:h-28 flex items-center uppercase tracking-tight">
                Architectural Design
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl font-medium"
          >
            Built on Integrity, Engineered for the Future. We deliver world-class infrastructure solutions with precision and excellence across Nigeria.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn-secondary group flex items-center gap-3 px-10 py-4 text-lg cursor-pointer"
            >
              View Our Projects
              <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-10 py-4 rounded-xl font-bold transition-all border border-white/30 flex items-center gap-3 text-lg cursor-pointer"
            >
              Our Services
            </button>
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
