
// Main page layout, all sections combined
import SidebarNav from "@/components/Sidebar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ResumeDownload } from "@/components/ResumeDownload";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-white font-inter flex flex-col md:flex-row transition-colors duration-300">
      {/* Sidebar */}
      <div className="md:w-[260px] shrink-0 bg-background border-r border-border hidden md:block">
        <SidebarNav />
      </div>
      {/* Content */}
      <main className="flex-1 w-full px-2 md:px-8 pt-4 pb-16 mx-auto">
        <div className="max-w-5xl mx-auto">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <CertificationsSection />
          <ResumeDownload />
          <ContactSection />
        </div>
      </main>
      {/* Sidebar trigger (for shadcn, can be improved for mobile) */}
    </div>
  );
};

export default Index;
