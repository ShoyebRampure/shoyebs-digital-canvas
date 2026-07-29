import {HeroSection} from "@/components/HeroSection"; // default export ✅
import InternshipSection from "@/components/InternshipSection"; // default export ✅
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ResumeDownload } from "@/components/ResumeDownload";
import { ContactSection } from "@/components/ContactSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))] font-inter flex flex-col transition-colors duration-300 w-full overflow-x-hidden">
      <main className="flex-1 w-full px-0 pt-6 pb-16">
        <div className="w-full mx-auto max-w-full">
          <HeroSection />
          <AboutSection />
          <InternshipSection />
          <ProjectsSection />
          <SkillsSection />
          <AchievementsSection />
          <CertificationsSection />
          <ResumeDownload />
          <ContactSection />
        </div>
      </main>
    </div>
  )
};

export default Index;