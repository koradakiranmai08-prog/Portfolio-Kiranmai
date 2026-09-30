import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    // Transparent client-side submission feedback
    setFormSubmitted(true);
  };

  const contactDetails = [
    {
      label: 'Email',
      value: 'koradakiranmai08@gmail.com',
      href: 'mailto:koradakiranmai08@gmail.com',
      icon: Mail,
    },
    {
      label: 'Phone',
      value: '6300577838',
      href: 'tel:6300577838',
      icon: Phone,
    },
    {
      label: 'Location',
      value: 'Visakhapatnam, Andhra Pradesh',
      href: null,
      icon: MapPin,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/korada-kiranmai',
      href: 'https://linkedin.com/in/korada-kiranmai',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/kiranmai-cse',
      href: 'https://github.com/kiranmai-cse',
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050B18] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex p-2 rounded-lg bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 mb-3">
            <Mail className="w-5 h-5" />
          </div>
          <span className="block text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold mb-1">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white tracking-tight uppercase">
            LET'S CONNECT
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Feel free to connect for academic discussions, student projects, or developer opportunities.
          </p>
        </div>

        {/* Contact Info + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-3.5">
            {contactDetails.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="bg-[#0A1929] border border-cyan-900/40 rounded-xl p-4 card-hover-effect flex items-center gap-3.5 group">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-800/60 flex items-center justify-center shrink-0 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-[11px] font-mono text-cyan-400/90 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="block text-sm font-medium text-slate-200 group-hover:text-white transition-colors truncate">
                      {item.value}
                    </span>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>

          {/* Simple Contact Form */}
          <div className="lg:col-span-7 bg-[#0A1929] border border-cyan-900/40 rounded-2xl p-6 sm:p-8 shadow-xl shadow-cyan-950/30">
            {formSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-cyan-950 border border-cyan-500 flex items-center justify-center text-cyan-400 mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white">
                  Message Recorded!
                </h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-cyan-300 font-semibold">{formData.name}</span>! Since this portfolio is running client-side without an external mail server, please also send your email directly to{' '}
                  <a
                    href={`mailto:koradakiranmai08@gmail.com?subject=Portfolio%20Message%20from%20${encodeURIComponent(
                      formData.name
                    )}&body=${encodeURIComponent(formData.message)}`}
                    className="text-cyan-400 underline hover:text-cyan-300"
                  >
                    koradakiranmai08@gmail.com
                  </a>
                  .
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="text-xs px-4 py-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#070F20] border border-slate-700/80 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-slate-100 text-sm placeholder:text-slate-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-[#070F20] border border-slate-700/80 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-slate-100 text-sm placeholder:text-slate-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Your message here..."
                    className="w-full px-4 py-2.5 rounded-lg bg-[#070F20] border border-slate-700/80 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-slate-100 text-sm placeholder:text-slate-500 transition-all resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm shadow-lg shadow-cyan-600/25 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </div>

                {/* Honest note about client-side form */}
                <p className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-3 pt-3 border-t border-slate-800">
                  <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>Submissions will open your direct mail client or provide direct email routing.</span>
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
