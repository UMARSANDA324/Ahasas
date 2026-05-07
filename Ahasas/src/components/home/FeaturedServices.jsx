import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Pickaxe, Ruler, Settings2, ShieldCheck, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Building Construction",
    desc: "From residential homes to high-rise commercial complexes, we deliver superior structural integrity.",
    icon: <Building2 size={40} />,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Civil Engineering",
    desc: "Expert design and construction of infrastructure including roads, bridges, and drainage systems.",
    icon: <Truck size={40} />,
    image: "https://images.unsplash.com/photo-1590486803833-ffc4701248a7?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Project Management",
    desc: "Professional oversight ensuring projects are delivered on time, within budget, and to spec.",
    icon: <Settings2 size={40} />,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000"
  }
];

const FeaturedServices = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-secondary font-bold tracking-widest uppercase">Our Core Expertise</span>
            <h2 className="heading-lg">Specialized Construction Solutions</h2>
            <p className="text-text-light text-lg leading-relaxed">
              We provide comprehensive construction services tailored to the unique needs of each client and project.
            </p>
          </div>
          <Link to="/services" className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors group mb-2">
            View All Services <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors"></div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md p-3 rounded-xl text-primary shadow-lg">
                  {service.icon}
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-primary">{service.title}</h3>
                <p className="text-text-light leading-relaxed">
                  {service.desc}
                </p>
                <Link to="/services" className="inline-flex items-center gap-2 text-secondary font-bold hover:text-secondary-dark transition-colors pt-2">
                  Read More <Settings2 size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
