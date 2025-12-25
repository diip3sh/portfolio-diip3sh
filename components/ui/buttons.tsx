"use client";

import { cn } from "@/lib/utils";

export const SocialButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="button"
      className={cn(
        "px-4 py-2 text-xs tracking-normal rounded-full uppercase flex items-center justify-center gap-2 border border-border cursor-pointer",
        "shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)]",
      )}
    >
      {children}
    </button>
  );
};
