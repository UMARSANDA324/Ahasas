import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, Clock, MapPin, ArrowUpRight } from 'lucide-react';
import useProjectStore from '../store/projectStore';

const Projects = ({ isSection = false }) => {
  const { projects } = useProjectStore();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Ongoing Projects', 'Completed Projects', 'Before & After'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={isSection ? "" : "pt-24 min-h-screen bg-white"}
    >
      {/* Header */}
      {!isSection && (
        <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=2000" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="Portfolio Background"
          />
          <div className="max-w-7xl mx-auto px-6 relative z-20">
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">Our <br /><span className="text-secondary">Portfolio</span></h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">Showcasing the structural landmarks and infrastructure achievements that define AHASAS Construction.</p>
          </div>
        </section>
      )}

      {isSection && (
        <div className="text-center pt-28 pb-16">
          <span className="text-secondary font-black tracking-[0.4em] uppercase mb-4 block text-sm">Engineering Legacy</span>
          <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Featured Portfolio</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mt-6 rounded-full"></div>
        </div>
      )}

      {/* Filter Bar */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-20">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-500 border-2 ${
                  activeFilter === filter 
                    ? 'bg-secondary border-secondary text-white shadow-2xl shadow-secondary/30 scale-105' 
                    : 'bg-white border-gray-100 text-primary hover:border-secondary/50 hover:bg-gray-50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-50 h-[500px]"
                >
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  
                  {/* Premium Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <span className="bg-secondary px-5 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                          {project.category}
                        </span>
                        <div className="bg-white/10 backdrop-blur-xl p-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 duration-500 border border-white/20">
                          <ArrowUpRight size={24} className="text-secondary" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <h3 className="text-3xl font-black tracking-tight leading-tight">{project.title}</h3>
                        <p className="text-white/70 text-sm font-medium line-clamp-2 leading-relaxed">{project.description}</p>
                      </div>
                      
                      <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                        <div className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-white/60">
                          <MapPin size={16} className="text-secondary" /> {project.location}
                        </div>
                        <div className="flex items-center gap-2.5 text-[10px] font-black uppercase tracking-widest text-white/60">
                          <Clock size={16} className="text-secondary" /> {project.status}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="pt-4">
                        <div className="flex justify-between text-[9px] font-black uppercase tracking-[0.3em] mb-2 text-secondary">
                          <span>Build Progress</span>
                          <span>{project.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${project.progress}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-secondary"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-40 bg-gray-50 rounded-[3rem] border-2 border-dashed border-gray-200">
              <LayoutGrid size={64} className="text-gray-300 mx-auto mb-6" />
              <p className="text-gray-400 font-black uppercase tracking-widest text-sm">Portfolio Data Unavailable</p>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
