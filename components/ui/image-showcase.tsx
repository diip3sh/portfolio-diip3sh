"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageShowcaseProps = {
  image: string;
  alt: string;
};

export const ImageShowcase = ({ image, alt }: ImageShowcaseProps) => {
  return (
    <div className="h-[30dvh] w-full lg:w-[max(min(100vw - 56px, 720px), 1px)] rounded-lg flex items-center justify-center relative border border-border corner-squircle">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <Image
        src={image}
        alt={image}
        height={840}
        width={500}
        className={cn(
          "size-[8dvw] bg-background border border-border p-2.5 rounded-[14px] corner-squircle z-10",
          "shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]",
        )}
      />
    </div>
  );
};
