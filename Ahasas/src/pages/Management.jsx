import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Award, UserCheck, Shield, Users } from 'lucide-react';

const team = [
  {
    name: "SHU'AIBU ADAMU HASSAN",
    role: "CEO / DIRECTOR PROJECT",
    specialty: "Executive Leadership & Project Oversight",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "MAHMUD YAHAYA",
    role: "Project Manager",
    specialty: "Operational Planning & Site Management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "ARC. UMAR MUHAMMAD WAYA",
    role: "PROJECT COORDINATOR",
    specialty: "Architectural Planning & Coordination",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Engr. OLADOKUN ISMAIL BABATUNDE",
    role: "SENIOR ENGINEER",
    specialty: "Structural Engineering & Technical Standards",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Arc. ABDULHAFIZU ZUBAIRU",
    role: "PROJECT ARCHITECT",
    specialty: "Design Innovation & Spatial Planning",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "Bldr. YAHAYA SULEMAN",
    role: "SENIOR BUILDER",
    specialty: "Construction Methodology & Quality Control",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "AHMAD YUSUF AHMAD",
    role: "CIVIL ENGINEER",
    specialty: "Infrastructure Design & Implementation",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "MUSTAPHA ABDULLAHI ABUBAKAR",
    role: "CIVIL ENGINEER",
    specialty: "Structural Analysis & Site Engineering",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "QS. ALI NAZIF MUHAMMAD",
    role: "SENIOR QS",
    specialty: "Cost Management & Quantity Surveying",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "QS. ISMAILA GARBA",
    role: "QUANTITY SURVEYOR",
    specialty: "Budget Estimation & Material Procurement",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600"
  }
];

const Management = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Header */}
      <section className="bg-primary py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <Users size={800} className="text-white" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <span className="text-secondary font-bold tracking-[0.4em] uppercase mb-6 block">Our Leadership</span>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-8">
            Expert Minds Behind <span className="text-secondary">Excellence</span>
          </h1>
          <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
            Our management team brings together decades of specialized experience in engineering, architecture, and project management.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-gray-50 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-80 relative overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-4 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-secondary transition-colors"><Linkedin size={18} /></a>
                      <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-secondary transition-colors"><Mail size={18} /></a>
                      <a href="#" className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-secondary transition-colors"><Phone size={18} /></a>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary leading-tight group-hover:text-secondary transition-colors">{member.name}</h3>
                  <p className="text-secondary font-bold text-xs uppercase tracking-widest">{member.role}</p>
                  <div className="w-8 h-1 bg-gray-100 mx-auto mt-4 group-hover:w-16 transition-all group-hover:bg-secondary"></div>
                  <p className="text-gray-400 text-xs italic pt-4">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Stats */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            { icon: <Award size={48} />, title: "Certified Excellence", desc: "All our team members are registered with their respective professional bodies (COREN, ARCON, CORBON)." },
            { icon: <UserCheck size={48} />, title: "Vast Experience", desc: "Combined experience of over 100 years in the Nigerian construction industry." },
            { icon: <Shield size={48} />, title: "Safety Focused", desc: "Our leaders prioritize HSE standards on every project site without compromise." }
          ].map((item, idx) => (
            <div key={idx} className="space-y-6 p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl transition-all group">
              <div className="text-secondary flex justify-center group-hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-2xl font-bold text-primary">{item.title}</h4>
              <p className="text-text-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Management;
