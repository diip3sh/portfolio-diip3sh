"use client";

import type { Route } from "next";
import Link from "next/link";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => (
  <header className="fixed relative top-2.5 z-50 w-full px-1.5">
    <div className="relative flex items-center justify-between font-serif text-primary italic tracking-tighter">
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
      <p className="relative pr-2 text-[37px] italic leading-[38px]">{title}</p>
    </div>
  </header>
);
