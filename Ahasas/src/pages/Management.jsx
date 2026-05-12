import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Phone, Award, UserCheck, Shield, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import ceoImage from '../assets/images/ceo-image.jpg';

const team = [
  {
    name: "SHU'AIBU ADAMU HASSAN",
    role: "CEO / DIRECTOR PROJECT",
    image: ceoImage,
    bio: "Visionary leader with extensive experience in civil engineering and large-scale project management across Nigeria. Committed to driving infrastructure excellence through innovation and integrity.",
    icon: <Users size={24} />,
    hasImage: true
  },
  {
    name: "ENGR. ABDULRAHMAN BELLO",
    role: "Senior Project Manager",
    bio: "Senior Project Manager specializing in structural integrity and site coordination for industrial complexes with over 15 years of field experience.",
    icon: <Shield size={24} />,
    hasImage: false
  },
  {
    name: "ARCH. ZAINAB SANI",
    role: "Head of Design",
    bio: "Leading our architectural vision with innovative designs that merge functionality with aesthetic excellence, ensuring every structure is a landmark.",
    icon: <Award size={24} />,
    hasImage: false
  },
  {
    name: "ENGR. KABIRU MUSA",
    role: "Chief Site Engineer",
    bio: "Expert Site Engineer ensuring technical standards and engineering precision in every structural phase, from foundation to commissioning.",
    icon: <UserCheck size={24} />,
    hasImage: false
  }
];

const Management = ({ isSection = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate the team highlight
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextMember = () => setCurrentIndex((prev) => (prev + 1) % team.length);
  const prevMember = () => setCurrentIndex((prev) => (prev - 1 + team.length) % team.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={isSection ? "" : "pt-24"}
    >
      {/* Header */}
      {!isSection && (
        <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tighter uppercase">Executive Leadership</h1>
            <p className="text-xl text-white/70">World-class engineering expertise and strategic leadership driving Nigerian infrastructure forward.</p>
          </div>
        </section>
      )}

      {isSection && (
        <div className="text-center pt-24 pb-12">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block">Our Team</span>
          <h2 className="heading-lg text-primary">Management Leadership</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto"></div>
        </div>
      )}

      {/* Featured Leader (Slideshow) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 min-h-[500px]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side / Profile Avatar Side */}
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden bg-slate-50 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {team[currentIndex].hasImage ? (
                    <motion.img
                      key={currentIndex}
                      src={team[currentIndex].image}
                      alt={team[currentIndex].name}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="w-48 h-48 rounded-full bg-primary/5 flex items-center justify-center text-primary border-2 border-primary/10 shadow-inner"
                    >
                      <div className="text-6xl font-black opacity-20">
                        {team[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
              </div>

              {/* Content Side */}
              <div className="p-10 lg:p-20 flex flex-col justify-center space-y-8 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-secondary text-white p-3 rounded-xl shadow-lg">
                        {team[currentIndex].icon}
                      </div>
                      <span className="text-secondary font-black tracking-widest uppercase text-sm">
                        {team[currentIndex].role}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-black text-primary leading-tight uppercase tracking-tight">
                      {team[currentIndex].name}
                    </h2>
                    <div className="w-20 h-1 bg-secondary rounded-full"></div>
                    <p className="text-xl text-text-light leading-relaxed font-medium">
                      {team[currentIndex].bio}
                    </p>
                    <div className="flex gap-4 pt-6">
                      <a href="#" className="bg-primary text-white p-4 rounded-full hover:bg-secondary transition-all duration-300 shadow-lg hover:-translate-y-1">
                        <Linkedin size={22} />
                      </a>
                      <a href={`mailto:ahasasconstructionventuresltd@gmail.com`} className="bg-primary text-white p-4 rounded-full hover:bg-secondary transition-all duration-300 shadow-lg hover:-translate-y-1">
                        <Mail size={22} />
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex gap-4 pt-12">
                  <button 
                    onClick={prevMember}
                    className="p-4 bg-white shadow-xl rounded-full text-primary hover:bg-secondary hover:text-white transition-all border border-gray-100"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextMember}
                    className="p-4 bg-white shadow-xl rounded-full text-primary hover:bg-secondary hover:text-white transition-all border border-gray-100"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid (Quick View) */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative group p-8 rounded-[2.5rem] transition-all duration-500 border-2 flex flex-col items-center text-center gap-6 ${
                  currentIndex === idx ? 'bg-primary border-primary shadow-2xl scale-105' : 'bg-gray-50 border-transparent hover:border-secondary/30'
                }`}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  currentIndex === idx ? 'bg-secondary text-white shadow-lg' : 'bg-white text-primary border border-gray-200'
                }`}>
                  {member.icon}
                </div>
                <div className="space-y-1">
                  <p className={`font-black text-sm uppercase tracking-tight ${currentIndex === idx ? 'text-white' : 'text-primary'}`}>{member.name}</p>
                  <p className={`text-[10px] font-bold uppercase tracking-widest ${currentIndex === idx ? 'text-secondary' : 'text-text-light'}`}>{member.role}</p>
                </div>
                {currentIndex === idx && (
                  <motion.div 
                    layoutId="activePointer"
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rotate-45"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Board Commitment */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="inline-flex items-center justify-center bg-white p-6 rounded-full shadow-2xl text-secondary mb-4 ring-8 ring-secondary/5">
            <Users size={40} />
          </div>
          <h2 className="text-3xl font-black text-primary uppercase tracking-tight">Our Executive Commitment</h2>
          <p className="text-xl text-text-light leading-relaxed italic font-medium">
            "We build more than just landmarks; we build legacies. Our leadership is driven by the mission to reshape Nigeria's infrastructure with world-class engineering, uncompromising safety, and absolute integrity."
          </p>
          <div className="space-y-1">
            <p className="font-black text-primary text-lg tracking-widest uppercase">The AHASAS Management Board</p>
            <p className="text-secondary font-bold text-sm tracking-[0.3em] uppercase">Engineering the Future</p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Management;
