"use client";

import LetterGlitch from "@/components/animated-ui/letter-glitch";
import { HeroSection } from "@/components/section/hero";

export default function Home() {
  return (
    <LetterGlitch className="z-10 flex h-full flex-1 items-center justify-center">
      <HeroSection />
    </LetterGlitch>
  );
}
