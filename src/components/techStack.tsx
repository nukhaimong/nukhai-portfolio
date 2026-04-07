'use client';

import { motion, Variants } from 'framer-motion';

const technologies = [
  {
    name: 'HTML',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  },
  {
    name: 'Tailwind',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
  },
  {
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Node.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'Express',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg',
    darkIcon: true,
  },
  {
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
  },
  {
    name: 'Prisma',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
    darkIcon: true,
  },
  {
    name: 'MongoDB',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Docker',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
  },
];

// Container animation (stagger)
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Card animation
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const TechStack = () => {
  return (
    <section
      id="stack"
      className="relative py-24 px-8 min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-sky-500 uppercase tracking-[0.5em] mb-4">
            Technical Arsenal
          </h2>
          <h3 className="text-5xl md:text-7xl font-black text-white leading-tight">
            The Stack Behind <br />
            <span className="text-slate-500">The Solutions.</span>
          </h3>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col items-center justify-center gap-4 backdrop-blur-md transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`w-full h-full object-contain transition duration-500 ${
                    tech.darkIcon
                      ? 'brightness-0 invert group-hover:brightness-100 group-hover:invert-0 group-hover:drop-shadow-[0_0_8px_#38bdf8]'
                      : 'grayscale group-hover:grayscale-0'
                  }`}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://www.svgrepo.com/show/354313/settings.svg';
                  }}
                />
              </div>

              {/* Name */}
              <p className="text-xs font-bold tracking-widest text-white/70 group-hover:text-white transition">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-sky-500/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

export default TechStack;
