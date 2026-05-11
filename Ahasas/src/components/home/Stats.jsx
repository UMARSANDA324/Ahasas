import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users2, Trophy, Clock, CheckCircle2 } from 'lucide-react';

const stats = [
  { 
    icon: <Building2 size={32} />, 
    value: '17+', 
    label: 'Projects Completed', 
    color: 'from-blue-600 to-primary' 
  },
  { 
    icon: <Users2 size={32} />, 
    value: '25+', 
    label: 'Expert Engineers', 
    color: 'from-orange-500 to-secondary' 
  },
  { 
    icon: <Trophy size={32} />, 
    value: '3+', 
    label: 'Industry Awards', 
    color: 'from-yellow-400 to-accent' 
  },
  { 
    icon: <Clock size={32} />, 
    value: '10+', 
    label: 'Years Experience', 
    color: 'from-primary-light to-primary' 
  },
];

const Stats = () => {
  return (
    <section className="relative -mt-20 z-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Background Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500`}></div>
            
            {/* Main Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 flex flex-col items-center text-center gap-6 hover:-translate-y-2 transition-all duration-500">
              <div className={`p-5 rounded-2xl text-white bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                {stat.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl font-black text-primary tracking-tight">
                  {stat.value}
                </h3>
                <div className="w-12 h-1 bg-secondary mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
                <p className="text-gray-500 font-bold text-sm uppercase tracking-widest pt-2">{stat.label}</p>
              </div>
              
              {/* Subtle Decorative Icon */}
              <div className="absolute top-4 right-4 text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={40} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
