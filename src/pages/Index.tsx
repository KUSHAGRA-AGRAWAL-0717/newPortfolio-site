import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Ambient background glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/6 blur-[150px] rounded-full" />
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] bg-accent/4 blur-[150px] rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-[25%] h-[25%] bg-primary/3 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
        <FooterSection />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Index;
