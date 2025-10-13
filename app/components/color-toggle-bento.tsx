"use client";

import { ArrowUp } from "lucide-react";
import { BentoCard } from "./BentoCard";

export function ColorToggleBento() {
  return (
    <BentoCard height="md:h-[304px] lg:h-[300px]">
      <div className="relative flex h-[80%] w-full items-center justify-center gap-4 rounded-[8px] border border-border-primary">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
      `,
            backgroundSize: "8px 8px, 32px 32px, 32px 32px",
          }}
        />
        {["H", "S", "L"].map((color, index) => (
          <div
            key={index}
            className="z-10 flex size-8 cursor-pointer items-center justify-center rounded-full border border-border-primary bg-white"
          >
            {color}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between pt-5">
        <h2 className="text-base font-medium uppercase tracking-wide">
          Pick a color
        </h2>
        <ArrowUp className="size-5" />
      </div>
    </BentoCard>
  );
}
