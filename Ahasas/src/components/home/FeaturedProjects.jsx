import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowUpRight } from 'lucide-react';
import useProjectStore from '../../store/projectStore';

const FeaturedProjects = () => {
  const { projects } = useProjectStore();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-secondary font-bold tracking-widest uppercase">Our Portfolio</span>
            <h2 className="heading-lg">Featured Construction Projects</h2>
            <p className="text-text-light text-lg leading-relaxed">
              Explore some of our most impactful work across Nigeria, from urban landmarks to critical infrastructure.
            </p>
          </div>
          <Link to="/projects" className="text-primary font-bold flex items-center gap-2 hover:text-secondary transition-colors group mb-2">
            View Project Gallery <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Large Card */}
          {featuredProjects[0] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:row-span-2 relative group rounded-3xl overflow-hidden shadow-2xl h-[600px] lg:h-full"
            >
              <img 
                src={featuredProjects[0].images[0]} 
                alt={featuredProjects[0].title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-10 space-y-4 w-full">
                <span className="bg-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  {featuredProjects[0].category}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white">{featuredProjects[0].title}</h3>
                <p className="text-white/60 line-clamp-2 max-w-lg">
                  {featuredProjects[0].description}
                </p>
                <Link to="/projects" className="inline-flex items-center gap-2 text-white font-bold group/btn pt-4">
                  View Details <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}

          {/* Smaller Cards */}
          <div className="flex flex-col gap-8">
            {featuredProjects.slice(1, 3).map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group rounded-3xl overflow-hidden shadow-xl h-[300px]"
              >
                <img 
                  src={project.images[0]} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 space-y-2 w-full">
                  <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
