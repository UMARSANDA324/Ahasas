import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import About from './About';
import Services from './Services';
import Projects from './Projects';
import Management from './Management';
import Contact from './Contact';

const Landing = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section id="home">
        <Hero />
      </section>
      
      <Stats />

      <section id="about">
        <About isSection={true} />
      </section>

      <section id="services">
        <Services isSection={true} />
      </section>

      <section id="projects">
        <Projects isSection={true} />
      </section>

      <section id="management">
        <Management isSection={true} />
      </section>

      <section id="contact">
        <Contact isSection={true} />
      </section>
    </motion.div>
  );
};

export default Landing;
