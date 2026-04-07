'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap,
  Database,
  ShieldCheck,
  Music,
  Trophy,
  Users,
  Heart,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const AboutSection = () => {
  const hobbies = [
    { name: 'Football', icon: <Trophy className="w-4 h-4 text-emerald-400" /> },
    { name: 'Athletics', icon: <Heart className="w-4 h-4 text-rose-400" /> },
    { name: 'Guitar', icon: <Music className="w-4 h-4 text-purple-400" /> },
    {
      name: 'Cultural Heritage',
      icon: <Sparkles className="w-4 h-4 text-sky-400" />,
    },
  ];

  return (
    <section id="about" className="py-28 text-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* LEFT: The Technical Persona (7 Columns) */}
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
                Engineering with{' '}
                <span className="text-sky-500 italic">Autonomy.</span>
              </h2>

              <div className="space-y-6 text-slate-400 text-lg md:text-xl leading-relaxed font-light">
                <p>
                  As a{' '}
                  <span className="text-white font-medium">
                    Self-Taught Developer
                  </span>
                  , I built my foundation on discipline and a "logic-first"
                  mindset. Without a traditional classroom roadmap, I learned to
                  navigate complex documentation and industry standards to build
                  production-grade systems from scratch.
                </p>
                <p>
                  My focus is on **operational efficiency**. I specialize in
                  designing type-safe **RESTful architectures** and optimizing
                  **database queries** to ensure low-latency performance.
                  Whether it's implementing complex middleware for role-based
                  security or managing deep relational data with **Prisma**, I
                  prioritize clean, maintainable logic over quick fixes.
                </p>
              </div>
            </motion.div>

            {/* Efficiency Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <Zap size={18} />,
                  title: 'API Speed',
                  desc: 'Optimized Endpoints',
                },
                {
                  icon: <Database size={18} />,
                  title: 'Data Integrity',
                  desc: 'Complex Indexing',
                },
                {
                  icon: <ShieldCheck size={18} />,
                  title: 'Security',
                  desc: 'Granular RBAC',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/50"
                >
                  <div className="text-sky-500 mb-2">{item.icon}</div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Leadership & Heritage (5 Columns) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Leadership Identity Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 p-10 rounded-[2.5rem] border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-8 w-1 bg-sky-500 rounded-full" />
                  <h4 className="font-bold text-sky-500 uppercase text-[10px] tracking-[0.3em]">
                    Leadership & Advocacy
                  </h4>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Rendezvous Shilpigosthi
                    </h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                      Currently serving as{' '}
                      <span className="text-white font-semibold">
                        Vice President
                      </span>{' '}
                      (Former General Secretary) of this Indigenous cultural
                      organization.
                    </p>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed italic border-l border-slate-800 pl-4">
                    "Dedicated to preserving the diverse heritage and indigenous
                    cultures of Bangladesh through community engagement and
                    student leadership."
                  </p>
                </div>

                <hr className="my-8 border-slate-800" />

                <h4 className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-6">
                  Lifestyle
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {hobbies.map((hobby) => (
                    <div
                      key={hobby.name}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-800/50"
                    >
                      {hobby.icon}
                      <span className="text-[11px] font-medium text-slate-300">
                        {hobby.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle background glow for the card */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-sky-500/10 blur-[80px] rounded-full pointer-events-none" />
            </motion.div>

            {/* Core Values Tagline */}
            <div className="px-6">
              <p className="text-slate-500 text-sm flex items-center gap-3">
                <ChevronRight size={14} className="text-sky-500" />
                <span>
                  Balancing high-performance code with cultural preservation.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
