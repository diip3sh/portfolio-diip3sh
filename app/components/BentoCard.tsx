"use client";

import React from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import type { HTMLMotionProps, Variants } from "motion/react";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import ClickSpark from "./animations/click-spark";

interface BentoCardProps {
  children: React.ReactNode;
  height?: string;
  rowSpan?: number;
  colSpan?: number;
  className?: string;
  showHoverGradient?: boolean;
  hideOverflow?: boolean;
  linkTo?: string;
}

export function BentoCard({
  children,
  height = "h-auto",
  rowSpan = 8,
  colSpan = 7,
  className = "",
  showHoverGradient = true,
  hideOverflow = true,
  linkTo,
}: BentoCardProps) {
  const cardContent = (
    <div
      className={`group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 ${
        hideOverflow ? "overflow-hidden" : "overflow-visible"
      } ${height} row-span-${rowSpan} col-span-${colSpan} ${className}`}
    >
      {linkTo && (
        <div className="absolute bottom-4 right-4 z-[999] flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-indigo-200 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
          <InfoIcon />
        </div>
      )}
      {/* //TODO: Add hover gradient */}
      {/* {showHoverGradient && (
        <div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
      )} */}
      <ClickSpark
        sparkColor="#0a0"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {children}
      </ClickSpark>
    </div>
  );

  if (linkTo) {
    return linkTo.startsWith("/") ? (
      <Link href={linkTo} className="block">
        {cardContent}
      </Link>
    ) : (
      <a
        href={linkTo}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

// SVG ANIMATION
interface InfoIconHandle {
  startAnimation: () => void;
  stopAnimation: () => void;
}

interface InfoIconProps extends HTMLMotionProps<"div"> {
  size?: number;
}

const InfoIcon = forwardRef<InfoIconHandle, InfoIconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 24, ...props }, ref) => {
    const controls = useAnimation();
    const reduced = useReducedMotion();
    const isControlled = useRef(false);

    useImperativeHandle(ref, () => {
      isControlled.current = true;
      return {
        startAnimation: () =>
          reduced ? controls.start("normal") : controls.start("animate"),
        stopAnimation: () => controls.start("normal"),
      };
    });

    // Start continuous animation on mount
    React.useEffect(() => {
      if (!reduced && !isControlled.current) {
        const startContinuousAnimation = () => {
          controls.start("animate");
        };

        // Start animation immediately
        startContinuousAnimation();

        // Set up interval for continuous animation
        const interval = setInterval(startContinuousAnimation, 2000); // Repeat every 2 seconds

        return () => clearInterval(interval);
      }
    }, [reduced, controls]);

    const svgVariants: Variants = {
      normal: { rotate: 0, scale: 1 },
      animate: {
        rotate: [0, -2, 2, 0],
        scale: [1, 1.08, 0.95, 1],
        transition: { duration: 0.7, ease: "easeInOut", repeat: 0 },
      },
    };

    const drawVariants: Variants = {
      normal: { pathLength: 1, opacity: 1 },
      animate: {
        pathLength: [0, 1],
        opacity: [0.6, 1],
        transition: { duration: 0.8, ease: "easeInOut", repeat: 0 },
      },
    };

    const pulseVariants: Variants = {
      normal: { scale: 1, opacity: 1 },
      animate: {
        scale: [1, 1.3, 0.8, 1],
        opacity: [1, 0.5, 1],
        transition: { duration: 0.5, ease: "easeInOut", repeat: 0 },
      },
    };

    return (
      <motion.div
        className={cn("inline-flex items-center justify-center", className)}
        {...props}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={controls}
          initial="normal"
          variants={svgVariants}
          className="text-sky-500"
        >
          <motion.circle cx="12" cy="12" r="10" variants={drawVariants} />
          <motion.path d="M12 16v-4" variants={pulseVariants} />
          <motion.path d="M12 8h.01" variants={pulseVariants} />
        </motion.svg>
      </motion.div>
    );
  },
);

InfoIcon.displayName = "InfoIcon";
