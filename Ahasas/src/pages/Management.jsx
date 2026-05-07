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
    icon: <Users size={24} />
  },
  {
    name: "ENGR. ABDULRAHMAN BELLO",
    role: "Senior Project Manager",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    bio: "Senior Project Manager specializing in structural integrity and site coordination for industrial complexes with over 15 years of field experience.",
    icon: <Shield size={24} />
  },
  {
    name: "ARCH. ZAINAB SANI",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Leading our architectural vision with innovative designs that merge functionality with aesthetic excellence, ensuring every structure is a landmark.",
    icon: <Award size={24} />
  },
  {
    name: "ENGR. KABIRU MUSA",
    role: "Chief Site Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    bio: "Expert Site Engineer ensuring technical standards and engineering precision in every structural phase, from foundation to commissioning.",
    icon: <UserCheck size={24} />
  }
];

const Management = ({ isSection = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate the team highlight
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 5000);
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
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Our Leadership Team</h1>
            <p className="text-xl text-white/70">Meet the experts driving engineering excellence and innovation at AHASAS Construction.</p>
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
          <div className="relative bg-gray-50 rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                <AnimatePresence mode="wait">
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
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
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
                      <div className="bg-secondary text-white p-3 rounded-xl">
                        {team[currentIndex].icon}
                      </div>
                      <span className="text-secondary font-bold tracking-widest uppercase text-sm">
                        {team[currentIndex].role}
                      </span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-black text-primary leading-tight">
                      {team[currentIndex].name}
                    </h2>
                    <p className="text-xl text-text-light leading-relaxed italic">
                      "{team[currentIndex].bio}"
                    </p>
                    <div className="flex gap-4 pt-6">
                      <button className="bg-primary text-white p-4 rounded-full hover:bg-secondary transition-colors duration-300">
                        <Linkedin size={24} />
                      </button>
                      <button className="bg-primary text-white p-4 rounded-full hover:bg-secondary transition-colors duration-300">
                        <Mail size={24} />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Controls */}
                <div className="flex gap-4 pt-12">
                  <button 
                    onClick={prevMember}
                    className="p-4 bg-white shadow-lg rounded-full text-primary hover:bg-secondary hover:text-white transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextMember}
                    className="p-4 bg-white shadow-lg rounded-full text-primary hover:bg-secondary hover:text-white transition-all"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative group rounded-3xl overflow-hidden aspect-square border-4 transition-all duration-500 ${
                  currentIndex === idx ? 'border-secondary scale-105 shadow-2xl' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/20 transition-colors"></div>
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-white font-bold text-xs truncate">{member.name}</p>
                </div>
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
