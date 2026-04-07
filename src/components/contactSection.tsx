'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Copy,
  CheckCircle2,
} from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const contactMethods = [
    {
      id: 'email',
      label: 'Email',
      value: 'nukhaimongmarma834@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      link: 'mailto:nukhaimongmarma834@gmail.com',
      color: 'bg-blue-500/10 text-blue-400',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      value: '+880 1890-651384',
      icon: <MessageSquare className="w-5 h-5" />,
      link: 'https://wa.me/8801890651384',
      color: 'bg-emerald-500/10 text-emerald-400',
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+880 1890-651384',
      icon: <Phone className="w-5 h-5" />,
      link: 'tel:+8801890651384',
      color: 'bg-sky-500/10 text-sky-400',
    },
  ];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-28 text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text & Brand */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
              Let&apos;s Build <br />
              <span className="text-sky-500 italic">Something Great.</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-md mb-12">
              Whether you have a specific project in mind or just want to
              discuss system architecture, I&apos;m always open to new
              opportunities.
            </p>

            <div className="hidden lg:block relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/5 blur-[100px] rounded-full" />
              <div className="text-slate-700 font-mono text-sm rotate-90 origin-left mt-20 tracking-[0.5em] uppercase">
                Available Worldwide
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Cards */}
          <div className="space-y-4 relative">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex items-center justify-between p-6 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-2xl ${method.color}`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      {method.label}
                    </p>
                    <a
                      href={method.link}
                      className="text-lg font-semibold text-white hover:text-sky-400 transition-colors truncate block max-w-[200px] md:max-w-none"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleCopy(method.value, method.id)}
                    className="p-3 rounded-xl bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                    title="Copy to clipboard"
                  >
                    {copied === method.id ? (
                      <CheckCircle2 size={18} className="text-emerald-400" />
                    ) : (
                      <Copy size={18} />
                    )}
                  </button>
                  <a
                    href={method.link}
                    target={method.id === 'whatsapp' ? '_blank' : '_self'}
                    className="p-3 rounded-xl bg-sky-600 text-white hover:bg-sky-500 transition-all shadow-lg shadow-sky-900/20"
                  >
                    <Send size={18} />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Decorative element for the card stack */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-sky-500/5 blur-[120px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
