import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About', path: 'about' },
    { name: 'Services', path: 'services' },
    { name: 'Projects', path: 'projects' },
    { name: 'Management', path: 'management' },
    { name: 'Contact', path: 'contact' },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
      // Clear state after scrolling
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <button onClick={() => handleNavClick('home')} className="flex items-center gap-3">
            <img src={logo} alt="AHASAS Logo" className="h-12 w-12 rounded-full object-cover border-2 border-primary" />
            <div className="hidden md:block text-left">
              <h1 className={cn(
                "text-xl font-bold leading-none",
                isScrolled ? "text-primary" : "text-white"
              )}>AHASAS</h1>
              <p className={cn(
                "text-[10px] tracking-widest uppercase font-semibold",
                isScrolled ? "text-secondary" : "text-secondary-light"
              )}>Construction Ventures</p>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={cn(
                  "font-bold text-sm tracking-widest uppercase transition-all hover:text-secondary relative group",
                  isScrolled ? "text-primary" : "text-white"
                )}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
              </button>
            ))}
            <div className="flex items-center gap-6">
              <a href="tel:08038519889" className="flex items-center gap-2 text-secondary font-black text-sm tracking-tighter hover:scale-105 transition-transform">
                <Phone size={16} /> 08038519889
              </a>
              <Link to="/contact" onClick={() => handleNavClick('contact')} className="btn-secondary py-2.5 px-6 text-xs font-black tracking-widest uppercase shadow-xl">
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={cn("lg:hidden p-2 rounded-xl transition-colors", isScrolled ? "text-primary hover:bg-gray-100" : "text-white hover:bg-white/10")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl overflow-hidden border-t border-gray-50"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.path)}
                  className="text-xl font-black tracking-widest uppercase text-primary text-left hover:text-secondary transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-8 border-t border-gray-100 flex flex-col gap-4">
                <a href="tel:08038519889" className="flex items-center gap-3 text-secondary font-black text-lg">
                  <Phone size={20} /> 08038519889
                </a>
                <Link 
                  to="/admin" 
                  className="text-gray-400 font-bold text-sm hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Project Management Console
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
