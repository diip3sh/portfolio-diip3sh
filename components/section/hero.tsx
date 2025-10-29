"use client";

import { ArrowUpRight } from "lucide-react";
import type { Route } from "next";
import Link from "next/link";

export const HeroSection = () => (
  <div className="z-10 h-[90svh] w-[95svw]">
    <div className="flex h-full w-full flex-col items-center justify-center gap-10 leading-none">
      <div className="flex flex-col">
        <span className="text-right font-bold text-[120px]">Design</span>
        <Link href={"/craft" as Route}>
          <span className="group flex gap-2 text-left font-bold text-[120px] underline">
            Craft
            <ArrowUpRight className="hidden size-[120px] transition-all duration-250 ease-in-out group-hover:block" />
          </span>
        </Link>
        <span className="text-right font-bold text-[120px]">developer</span>
        <Link href={"/work" as Route}>
          <span className="group flex gap-2 text-left font-bold text-[120px] underline">
            Work
            <ArrowUpRight className="hidden size-[120px] transition-all duration-250 ease-in-out group-hover:block" />
          </span>
        </Link>
      </div>

      <div className="text-right">
        <p>by dip3sh</p>
      </div>
    </div>
  </div>
);
