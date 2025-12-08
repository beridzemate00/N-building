import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

import { HeroSection } from "../components/sections/Hero/HeroSection";
import { ServicesSection } from "../components/sections/Services/ServicesSection";
import { ProjectsSection } from "../components/sections/Projects/ProjectsSection";
import { AboutSection } from "../components/sections/About/AboutSection";
import { ProcessSection } from "../components/sections/Process/ProcessSection";
import { ContactSection } from "../components/sections/Contact/ContactSection";

export default function HomePage() {
  return (
    <>
      {/* Soft blue-white background atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-32 -top-40 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="absolute right-[-120px] top-24 h-[28rem] w-[28rem] rounded-full bg-brand-50 blur-3xl" />
        <div className="absolute bottom-[-200px] left-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-100/50 blur-3xl" />
      </div>

      <Header />

      <main>
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
