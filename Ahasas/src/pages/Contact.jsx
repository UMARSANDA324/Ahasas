import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = ({ isSection = false }) => {
  const [formState, setFormState] = useState('idle');
  const phoneNumber = "08038519889";
  const whatsappUrl = `https://wa.me/234${phoneNumber.substring(1)}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    setTimeout(() => setFormState('success'), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={isSection ? "" : "pt-24 min-h-screen bg-gray-50"}
    >
      {/* Header */}
      {!isSection && (
        <section className="bg-primary pt-32 pb-20 px-6 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="max-w-4xl mx-auto space-y-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold">Get In Touch</h1>
            <p className="text-xl text-white/70">Ready to start your next construction project? Our team is here to help you build the future.</p>
          </div>
        </section>
      )}

      {isSection && (
        <div className="text-center pt-24 pb-12">
          <span className="text-secondary font-bold tracking-[0.3em] uppercase mb-4 block">Contact Us</span>
          <h2 className="heading-lg text-primary">Start Your Project</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto"></div>
        </div>
      )}

      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-primary">Contact Information</h2>
                <p className="text-text-light text-lg">Our office is open for consultations. Feel free to reach out via phone, email, or visit our headquarters.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { 
                    icon: <Phone className="text-secondary" />, 
                    title: "Call Us", 
                    value: "08038519889", 
                    sub: "08124365032",
                    isLink: true,
                    link: "tel:08038519889"
                  },
                  { 
                    icon: <MessageCircle className="text-green-500" />, 
                    title: "WhatsApp", 
                    value: "Chat with us", 
                    sub: "Available 24/7",
                    isLink: true,
                    link: whatsappUrl,
                    highlight: true
                  },
                  { 
                    icon: <Mail className="text-secondary" />, 
                    title: "Email Us", 
                    value: "AHASAS@GMAIL.COM",
                    sub: "Official Inquiries",
                    isLink: true,
                    link: "mailto:AHASASCONSTRUCTIONVENTURESLTD@GMAIL.COM"
                  },
                  { 
                    icon: <MapPin className="text-secondary" />, 
                    title: "Visit Us", 
                    value: "No. 001 Zoo Road", 
                    sub: "Kano, Nigeria" 
                  },
                ].map((item, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-secondary transition-all group ${item.highlight ? 'ring-2 ring-green-100' : ''}`}>
                    <div className="mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    {item.isLink ? (
                      <a href={item.link} className="text-text-light hover:text-secondary transition-colors font-semibold block">{item.value}</a>
                    ) : (
                      <p className="text-text-light font-semibold">{item.value}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="text-secondary" /> Office Hours
                </h4>
                <div className="space-y-2 text-white/70">
                  <p className="flex justify-between border-b border-white/10 pb-2"><span>Monday - Friday</span> <span>8:00 AM - 5:00 PM</span></p>
                  <p className="flex justify-between border-b border-white/10 pb-2"><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></p>
                  <p className="flex justify-between pt-2"><span>Sunday</span> <span className="text-secondary font-bold">Closed</span></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative">
              <h3 className="text-2xl font-bold text-primary mb-8">Send us a message</h3>
              
              <AnimatePresence mode="wait">
                {formState === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20 space-y-6"
                  >
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-green-600">
                      <CheckCircle size={40} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-2xl font-bold text-primary">Message Sent!</h4>
                      <p className="text-text-light">Thank you for reaching out. We will get back to you within 24 hours.</p>
                    </div>
                    <button onClick={() => setFormState('idle')} className="btn-secondary">Send Another Message</button>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary uppercase">Your Name</label>
                        <input required type="text" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-secondary transition-colors" placeholder="Full Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary uppercase">Email Address</label>
                        <input required type="email" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-secondary transition-colors" placeholder="email@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary uppercase">Subject</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-secondary transition-colors" placeholder="How can we help?" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary uppercase">Message</label>
                      <textarea required rows="6" className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-secondary transition-colors" placeholder="Tell us about your project..."></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={formState === 'sending'}
                      className="w-full btn-primary py-4 flex items-center justify-center gap-2 text-lg disabled:opacity-50"
                    >
                      {formState === 'sending' ? (
                        <>Sending...</>
                      ) : (
                        <>Send Message <Send size={20} /></>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 grayscale">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15617.91032822557!2d8.536130421679688!3d11.969188099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae711736996613%3A0xe979116e0c609559!2sZoo%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          className="w-full h-full border-none"
          loading="lazy"
        ></iframe>
      </section>
    </motion.div>
  );
};

export default Contact;
