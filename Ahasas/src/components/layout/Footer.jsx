import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';
import logo from '../../assets/images/logo.jpg';

const Footer = () => {
  const whatsappNumber = "08038519889";
  const whatsappUrl = `https://wa.me/234${whatsappNumber.substring(1)}`;

  return (
    <footer className="bg-primary text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-4 group">
              <img src={logo} alt="Logo" className="h-16 w-16 rounded-full border-2 border-secondary group-hover:scale-110 transition-transform duration-500" />
              <div>
                <h3 className="text-2xl font-black tracking-tighter">AHASAS</h3>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">Construction Ventures</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed font-medium">
              Leading the way in Nigerian infrastructure with excellence, integrity, and world-class engineering standards. We build landmarks that stand the test of time.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61589323263294" target="_blank" rel="noreferrer" className="bg-white/5 p-3 rounded-xl hover:bg-secondary hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <Facebook size={22} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-secondary hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <Instagram size={22} />
              </a>
              <a href="#" className="bg-white/5 p-3 rounded-xl hover:bg-secondary hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-black mb-10 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-5">
              {[
                { name: 'About Company', id: 'about' },
                { name: 'Core Services', id: 'services' },
                { name: 'Project Portfolio', id: 'projects' },
                { name: 'Leadership Team', id: 'management' },
                { name: 'Contact Center', id: 'contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to="/" 
                    state={{ scrollTo: item.id }} 
                    className="text-gray-400 hover:text-white flex items-center gap-3 group transition-all font-semibold"
                    onClick={() => {
                      if (window.location.pathname === '/') {
                        const el = document.getElementById(item.id);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <ArrowRight size={14} className="text-secondary group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-black mb-10 relative inline-block">
              Contact Center
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-secondary rounded-full"></span>
            </h4>
            <ul className="space-y-8">
              <li className="flex gap-5">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 h-fit">
                  <MapPin className="text-secondary" size={24} />
                </div>
                <span className="text-gray-400 font-medium text-sm leading-relaxed">No. 001 Zoo Road Kano, Kano State Nigeria</span>
              </li>
              <li className="flex gap-5">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 h-fit">
                  <Phone className="text-secondary" size={24} />
                </div>
                <div className="text-gray-400 font-bold space-y-1">
                  <a href="tel:08038519889" className="hover:text-secondary block transition-colors">08038519889</a>
                  <a href="tel:08124365032" className="hover:text-secondary block transition-colors text-xs font-medium">08124365032</a>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 h-fit">
                  <Mail className="text-secondary" size={24} />
                </div>
                <a href="mailto:AHASASCONSTRUCTIONVENTURESLTD@GMAIL.COM" className="text-gray-400 font-medium break-all text-xs hover:text-secondary transition-colors">AHASASCONSTRUCTIONVENTURESLTD@GMAIL.COM</a>
              </li>
            </ul>
          </div>

          {/* WhatsApp & Newsletter */}
          <div className="space-y-10">
            <div>
              <h4 className="text-xl font-black mb-10 relative inline-block">
                WhatsApp Chat
                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-green-500 rounded-full"></span>
              </h4>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl group hover:bg-green-500/10 hover:border-green-500/50 transition-all duration-500"
              >
                <div className="bg-green-500 text-white p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-green-500 mb-1">Direct Chat</p>
                  <p className="text-lg font-black text-white">{whatsappNumber}</p>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-secondary mb-4">Stay Updated</h4>
              <form className="relative" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter email..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-secondary text-white font-medium"
                />
                <button className="absolute right-2 top-2 bg-secondary p-2.5 rounded-lg hover:bg-secondary-light transition-colors shadow-lg">
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-500 text-sm font-semibold">
            © {new Date().getFullYear()} AHASAS Construction Ventures Limited. <span className="hidden md:inline">|</span> Engineering Excellence Since 2025.
          </p>
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-gray-500">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/admin" className="hover:text-white transition-colors">Staff Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
