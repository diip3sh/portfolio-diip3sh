"use client";

import { ArrowUpRight } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { instrumentSerif } from "../ui/fonts";
import { HoverImageText } from "../ui/reveal-images";
import { VerticalCutReveal } from "../ui/vertical-cut-reveal";

export const HeroSection = () => (
  <div className="z-10 h-[90svh] w-[95svw]">
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <div className="flex flex-col">
        <VerticalCutReveal
          containerClassName={cn(
            instrumentSerif.className,
            "text-left font-bold text-[120px] italic leading-[1.1] tracking-tight"
          )}
          splitBy="characters"
          staggerDuration={0.05}
          staggerFrom="first"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
          }}
        >
          Design,
        </VerticalCutReveal>
        <HoverImageText
          images={[
            {
              src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
              alt: "Design tools and workspace",
            },
            {
              src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
              alt: "Creative design process",
            },
          ]}
        >
          <Link
            className="group flex items-center gap-2"
            href={"/craft" as Route}
          >
            <VerticalCutReveal
              containerClassName={cn(
                instrumentSerif.className,
                "text-left text-[120px] italic leading-[1] tracking-tight"
              )}
              splitBy="characters"
              staggerDuration={0.05}
              staggerFrom="center"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 0.3,
              }}
            >
              Craft
            </VerticalCutReveal>
            <ArrowUpRight className="block size-[120px] transition-all duration-250 ease-in-out" />
          </Link>
        </HoverImageText>
        <VerticalCutReveal
          containerClassName={cn(
            instrumentSerif.className,
            "text-right font-bold text-[120px] italic leading-[1.1] tracking-tight"
          )}
          splitBy="characters"
          staggerDuration={0.05}
          staggerFrom="last"
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25,
            delay: 0.6,
          }}
        >
          developer,
        </VerticalCutReveal>
        <HoverImageText
          images={[
            {
              src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
              alt: "Code and development workspace",
            },
            {
              src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
              alt: "Modern development environment",
            },
          ]}
        >
          <Link
            className="group flex items-center gap-2"
            href={"/work" as Route}
          >
            <VerticalCutReveal
              containerClassName={cn(
                instrumentSerif.className,
                "text-left text-[120px] italic leading-[1.1] tracking-tight underline"
              )}
              splitBy="characters"
              staggerDuration={0.05}
              staggerFrom="center"
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                delay: 0.9,
              }}
            >
              Work
            </VerticalCutReveal>
            <ArrowUpRight className="block size-[120px] transition-all duration-250 ease-in-out" />
          </Link>
        </HoverImageText>
      </div>
    </div>
  </div>
);
