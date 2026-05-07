import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { cn } from '../../lib/utils';
import logo from '../../assets/images/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Management', path: '/management' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="AHASAS Logo" className="h-12 w-12 rounded-full object-cover border-2 border-primary" />
            <div className="hidden md:block">
              <h1 className={cn(
                "text-xl font-bold leading-none",
                isScrolled ? "text-primary" : "text-white"
              )}>AHASAS</h1>
              <p className={cn(
                "text-[10px] tracking-widest uppercase font-semibold",
                isScrolled ? "text-secondary" : "text-secondary-light"
              )}>Construction Ventures</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-medium transition-colors hover:text-secondary",
                  location.pathname === link.path ? "text-secondary" : (isScrolled ? "text-primary" : "text-white")
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" className="btn-secondary py-2 px-6 text-sm">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={cn("lg:hidden p-2", isScrolled ? "text-primary" : "text-white")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-2xl animate-slide-down">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-lg font-semibold py-2 border-b border-gray-100",
                  location.pathname === link.path ? "text-secondary" : "text-primary"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/admin" 
              className="text-gray-400 text-sm mt-4 text-center"
              onClick={() => setIsOpen(false)}
            >
              Admin Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
