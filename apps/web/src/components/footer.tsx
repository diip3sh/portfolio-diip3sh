"use client";

import { Moon, Sun } from "lucide-react";
import type { MotionValue } from "motion/react";
import { ModeToggle } from "./mode-toggle";
import GlowingScrollIndicator from "./scroll-indicator";

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
