"use client";

import { useRive } from "@rive-app/react-canvas";
import { BentoCard } from "./BentoCard";
import { FloatingDock } from "./animations/dock";
import { Home, SectionIcon, SquaresExclude, Terminal } from "lucide-react";

export function AnimatedIllustrationBento() {
  return (
    <BentoCard height="h-[300px]">
      <FloatingDock items={links} />
    </BentoCard>
  );
}

const links = [
  {
    title: "Home",
    icon: (
      <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Products",
    icon: (
      <Terminal className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Components",
    icon: (
      <SectionIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Aceternity UI",
    icon: (
      <img
        src="https://assets.aceternity.com/logo-dark.png"
        width={20}
        height={20}
        alt="Aceternity Logo"
      />
    ),
    href: "#",
  },
  {
    title: "Changelog",
    icon: (
      <SquaresExclude className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
];
