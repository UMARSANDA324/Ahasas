import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = ({ isSection = false }) => {
  const form = useRef();
  const [formState, setFormState] = useState('idle'); // idle, sending, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    phone: '',
    subject: '',
    message: ''
  });

  const phoneNumber = "08038519889";
  const whatsappUrl = `https://wa.me/234${phoneNumber.substring(1)}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');
    setErrorMessage('');

    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.from_name,
          reply_to: formData.reply_to,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setFormState('success');
        setFormData({
          from_name: '',
          reply_to: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormState('error');
      setErrorMessage(error.text || 'Something went wrong. Please try again later.');
    }
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
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">Get In Touch</h1>
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Phone size={24} />,
                    title: "Call Us",
                    value: "08038519889",
                    sub: "08124365032",
                    isLink: true,
                    link: "tel:08038519889"
                  },
                  {
                    icon: <MessageCircle size={24} />,
                    title: "WhatsApp",
                    value: "Chat with us",
                    sub: "Available 24/7",
                    isLink: true,
                    link: whatsappUrl,
                    highlight: true
                  },
                  {
                    icon: <Mail size={24} />,
                    title: "Email Us",
                    value: "AHASASCONSTRUCTIONVENTURESLTD@GMAIL.COM",
                    sub: "Official Inquiries",
                    isLink: true,
                    link: "mailto:AHASASCONSTRUCTIONVENTURESLTD@GMAIL.COM"
                  },
                  {
                    icon: <MapPin size={24} />,
                    title: "Visit Us",
                    value: "No. 001 Zoo Road",
                    sub: "Kano, Nigeria"
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`group relative p-8 rounded-3xl bg-white border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${item.highlight ? 'ring-2 ring-[#F59E0B]/20' : ''}`}
                  >
                    {/* Hover Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white group-hover:from-slate-100 group-hover:to-slate-50 transition-colors duration-500"></div>

                    {/* Content Container */}
                    <div className="relative z-10 space-y-4">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${item.highlight ? 'bg-[#F59E0B] text-white shadow-lg shadow-[#F59E0B]/20' : 'bg-[#0F172A] text-[#F59E0B] group-hover:bg-[#F59E0B] group-hover:text-white'}`}>
                        {item.icon}
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest">{item.title}</h4>
                        {item.isLink ? (
                          <a href={item.link} className="text-lg font-black text-[#0F172A] hover:text-[#F59E0B] transition-colors block break-all leading-tight">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg font-black text-[#0F172A] leading-tight">
                            {item.value}
                          </p>
                        )}
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.sub}</p>
                      </div>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#F59E0B] transition-all duration-500"></div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
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
                    key="success"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    className="text-center py-20 space-y-6"
                  >
                    <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-inner">
                      <CheckCircle size={48} />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-3xl font-bold text-primary">Message Sent!</h4>
                      <p className="text-text-light text-lg">Thank you for reaching out. We have received your message and will get back to you within 24 hours.</p>
                    </div>
                    <button
                      onClick={() => setFormState('idle')}
                      className="btn-secondary px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-secondary/20 transition-all"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {formState === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-600"
                      >
                        <AlertCircle size={20} />
                        <p className="text-sm font-medium">{errorMessage}</p>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Your Name</label>
                        <input
                          required
                          name="from_name"
                          value={formData.from_name}
                          onChange={handleChange}
                          type="text"
                          className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Email Address</label>
                        <input
                          required
                          name="reply_to"
                          value={formData.reply_to}
                          onChange={handleChange}
                          type="email"
                          className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Phone Number</label>
                        <input
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          type="tel"
                          className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                          placeholder="+234 ..."
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-primary uppercase tracking-wider">Subject</label>
                        <input
                          required
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          type="text"
                          className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
                          placeholder="Project Inquiry"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-primary uppercase tracking-wider">Message</label>
                      <textarea
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all resize-none"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full btn-primary py-4 flex items-center justify-center gap-3 text-lg font-bold disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                      {formState === 'sending' ? (
                        <>
                          <Loader2 className="animate-spin" size={24} />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[450px] w-full relative group">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none z-10"></div>

        {/* Map Fallback/Direct Link Overlay */}
        <div className="absolute top-4 right-4 z-20">
          <a
            href="https://maps.google.com/?q=Zoo+Rd,Kano,Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2 text-primary font-bold text-sm hover:bg-white transition-all"
          >
            <MapPin size={16} className="text-secondary" />
            View on Google Maps
          </a>
        </div>

        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15617.91032822557!2d8.536130421679688!3d11.969188099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae711736996613%3A0xe979116e0c609559!2sZoo%20Rd%2C%20Kano!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          className="w-full h-full border-none grayscale hover:grayscale-0 transition-all duration-700"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </motion.div>
  );
};

export default Contact;

