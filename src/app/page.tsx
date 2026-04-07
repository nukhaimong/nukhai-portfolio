import AboutSection from '@/components/aboutSection';
import ContactSection from '@/components/contactSection';
import Hero from '@/components/hero';
import ProjectsSection from '@/components/projectsSection';
import ServicesSection from '@/components/serviceSection';
import TechStack from '@/components/techStack';

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
