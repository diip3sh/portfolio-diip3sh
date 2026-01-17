"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageShowcaseProps = {
  image: string;
  alt: string;
};

export const ImageShowcase = ({ image, alt }: ImageShowcaseProps) => {
  return (
    <div className="h-[210px] w-full p-1.5 border border-border rounded-xl corner-squircle z-20 shadow-md shadow-border">
      <main className=" w-full h-full rounded-lg flex items-center justify-center relative border border-border corner-squircle">
        <div className="absolute inset-0 -z-10 h-full w-full bg-muted bg-[radial-gradient(var(--color-secondary-foreground)_1px,transparent_1px)] bg-size-[20px_20px]">
          <div className="flex items-center justify-center h-full w-full">
            <Image
              src={image}
              alt={alt}
              height={840}
              width={500}
              className={cn(
                "size-[8dvw] bg-background border border-border p-2.5 rounded-[14px] corner-squircle z-10",
                "shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]",
              )}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
