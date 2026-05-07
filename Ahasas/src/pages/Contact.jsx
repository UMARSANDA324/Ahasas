import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, MessageSquare, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24"
    >
      {/* Header */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" alt="office" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-2xl space-y-4">
            <span className="text-secondary font-bold tracking-widest uppercase">Connect With Us</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">Get in Touch</h1>
            <p className="text-white/60 text-lg">
              Have a project or inquiry? Reach out to our team of experts for a professional consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white relative z-20 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 space-y-8">
                <h3 className="text-2xl font-bold text-primary">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-6 group">
                    <div className="bg-secondary/10 p-4 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Call Us</p>
                      <p className="text-primary font-bold">08038519889</p>
                      <p className="text-primary font-bold">08124365032</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="bg-secondary/10 p-4 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Email Us</p>
                      <p className="text-primary font-bold break-all text-sm">AHASASCONSTRUCTIONVENTURESLTD@GMAIL.COM</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="bg-secondary/10 p-4 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Office Address</p>
                      <p className="text-primary font-bold">No. 001 Zoo Road Kano, Kano State Nigeria</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="bg-secondary/10 p-4 rounded-2xl text-secondary group-hover:bg-secondary group-hover:text-white transition-all">
                      <Facebook size={24} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Social Media</p>
                      <a href="https://www.facebook.com/profile.php?id=61589323263294" target="_blank" rel="noreferrer" className="text-primary font-bold hover:text-secondary transition-colors">Facebook Page</a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-gray-100">
                  <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                    <Clock size={18} className="text-secondary" /> Working Hours
                  </h4>
                  <div className="space-y-2 text-sm text-text-light">
                    <div className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 5:00 PM</span></div>
                    <div className="flex justify-between"><span>Sat:</span> <span>9:00 AM - 2:00 PM</span></div>
                    <div className="flex justify-between"><span>Sun:</span> <span>Closed</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-primary mb-4">Send us a Message</h3>
                  <p className="text-text-light">Fill out the form below and our team will get back to you within 24 hours.</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+234 ..." 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Project Type</label>
                    <select className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none">
                      <option>Building Construction</option>
                      <option>Civil Engineering</option>
                      <option>Renovation</option>
                      <option>Consultancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-sm font-bold text-primary uppercase tracking-wider">Your Message</label>
                    <textarea 
                      rows="5" 
                      placeholder="Tell us about your project..." 
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 px-6 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2 pt-4">
                    <button type="submit" className="w-full btn-primary flex items-center justify-center gap-3 text-lg py-5 shadow-2xl">
                      Send Message <Send size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto h-[450px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-inner">
          <div className="absolute inset-0 flex items-center justify-center flex-col text-gray-400 gap-4">
            <Globe size={64} strokeWidth={1} />
            <p className="font-bold text-xl">Interactive Map Coming Soon</p>
            <p className="text-sm">No. 001 Zoo Road Kano, Nigeria</p>
          </div>
          {/* In a real scenario, an iframe or map component would go here */}
          <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-200"></div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
