"use client";

import { Heatmap, LiquidMetal } from "@paper-design/shaders-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const SocialButton = ({
  children,
  onClickAction,
}: {
  children: React.ReactNode;
  onClickAction?: string;
}) => {
  return (
    <Link
      href={onClickAction ?? ""}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "px-4 py-2 text-xs tracking-normal rounded-full uppercase flex items-center justify-center gap-2 border border-border cursor-pointer touch-manipulation",
        "shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      )}
    >
      {children}
    </Link>
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

export const LiquidMetalButton = ({
  children,
  className,
  // onClickAction,
}: {
  children: React.ReactNode;
  className?: string;
  // onClickAction?: () => void;
}) => {
  return (
    <LiquidMetal
      colorBack="#f3f4f6"
      // colorTint="#ffffff"
      shape="none"
      repetition={2.5}
      softness={0.25}
      shiftRed={0.3}
      shiftBlue={0.3}
      distortion={0.1}
      contour={0.4}
      angle={90}
      speed={1}
      scale={1.5}
      fit="contain"
      className={cn(className, "touch-manipulation")}
      // onClick={onClickAction}
    >
      {children}
    </LiquidMetal>
  );
};
