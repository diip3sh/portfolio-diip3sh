"use client";

import { Heatmap } from "@paper-design/shaders-react";
import { cn } from "@/lib/utils";

export const SocialButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      className={cn(
        "px-4 py-2 text-xs tracking-normal rounded-full uppercase flex items-center justify-center gap-2 border border-border cursor-pointer touch-manipulation",
        "shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      {children}
    </button>
  );
};

export const HeatMapButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Heatmap
      image="/rectangle.svg"
      colors={["#e6e6e6", "#ff6a00"]}
      colorBack="#1c1c1c"
      contour={0.5}
      angle={72}
      noise={0}
      innerGlow={0.57}
      outerGlow={0}
      speed={1}
      scale={3}
      className={cn(className, "touch-manipulation")}
    >
      {children}
    </Heatmap>
  );
};
