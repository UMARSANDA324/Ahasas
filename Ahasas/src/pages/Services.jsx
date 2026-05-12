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
import architectFlowPlan from '../assets/images/architect_flow_plan.png';

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
            <p className="text-xl text-white/70 max-w-2xl font-medium">Delivering engineering excellence through a comprehensive suite of building construction services and infrastructure development across Nigeria by AHASAS Construction Ventures Limited.</p>
          </div>
        </section>
      )}

      {isSection && (
        <div className="text-center pt-28 pb-16">
          <span className="text-secondary font-black tracking-[0.4em] uppercase mb-4 block text-sm">Professional Solutions</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Core Construction Services</h2>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1.5 bg-gray-50 -z-10"></div>
            {[
              { step: "01", title: "Strategy", desc: "Aligning project goals with technical feasibility.", icon: <Building2 size={32} /> },
              { step: "02", title: "Blueprint", desc: "Detailed architectural and structural planning.", icon: <Ruler size={32} /> },
              { step: "03", title: "Precision", desc: "On-site execution with uncompromising quality.", icon: <HardHat size={32} /> },
              { step: "04", title: "Assurance", desc: "Rigorous testing and project hand-over.", icon: <Shield size={32} /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 overflow-hidden hover:-translate-y-4 transition-all duration-500 text-center"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B]/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#0F172A]/5 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                
                <span className="absolute top-6 right-8 text-4xl font-black text-[#F59E0B]/10 group-hover:text-[#F59E0B]/20 transition-colors z-0">{item.step}</span>

                {/* Icon Container */}
                <div className="relative mb-8 inline-block z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B] to-[#D97706] blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="relative bg-gradient-to-br from-[#0F172A] to-[#1E293B] p-6 rounded-2xl text-[#F59E0B] shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative space-y-4 z-10">
                  <h3 className="text-2xl font-black text-[#0F172A] tracking-tight group-hover:text-[#F59E0B] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="w-12 h-1 bg-[#F59E0B] rounded-full mx-auto group-hover:w-20 transition-all duration-500"></div>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Hover Glass Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Flow Section */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-secondary font-black tracking-[0.4em] uppercase text-sm">Design Precision</span>
              <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight">Architectural & Structural <br /><span className="text-secondary">Flow Planning</span></h2>
              <p className="text-text-light text-lg leading-relaxed font-medium">
                Our approach to every project begins with meticulous architectural flow planning. We visualize the structural journey from initial blueprint to final commissioned landmark, ensuring every detail aligns with engineering excellence.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Advanced Structural Visualization",
                  "Integrated Engineering Workflows",
                  "Precision-Driven Design Optimization"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-primary font-bold">
                    <div className="h-2 w-2 bg-secondary rounded-full"></div>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] blur-2xl group-hover:bg-secondary/20 transition-all duration-700"></div>
              <div className="relative bg-white p-4 rounded-[2.5rem] shadow-2xl border border-white overflow-hidden">
                <img 
                  src={architectFlowPlan} 
                  alt="Architectural Flow Plan" 
                  className="w-full rounded-[1.5rem] grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
