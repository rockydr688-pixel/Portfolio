import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationAchievementsSection } from "@/components/EducationAchievementsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { PhotographySection } from "@/components/PhotographySection";
import { HobbyProjectsSection } from "@/components/HobbyProjectsSection";
import { SpotifySection } from "@/components/SpotifySection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] selection:bg-white selection:text-black">
      {/* Top Header Navigation */}
      <Navbar />

      <main className="flex flex-col w-full">
        {/* Stage 1: Striking 3D Hero Section */}
        <HeroSection />

        {/* Stage 2: About Me & Engineering Foundation */}
        <AboutSection />

        {/* Stage 2: Grouped Technical Skills */}
        <SkillsSection />

        {/* Stage 2: Education, Certifications & Achievements */}
        <EducationAchievementsSection />

        {/* Stage 3: Technical Case Studies & Project Showcase */}
        <ProjectsSection />

        {/* Stage 4: Photography Gallery & Curatorial Statement */}
        <PhotographySection />

        {/* Stage 4: Hobby & Creative Coding Projects */}
        <HobbyProjectsSection />

        {/* Stage 4: Spotify Music & Acoustic Focus */}
        <SpotifySection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
