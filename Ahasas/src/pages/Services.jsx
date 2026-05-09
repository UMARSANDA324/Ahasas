import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Ruler, HardHat, Shield, PenTool, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import buildingImg from '../assets/images/01.png';
import civilImg from '../assets/images/Gemini_Generated_Image_6hb6xt6hb6xt6hb6.png';
import renovationImg from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (6).png';
import projectMgmtImg from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (5).png';
import consultancyImg from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (4).png';
import contractingImg from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (3).png';
import headerBg from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (2).png';

const Services = ({ isSection = false }) => {
  const allServices = [
    {
      title: "Building Construction",
      desc: "Modern construction of residential and commercial structures using high-grade materials and precision engineering.",
      icon: <Building2 size={40} />,
      image: buildingImg,
      features: ["Structural Integrity", "Modern Architecture", "Safety Compliance", "Quality Materials"]
    },
    {
      title: "Civil Engineering Works",
      desc: "Large-scale infrastructure including road networks, bridges, and complex drainage systems across Nigeria.",
      icon: <Ruler size={40} />,
      image: civilImg,
      features: ["Road Networks", "Bridge Engineering", "Drainage Systems", "Urban Infrastructure"]
    },
    {
      title: "Renovation & Maintenance",
      desc: "Breathe new life into existing structures with comprehensive remodeling and proactive facility maintenance.",
      icon: <Wrench size={40} />,
      image: renovationImg,
      features: ["Interior Remodeling", "Structural Repairs", "System Upgrades", "Ongoing Maintenance"]
    },
    {
      title: "Project Management",
      desc: "Expert oversight ensuring timelines are met, budgets are optimized, and engineering standards are maintained.",
      icon: <HardHat size={40} />,
      image: projectMgmtImg,
      features: ["Timeline Tracking", "Cost Optimization", "Site Supervision", "Risk Mitigation"]
    },
    {
      title: "Construction Consultancy",
      desc: "Strategic advisory on feasibility, design optimization, and technical specifications for diverse builds.",
      icon: <PenTool size={40} />,
      image: consultancyImg,
      features: ["Feasibility Studies", "Technical Planning", "Design Review", "Regulatory Support"]
    },
    {
      title: "General Contracting",
      desc: "Comprehensive project execution coordinating multiple teams and resources for seamless construction delivery.",
      icon: <Shield size={40} />,
      image: contractingImg,
      features: ["Team Coordination", "Resource Procurement", "Quality Control", "End-to-End Delivery"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={isSection ? "" : "pt-24"}
    >
      {/* Header */}
      {!isSection && (
        <section className="bg-primary py-24 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent z-10"></div>
          <img
            src={headerBg}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            alt="Header Background"
          />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">Our Expert <br /><span className="text-secondary">Services</span></h1>
            <p className="text-xl text-white/70 max-w-2xl font-medium">Delivering engineering excellence through a comprehensive suite of construction solutions across Nigeria.</p>
          </div>
        </section>
      )}

      {isSection && (
        <div className="text-center pt-28 pb-16">
          <span className="text-secondary font-black tracking-[0.4em] uppercase mb-4 block text-sm">Professional Solutions</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Our Core Services</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>
      )}

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {allServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 group hover:shadow-secondary/20 transition-all duration-700 flex flex-col h-full"
              >
                <div className="relative h-80 overflow-hidden shrink-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute top-8 left-8 bg-secondary text-white p-5 rounded-2xl shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>
                <div className="p-12 space-y-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-primary leading-tight">{service.title}</h3>
                  <p className="text-text-light leading-relaxed font-medium flex-grow">{service.desc}</p>
                  <div className="pt-8 border-t border-gray-100">
                    <ul className="grid grid-cols-1 gap-4 mb-8">
                      {service.features.map((feat, fidx) => (
                        <li key={fidx} className="flex items-center gap-4 text-sm font-bold text-gray-600">
                          <CheckCircle2 size={18} className="text-secondary shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>
                    <button className="flex items-center gap-3 text-secondary font-black uppercase tracking-widest text-xs hover:gap-6 transition-all">
                      Consult Now <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Engineering Excellence Process</h2>
            <p className="text-text-light max-w-2xl mx-auto text-lg font-medium">How we maintain the highest standards in construction delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1.5 bg-gray-50 -z-10"></div>
            {[
              { step: "01", title: "Strategy", desc: "Aligning project goals with technical feasibility." },
              { step: "02", title: "Blueprint", desc: "Detailed architectural and structural planning." },
              { step: "03", title: "Precision", desc: "On-site execution with uncompromising quality." },
              { step: "04", title: "Assurance", desc: "Rigorous testing and project hand-over." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 text-center space-y-6 hover:border-secondary hover:-translate-y-3 transition-all duration-500 group">
                <span className="text-6xl font-black text-secondary/10 group-hover:text-secondary/30 transition-colors block leading-none">{item.step}</span>
                <h4 className="text-xl font-bold text-primary tracking-tight">{item.title}</h4>
                <p className="text-sm text-text-light font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
