import { Hero } from "@/components/hero";
import { Navigation } from "@/components/navigation";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { CasesSection } from "@/components/cases-section";
import { StoriesSection } from "@/components/stories-section";
import { HighlightsSection } from "@/components/highlights-section";
import { EducationSection } from "@/components/education-section";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <CasesSection />
      <StoriesSection />
      <HighlightsSection />
      <EducationSection />
      <ScrollToTop />

      {/* Final Contact Footer */}
      <footer className="py-24 px-6 text-center border-t border-foreground/5 bg-foreground/5">
        <p className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-4">
          Get in Touch
        </p>
        <a
          href="mailto:hello@sophiepetrova.com"
          className="text-2xl md:text-4xl font-display hover:opacity-50 transition-opacity uppercase"
        >
          hello@sophiepetrova.com
        </a>
        <div className="mt-12 flex justify-center gap-8 text-xs tracking-widest opacity-60 uppercase">
          <a href="#">Instagram</a>
          <a href="#">Telegram</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
