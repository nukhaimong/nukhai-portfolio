import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/ui/layout/navbar';
import SmoothScroll from '@/components/smothscroll';
import Footer from '@/components/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Nu Khai | Full Stack Developer',
  description:
    'Modern full-stack portfolio built with Next.js, GSAP, and Framer Motion',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark antialiased`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="bg-[#020617] text-slate-200 selection:bg-sky-500/30 selection:text-sky-200 overflow-x-hidden">
        {/* 1. FIXED BACKGROUND MESH (Outside SmoothScroll)
            This stays static while the page content slides over it. 
            This prevents GSAP calculation errors. */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[#020617] pointer-events-none">
          {/* Top Right Glow */}
          <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-indigo-500/10 blur-[130px] rounded-full opacity-50" />

          {/* Bottom Left Glow */}
          <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-sky-500/10 blur-[130px] rounded-full opacity-50" />

          {/* Subtle Engineering Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        {/* 2. NAVIGATION (Fixed usually sits better outside the scroll container) */}
        <Navbar />

        {/* 3. SMOOTH SCROLL WRAPPER 
            Only wraps the main content that needs physics-based scrolling. */}
        <SmoothScroll>
          <main className="relative flex flex-col min-h-screen">
            {children}
            <Footer />
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
