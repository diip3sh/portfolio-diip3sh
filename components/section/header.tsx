"use client";

import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { instrumentSerif } from "../ui/fonts";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => (
  <header className="fixed top-0 z-50 w-full">
    <div
      className={cn(
        "relative mx-auto flex max-w-7xl items-center justify-between py-5 text-primary tracking-tighter",
        instrumentSerif.className,
        "italic"
      )}
    >
      <Link href={"/" as Route} prefetch={true}>
        <h1 className="relative font-normal text-[37px] italic leading-[38px]">
          (index.)
          <span
            aria-hidden="true"
            className="absolute inset-0 font-normal text-[37px] italic leading-[38px]"
          >
            (index.)
          </span>
        </h1>
      </Link>
      <p className="relative text-[37px] italic leading-[38px]">
        {title} - by dip3sh
      </p>
    </div>
  </header>
);
