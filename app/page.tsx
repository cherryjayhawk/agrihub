import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import { Hero } from "@/components/landing/Hero";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ImpactSection } from "@/components/landing/ImpactSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { CtaBand } from "@/components/landing/CtaBand";

export default function LandingPage() {
  return (
    <>
      {/* Navbar di layout.tsx juga bisa. Jika sudah di layout, hapus baris ini */}
      <Navbar />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <ImpactSection />
      <TestimonialsSection />
      <CtaBand />
      <Footer />  
    </>
  );
}
