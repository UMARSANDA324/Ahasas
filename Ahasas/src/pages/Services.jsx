import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Pickaxe, Ruler, Settings2, ShieldCheck, Truck, PencilRuler, HardHat, FileText, Briefcase } from 'lucide-react';

const services = [
  {
    title: "Building Construction",
    desc: "Comprehensive construction services for residential, commercial, and industrial buildings. We ensure structural integrity and aesthetic perfection using premium materials and modern techniques.",
    icon: <Building2 size={48} />,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000",
    features: ["Residential Complexes", "Commercial High-rises", "Industrial Facilities", "Sustainable Building"]
  },
  {
    title: "Civil Engineering Works",
    desc: "Specialized in large-scale infrastructure projects including road networks, bridges, drainage systems, and water engineering. We build the backbone of modern society.",
    icon: <Truck size={48} />,
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1000",
    features: ["Road Construction", "Bridge Engineering", "Drainage Systems", "Earthworks"]
  },
  {
    title: "Renovation & Maintenance",
    desc: "Revitalizing existing structures through modernization and consistent maintenance services. We extend the life and value of your properties with professional care.",
    icon: <Pickaxe size={48} />,
    image: "https://images.unsplash.com/photo-1503387762-592dee58c160?auto=format&fit=crop&q=80&w=1000",
    features: ["Structural Retrofitting", "Interior Remodeling", "Facility Maintenance", "Facade Restoration"]
  },
  {
    title: "Project Management",
    desc: "End-to-end management of construction projects ensuring they are completed on schedule, within budget, and to the highest quality standards.",
    icon: <Settings2 size={48} />,
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&q=80&w=1000",
    features: ["Planning & Scheduling", "Cost Control", "Quality Assurance", "Risk Management"]
  },
  {
    title: "Construction Consultancy",
    desc: "Expert advice on technical feasibility, cost estimation, and engineering standards to help clients make informed decisions for their construction investments.",
    icon: <FileText size={48} />,
    image: "https://images.unsplash.com/photo-1454165833767-027ff33027ef?auto=format&fit=crop&q=80&w=1000",
    features: ["Feasibility Studies", "Quantity Surveying", "Tender Management", "Technical Audits"]
  },
  {
    title: "General Contracting",
    desc: "Versatile contracting services providing all materials, labor, equipment, and services necessary for the construction of any project.",
    icon: <Briefcase size={48} />,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000",
    features: ["Turnkey Solutions", "Sub-contractor Mgmt", "Material Procurement", "Site Supervision"]
  }
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Header */}
      <section className="relative py-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="border border-white/20 h-full"></div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6"
          >
            Our <span className="text-secondary">Specialized</span> Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-xl max-w-3xl mx-auto"
          >
            Delivering engineering excellence through a comprehensive range of construction and infrastructure solutions.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white bg-secondary p-3 rounded-2xl shadow-lg transform group-hover:-translate-y-2 transition-transform">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">{service.title}</h3>
                  <p className="text-text-light leading-relaxed">
                    {service.desc}
                  </p>
                  
                  <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm font-semibold text-primary/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-secondary font-bold tracking-widest uppercase">The AHASAS Method</span>
            <h2 className="heading-lg">How We Deliver Excellence</h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { step: "01", title: "Consultation", desc: "Understanding your vision, goals, and project requirements." },
                { step: "02", title: "Planning", desc: "Engineering design, budgeting, and project scheduling." },
                { step: "03", title: "Execution", desc: "Construction with rigorous quality and safety standards." },
                { step: "04", title: "Delivery", desc: "Final inspection, handover, and ongoing maintenance support." }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 text-center space-y-4 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary text-secondary flex items-center justify-center rounded-2xl text-2xl font-bold mx-auto -mt-16 mb-4 shadow-xl border-4 border-white">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-primary">{item.title}</h4>
                  <p className="text-sm text-text-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center italic space-y-8">
          <div className="text-secondary/20 flex justify-center">
            <ShieldCheck size={100} strokeWidth={1} />
          </div>
          <p className="text-3xl md:text-4xl font-light text-primary/80 leading-tight">
            "Our engineering standards are built on the foundation of safety and professionalism, ensuring every project becomes a benchmark for quality in Nigeria."
          </p>
          <div className="text-secondary font-bold tracking-widest uppercase text-sm">— AHASAS Engineering Standards</div>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
