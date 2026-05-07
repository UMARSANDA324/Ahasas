import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import logo from '../../assets/images/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="h-14 w-14 rounded-full border-2 border-secondary" />
              <div>
                <h3 className="text-xl font-bold">AHASAS</h3>
                <p className="text-[10px] uppercase tracking-widest text-secondary">Construction Ventures</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Leading the way in Nigerian infrastructure with excellence, integrity, and world-class engineering standards.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61589323263294" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Recent Projects', path: '/projects' },
                { name: 'Management Team', path: '/management' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-secondary flex items-center gap-2 group transition-colors">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-secondary shrink-0" size={24} />
                <span className="text-gray-400">No. 001 Zoo Road Kano, Kano State Nigeria</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-secondary shrink-0" size={24} />
                <span className="text-gray-400">08038519889<br/>08124365032</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-secondary shrink-0" size={24} />
                <span className="text-gray-400 break-all text-sm">AHASASCONSTRUCTIONVENTURESLTD@GMAIL.COM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-secondary">Newsletter</h4>
            <p className="text-gray-400 mb-6">Subscribe to get latest updates and project news.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-3 px-4 focus:outline-none focus:border-secondary text-white"
              />
              <button className="absolute right-2 top-2 bg-secondary p-1.5 rounded-md hover:bg-secondary-light transition-colors">
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AHASAS Construction Ventures Limited. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/admin" className="hover:text-white transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
