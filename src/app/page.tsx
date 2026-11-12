import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import CareerSection from "@/components/CareerSection";
import BlogGalleriaSection from "@/components/BlogGalleriaSection";
import GemPresentationSection from "@/components/GemPresentationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <CareerSection />
        <BlogGalleriaSection />
        <GemPresentationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
