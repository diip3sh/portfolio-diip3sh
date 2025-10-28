"use client";

import { ThemeToggleButton } from "../animated-ui/theme-toggle";

export const Footer = () => (
  <div className="hidden md:block">
    <footer className="fixed bottom-5 left-5">
      <div className="">
        <div className="flex items-center justify-center gap-4">
          <ThemeToggleButton />
          <span className="text-sm">Built by mys3lf and cursor</span>
        </div>
      </div>
    </footer>
  </div>
);
