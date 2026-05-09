import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HardHat, Building2, Ruler, ShieldCheck, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import FeaturedServices from '../components/home/FeaturedServices';
import FeaturedProjects from '../components/home/FeaturedProjects';
import introImg from '../assets/images/Gemini_Generated_Image_ievsecievsecievs (2).png';
import architectPlanImg from '../assets/images/architect_flow_plan.png';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="overflow-hidden"
    >
      <Hero />
      <Stats />
      
      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={introImg} 
                alt="AHASAS Construction Site in Kano" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-2xl shadow-xl z-20 hidden md:block">
              <h3 className="text-4xl font-bold text-white">10+</h3>
              <p className="text-white/80 font-semibold">Years of Excellence</p>
            </div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h1 className="sr-only">AHASAS Construction Ventures Limited</h1>
              <span className="text-secondary font-bold tracking-widest uppercase">Top Construction Company in Kano</span>
              <h2 className="heading-lg">Building the Future of Nigeria with Civil Engineering Excellence</h2>
              <p className="text-text-light leading-relaxed text-lg">
                <strong>AHASAS Construction Ventures Limited</strong> is a premier civil engineering company in Nigeria committed to delivering safe, high-quality, and modern building construction services. We combine rigorous engineering standards with professionalism to drive infrastructure development and exceed client expectations across Kano and beyond.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="text-secondary" />, title: "Safety First", desc: "Strict adherence to HSE standards." },
                { icon: <Ruler className="text-secondary" />, title: "Precision", desc: "Engineering accuracy in every detail." },
                { icon: <Clock className="text-secondary" />, title: "On Time", desc: "Committed to project deadlines." },
                { icon: <Building2 className="text-secondary" />, title: "Quality", desc: "Using premium materials and methods." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-primary">{item.title}</h3>
                    <p className="text-sm text-text-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/about" className="btn-primary inline-flex items-center gap-2">
              Learn More About Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Engineering Design Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <span className="text-secondary font-bold tracking-widest uppercase">Infrastructure Development</span>
              <h2 className="heading-lg">Precision Engineering & Blueprint Design</h2>
              <p className="text-text-light leading-relaxed text-lg">
                As a leading civil engineering company in Nigeria, our approach begins with meticulous architectural and structural planning. From modern flow plans to comprehensive blueprints, we ensure every building construction service we provide is founded on exact calculations, technical mastery, and a premium corporate aesthetic.
              </p>
            </div>
            <ul className="space-y-4 text-text-light">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <h3 className="font-semibold text-primary inline">Advanced CAD Modeling & Structural Grids</h3>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <h3 className="font-semibold text-primary inline">Comprehensive Infrastructure Flow Plans</h3>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary"></div>
                <h3 className="font-semibold text-primary inline">Integrated Architectural & Civil Solutions</h3>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            <img 
              src={architectPlanImg} 
              alt="Professional architectural flow plan and blueprint design by AHASAS" 
              className="w-full rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      <div id="services">
        <FeaturedServices />
      </div>
      <div id="projects">
        <FeaturedProjects />
      </div>

      {/* Why Choose Us */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Why Industry Leaders Trust AHASAS</h2>
            <p className="text-white/60 text-lg">We don't just build structures; we build legacies through commitment and engineering excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <HardHat size={40} />, 
                title: "Expert Team", 
                desc: "Our management comprises highly qualified engineers, architects, and project managers with decades of experience." 
              },
              { 
                icon: <Users size={40} />, 
                title: "Client-Centric", 
                desc: "We prioritize our clients' visions, ensuring every project reflects their goals and functional requirements." 
              },
              { 
                icon: <Building2 size={40} />, 
                title: "Modern Methods", 
                desc: "Utilizing state-of-the-art construction technology and sustainable practices for long-lasting results." 
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-10 rounded-2xl border border-white/10 hover:border-secondary transition-all group">
                <div className="text-secondary mb-6 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/60 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-secondary rounded-3xl p-12 md:p-20 text-center space-y-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 border-8 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 border-8 border-white rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">Ready to Start Your Next Construction Project?</h2>
          <p className="text-white/90 text-xl max-w-2xl mx-auto font-medium">
            Let's discuss your vision and turn it into a concrete reality. Contact us for a professional consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <Link to="/contact" className="bg-primary text-white font-bold py-4 px-10 rounded-xl hover:bg-primary-dark transition-all shadow-xl hover:-translate-y-1">
              Contact Us Today
            </Link>
            <a href="tel:08038519889" className="bg-white text-secondary font-bold py-4 px-10 rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:-translate-y-1">
              Call 08038519889
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
