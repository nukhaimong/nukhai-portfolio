'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ArrowDown, FileText, Target } from 'lucide-react';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-content > *', {
        opacity: 0,
        y: 40,
        duration: 1.2,
        stagger: 0.15,
        delay: 0.3,
      }).from(
        '.hero-image-wrapper',
        {
          opacity: 0,
          scale: 0.8,
          rotation: -5,
          duration: 1.5,
          ease: 'expo.out',
        },
        '-=1',
      );

      // Constant Floating Animation
      gsap.to('.hero-image-wrapper', {
        y: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Parallax on Scroll
      gsap.to('.hero-image-wrapper', {
        y: -80,
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  const socialLinks = [
    {
      name: 'Github',
      href: 'https://github.com/nukhaimong',
      path: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nu-khai-mong-marma/',
      path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z',
    },
  ];

  return (
    <section
      id="home"
      ref={container}
      className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content flex flex-col items-start text-left">
            <div className="inline-block py-1 px-3 rounded-full bg-sky-500/10 border border-sky-500/20 mb-6">
              <span className="text-sky-400 font-mono text-xs uppercase tracking-widest">
                Available for Hire
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              I&apos;m <span className="text-sky-500">Nu Khai</span>
              <br />
              <span className="text-slate-500/50">Mong Marma.</span>
            </h1>

            <p className="max-w-md text-slate-400 text-lg md:text-xl leading-relaxed mb-10">
              A{' '}
              <span className="text-white font-medium">
                Full Stack Web Developer
              </span>{' '}
              dedicated to crafting high-performance applications and seamless
              digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <motion.a
                href="https://drive.google.com/file/d/14TT0nAjTEiJvxZn6zYdvbGou0HPLxcOV/view?usp=sharing"
                target="_blank"
              >
                <button className="group relative flex items-center gap-3 bg-white text-slate-950 px-10 py-5 rounded-2xl font-bold text-sm uppercase tracking-widest hover:bg-sky-500 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  <FileText
                    size={18}
                    className="group-hover:rotate-12 transition-transform"
                  />
                  Download Resume
                </button>
              </motion.a>

              <div className="flex gap-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    whileHover={{ y: -4, color: '#38bdf8' }}
                    className="text-slate-600 transition-colors"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d={social.path} />
                    </svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="hero-image-wrapper relative w-80 h-80 md:w-[500px] md:h-[500px]">
              {/* Intensified Glow */}
              <div className="absolute inset-0 rounded-full bg-sky-600/20 blur-[100px] scale-125 animate-pulse" />

              {/* Main Image Frame */}
              <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform -rotate-2 hover:rotate-0 transition-all duration-1000 ease-expo">
                <Image
                  src="/images/nu_khai.png"
                  alt="Nu Khai Mong Marma"
                  fill
                  className="object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                  priority
                />
                {/* Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              </div>

              {/* Status Indicator */}
              <div className="absolute top-10 -left-10 bg-slate-900/80 backdrop-blur-md border border-slate-700 p-4 rounded-2xl rotate-[-10deg] hidden md:block">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                  <span className="text-white text-xs font-bold uppercase tracking-tight">
                    Open to Work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 rotate-90 mb-4">
            Scroll
          </span>
          <ArrowDown size={16} className="text-white animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
