"use client";

import { Moon, Sun } from "lucide-react";
import type { MotionValue } from "motion/react";
import dynamic from "next/dynamic";
import GlowingScrollIndicator from "../animated-ui/scroll-indicator";

// Dynamically import ModeToggle to avoid hydration mismatch
const ModeToggle = dynamic(
  () =>
    import("../animated-ui/mode-toggle").then((mod) => ({
      default: mod.ModeToggle,
    })),
  {
    ssr: false,
    loading: () => (
      <div className="relative flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
      </div>
    ),
  }
);

type FooterProps = {
  scrollYProgress: MotionValue<number>;
  scrollContainerId: string;
};

export const Footer = ({ scrollYProgress, scrollContainerId }: FooterProps) => (
  <div className="hidden md:block">
    <footer className="flex items-center justify-between gap-40">
      <GlowingScrollIndicator
        direction="horizontal"
        externalScrollProgress={scrollYProgress}
        scrollContainerId={scrollContainerId}
      />
      <div className="fixed right-4 bottom-4">
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm">Built with ❤️</span>
          <ModeToggle
            defaultValue="System"
            options={[
              {
                label: <Sun size={14} />,
                value: "light",
              },
              {
                label: <Moon size={14} />,
                value: "dark",
              },
            ]}
          />
        </div>
      </div>
    </footer>
  </div>
);
