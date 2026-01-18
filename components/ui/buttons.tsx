"use client";

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
