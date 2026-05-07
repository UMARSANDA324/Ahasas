import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Layers, CheckCircle, Clock, LayoutGrid } from 'lucide-react';
import useProjectStore from '../store/projectStore';

const Projects = () => {
  const { projects } = useProjectStore();
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Ongoing Projects', 'Completed Projects', 'Before & After'];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Header */}
      <section className="bg-primary pt-24 pb-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" alt="bg" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase">Our Portfolio</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Engineering <span className="text-secondary">Milestones</span> Across Nigeria
            </h1>
            <p className="text-white/60 text-xl leading-relaxed">
              Showcasing our commitment to quality, innovation, and urban development through a diverse range of infrastructure projects.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="section-padding -mt-24 relative z-20">
        <div className="max-w-7xl mx-auto">
          {/* Category Filter */}
          <div className="bg-white p-4 rounded-2xl shadow-2xl mb-12 flex flex-wrap justify-center gap-4 border border-gray-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-xl font-bold transition-all ${
                  activeCategory === cat 
                  ? "bg-secondary text-white shadow-lg" 
                  : "bg-gray-50 text-primary hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group flex flex-col"
                >
                  <div className="h-72 relative overflow-hidden">
                    <img 
                      src={project.images[0]} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg ${
                        project.status === 'Completed' ? 'bg-green-500' : 'bg-secondary'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-grow space-y-4">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-text-light text-sm font-medium">
                      <MapPin size={16} className="text-secondary" />
                      {project.location}
                    </div>

                    <p className="text-text-light text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Progress Section */}
                    <div className="pt-6 space-y-3">
                      <div className="flex justify-between text-sm font-bold text-primary">
                        <span>Project Completion</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${project.progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full ${project.status === 'Completed' ? 'bg-green-500' : 'bg-secondary'}`}
                        ></motion.div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8 pt-0 mt-auto">
                    <button className="w-full py-4 bg-gray-50 text-primary font-bold rounded-2xl hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-3 group/btn">
                      View Project Details <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-40">
              <Layers size={80} className="text-gray-200 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-primary">No projects found in this category</h3>
              <p className="text-text-light">Check back later for updates on our growing portfolio.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Have a Project in Mind?</h2>
            <p className="text-white/60 text-lg">Let's discuss how we can bring your vision to life with engineering excellence.</p>
          </div>
          <button className="bg-secondary text-white font-bold py-4 px-10 rounded-xl hover:bg-secondary-dark transition-all shadow-xl hover:-translate-y-1 whitespace-nowrap">
            Start a Consultation
          </button>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
