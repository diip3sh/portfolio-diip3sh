import Image from "next/image";
import { BentoCard } from "./BentoCard";
import { PixelatedCanvas } from "./pixaleted-canvas";

export function AboutMeBento({
  linkTo,
  className,
}: {
  linkTo?: string;
  className?: string;
}) {
  return (
    <BentoCard className={className} height="h-full" linkTo={linkTo}>
      <div className="flex h-full flex-col">
        <div className="relative flex flex-1 items-center justify-center gap-4 rounded-[8px] border border-border-primary">
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
        </div>
        <div className="mt-5">About Me</div>
      </div>
    </BentoCard>
  );
}
