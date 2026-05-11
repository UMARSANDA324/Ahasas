import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Shield, Award, Users, CheckCircle2 } from 'lucide-react';
import ceoImage from '../assets/images/ceo-image.jpg';

const About = ({ isSection = false }) => {
  const values = [
    { icon: <Shield size={32} />, title: "Integrity", desc: "We maintain the highest standards of ethics and honesty in all our dealings." },
    { icon: <Award size={32} />, title: "Excellence", desc: "We strive for perfection in every detail of our construction processes." },
    { icon: <Users size={32} />, title: "Professionalism", desc: "Our team of experts delivers world-class engineering solutions." },
    { icon: <Target size={32} />, title: "Safety", desc: "Prioritizing the health and safety of our workforce and the public." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={isSection ? "" : "pt-24"}
    >
      {/* Page Header - Only show if not in section mode */}
      {!isSection && (
        <section className="relative py-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=2000" alt="Background" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block"
            >
              Since 2025
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6"
            >
              About AHASAS Construction Ventures Limited
            </motion.h1>
            <div className="w-24 h-1.5 bg-secondary mx-auto"></div>
          </div>
        </section>
      )}

      {/* Section Header - Only show if in section mode */}
      {isSection && (
        <div className="text-center pt-24 pb-12">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block">Company Profile</span>
          <h2 className="heading-lg text-primary">About AHASAS Construction Ventures Limited</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto"></div>
        </div>
      )}

      {/* Company Story & CEO */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 rounded-2xl -z-10 group-hover:bg-secondary/20 transition-colors"></div>
              <img 
                src={ceoImage} 
                alt="CEO" 
                className="w-full rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary">SHU'AIBU ADAMU HASSAN</h4>
                <p className="text-secondary font-semibold text-sm">CEO / DIRECTOR PROJECT</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="heading-lg">Leading the Future of Construction in Nigeria</h2>
                <p className="text-text-light text-lg leading-relaxed">
                  <strong>AHASAS Construction Ventures Limited</strong> is a professional building construction and civil engineering company. Registered as a Limited Liability Company on September 12, 2025 (RC 8817973), we have quickly established ourselves as a benchmark for quality and infrastructure development.
                </p>
                <p className="text-text-light leading-relaxed">
                  Our commitment lies in delivering safe, high-quality, modern, and cost-effective construction services across Nigeria. We bridge the gap between traditional engineering standards and innovative modern techniques to create structures that stand the test of time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-secondary">
                  <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                    <Target className="text-secondary" size={20} /> Our Mission
                  </h4>
                  <p className="text-sm text-text-light">To provide innovative, safe, and sustainable construction solutions that contribute to national development.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-secondary">
                  <h4 className="font-bold text-primary flex items-center gap-2 mb-2">
                    <Eye className="text-secondary" size={20} /> Our Vision
                  </h4>
                  <p className="text-sm text-text-light">To be the most trusted and leading construction firm in Nigeria, known for engineering excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-secondary text-xs uppercase tracking-widest font-bold">Company Type</p>
              <p className="font-bold text-lg">Limited Liability</p>
            </div>
            <div className="space-y-2">
              <p className="text-secondary text-xs uppercase tracking-widest font-bold">Incorporation</p>
              <p className="font-bold text-lg">12 Sept 2025</p>
            </div>
            <div className="space-y-2">
              <p className="text-secondary text-xs uppercase tracking-widest font-bold">RC Number</p>
              <p className="font-bold text-lg">RC 8817973</p>
            </div>
            <div className="space-y-2">
              <p className="text-secondary text-xs uppercase tracking-widest font-bold">TIN Number</p>
              <p className="font-bold text-lg">33719603-0001</p>
            </div>
            <div className="space-y-2">
              <p className="text-secondary text-xs uppercase tracking-widest font-bold">Banker</p>
              <p className="font-bold text-lg">First Bank</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="text-secondary font-bold tracking-widest uppercase">Our Foundation</span>
            <h2 className="heading-lg">The Values That Drive Us</h2>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden hover:-translate-y-4 transition-all duration-500"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0F172A]/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Icon Container */}
                <div className="relative mb-8 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B] to-[#D97706] blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 rounded-2xl text-[#F59E0B] shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {value.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-4">
                  <h3 className="text-2xl font-black text-[#0F172A] tracking-tight group-hover:text-[#F59E0B] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#F59E0B] rounded-full group-hover:w-20 transition-all duration-500"></div>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {value.desc}
                  </p>
                </div>

                {/* Hover Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
