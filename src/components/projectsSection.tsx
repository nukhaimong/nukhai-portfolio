'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Rocket, Layers } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  challenge: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Jekono LMS Platform',
    category: 'Full Stack Development',
    description:
      'A comprehensive learning system with role-based access for Instructors, Learners, and Admins. Features Stripe payments and automated PDF invoicing.',
    challenge:
      "Implemented an 'order_index' logic (100, 200, 300) to allow seamless insertion of modules and lectures between existing ones.",
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Better-Auth'],
    image: '/images/lms.png',
    github: 'https://github.com/nukhaimong/learning_management_system_frontend',
    live: 'https://learning-management-system-frontend-azure.vercel.app',
  },
  {
    id: 2,
    title: 'Food Delivery App',
    category: 'Full Stack Development',
    description:
      'A multi-vendor platform where customers order from various restaurants. Features dedicated dashboards for Providers and Admins.',
    challenge:
      'Engineered a granular order schema that creates separate entries per food item to handle deliveries from different restaurants efficiently.',
    tech: ['Express.js', 'Node.js', 'Zustand', 'Next.js', 'Prisma'],
    image: '/images/food-delivery-app.png',
    github: 'https://github.com/nukhaimong/food-delivery-app-frontend',
    live: 'https://food-delivery-app-frontend-umber.vercel.app/',
  },
  {
    id: 3,
    title: 'Nike Landing Page',
    category: 'Frontend Development',
    description:
      'A high-performance, responsive landing page focused on modern UI/UX and smooth transitions.',
    challenge:
      'Focused on pixel-perfect recreation and optimized asset loading using React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    image: '/images/nike-landing-page.png',
    github:
      'https://github.com/nukhaimong/tailwind-css-project--nike-landing-page',
    live: 'https://tailwind-css-project-nike-landing-p.vercel.app',
  },
];

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-sky-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* FIXED LINKS LAYER: Always accessible above the hover detail */}
              <div className="absolute top-6 right-6 z-30 flex gap-2">
                <motion.a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-slate-800 rounded-full flex items-center gap-2 hover:bg-slate-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  title="View Source on GitHub"
                >
                  <SiGithub
                    size={16}
                    className="text-slate-400 group-hover:text-white"
                  />
                  <span className="text-xs font-bold text-slate-300">
                    View Code
                  </span>
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-slate-800 rounded-full flex items-center gap-2 hover:bg-slate-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  title="Live Demo"
                >
                  <ExternalLink
                    size={16}
                    className="text-slate-400 group-hover:text-white"
                  />
                  <span className="text-xs font-bold text-slate-300">
                    Live Demo
                  </span>
                </motion.a>
              </div>

              {/* Project Image Container */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Main Card Content (Partially Hidden on Hover) */}
              <motion.div
                className="p-7"
                animate={{ opacity: hoveredId === project.id ? 0.3 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="mb-4">
                  <span className="text-sky-400 text-[10px] font-black uppercase tracking-[0.2em]">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mt-1 tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Purely Informational Hover Overlay */}
              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 z-20 bg-slate-950/95 p-10 flex flex-col justify-center backdrop-blur-md border border-sky-500/20 rounded-3xl"
                  >
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sky-400 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
                          <Rocket size={14} /> The Challenge
                        </h4>
                        <p className="text-sm text-slate-200 leading-relaxed font-medium italic">
                          "{project.challenge}"
                        </p>
                      </div>

                      <div>
                        <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2 text-xs uppercase tracking-widest">
                          <Layers size={14} /> System Overview
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
