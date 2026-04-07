'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
  children,
  options = {},
}: {
  children: React.ReactNode;
  options?: {
    lerp?: number;
    duration?: number;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    syncTouch?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
  };
}) {
  const lenis = useLenis();

  // ✅ Optimized settings (smooth but NOT lazy)
  const defaultOptions = {
    lerp: 0.12, // balance between smooth & responsive
    duration: 0.6, // lower = less delay
    smoothWheel: true,
    smoothTouch: true,
    syncTouch: false,
    wheelMultiplier: 1,
    touchMultiplier: 1,
    infinite: false,
    orientation: 'vertical' as const,
    gestureOrientation: 'vertical' as const,
    ...options,
  };

  useEffect(() => {
    if (!lenis) return;

    // Sync Lenis with ScrollTrigger
    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
      lenis.off('scroll', ScrollTrigger.update);
    };
  }, [lenis]);

  return (
    <ReactLenis root options={defaultOptions}>
      {children}
    </ReactLenis>
  );
}
