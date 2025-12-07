"use client";

import { ArrowUpRight, Eye } from "lucide-react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import type { Route } from "next";
import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  text: string;
  href: string;
  target?: "_self" | "_blank" | "_parent" | "_top";
  className?: string;
  icon?: React.ReactNode;
  accent?: string;
};

export const NavigationButton = ({
  href,
  text = "Open",
  icon,
  target = "_blank",
  className = "",
  accent = "",
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const variants = {
    initial: (direction: number) => ({
      x: -16 * direction,
      scale: 0.9,
      filter: "blur(3px)",
      opacity: 0,
    }),
    animate: {
      x: 0,
      scale: 1,
      filter: "blur(0px)",
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: -16 * direction,
      scale: 0.9,
      filter: "blur(3px)",
      opacity: 0,
    }),
  };

  return (
    <div className="flex items-start">
      <Link href={href as Route} target={target}>
        <button
          className={cn(
            "flex cursor-pointer items-center gap-1 px-1 py-1 font-medium outline-none",
            className
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          type="button"
        >
          <MotionConfig transition={{ duration: 0.2, ease: "easeOut" }}>
            <AnimatePresence initial={false} mode="popLayout">
              {!hovered && (
                <motion.span
                  animate="animate"
                  className="flex h-4 w-4 items-center justify-center"
                  custom={1}
                  exit="exit"
                  initial="initial"
                  key={`eye-btn-${text}`}
                  variants={variants}
                >
                  {icon ? icon : <Eye size={14} />}
                </motion.span>
              )}
              <motion.p
                className={cn(
                  "whitespace-nowrap text-sm",
                  hovered && "underline underline-offset-2",
                  hovered && accent
                )}
                layout
              >
                {text}
              </motion.p>
              {hovered && (
                <motion.span
                  animate="animate"
                  className="flex h-4 w-4 items-center justify-center"
                  custom={-1}
                  exit="exit"
                  initial="initial"
                  key={`arrow-btn-${text}`}
                  variants={variants}
                >
                  <ArrowUpRight
                    className={cn(
                      "size-[clamp(16px,4.347vw,120px)]",
                      hovered && accent
                    )}
                    strokeWidth={2.5}
                  />
                </motion.span>
              )}
            </AnimatePresence>
          </MotionConfig>
        </button>
      </Link>
    </div>
  );
};
