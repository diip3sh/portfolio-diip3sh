"use client";

import LetterGlitch from "@/components/animated-ui/letter-glitch";
import { HeroSection } from "@/components/section/hero";

export default function Home() {
  return (
    <LetterGlitch className="z-10 flex flex-1 flex-col items-center justify-center">
      <HeroSection />
    </LetterGlitch>
  );
}
