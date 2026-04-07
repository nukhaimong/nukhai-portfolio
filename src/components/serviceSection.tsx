'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Code2, Globe } from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: 'Frontend Development',
    description:
      'Crafting high-performance web applications using Next.js and TypeScript, integrated with GSAP and Framer Motion for premium animations.',
    icon: <Layout className="w-8 h-8 text-sky-400" />,
  },
  {
    title: 'Backend Development',
    description:
      'Developing secure server-side logic and scalable database schemas using Node.js, Prisma ORM, and PostgreSQL.',
    icon: <Server className="w-8 h-8 text-emerald-400" />,
  },
  {
    title: 'API Development',
    description:
      'Designing and documenting robust REST APIs to ensure seamless, secure communication between client-side and server-side systems.',
    icon: <Code2 className="w-8 h-8 text-indigo-400" />,
  },
  {
    title: 'Full Stack Development',
    description:
      'Building complete, end-to-end digital products like LMS and food delivery platforms from architecture to deployment.',
    icon: <Globe className="w-8 h-8 text-rose-400" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Leveraging modern technologies to build scalable, high-performance
            web applications.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-sky-500/50 transition-colors duration-300 group overflow-hidden"
            >
              {/* Subtle gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="mb-6 inline-block p-3 rounded-xl bg-slate-800 group-hover:bg-slate-700 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
