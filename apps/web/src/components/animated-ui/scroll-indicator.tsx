/** biome-ignore-all lint/style/noMagicNumbers: Bars count */
"use client";

import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "motion/react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const BARS = 40;

const ScrollBar = ({
  index,
  scrollProgress,
}: {
  index: number;
  scrollProgress: MotionValue<number>;
}) => {
  const thisBarPosition = index / BARS;
  const preStep = Math.max(0, (index - 3) / BARS);
  const postStep = Math.min(1, (index + 3) / BARS);

  const height = useTransform(
    scrollProgress,
    [0, preStep, thisBarPosition, postStep, 1],
    [5, 15, 35, 15, 5]
  );
  const opacity = useTransform(
    scrollProgress,
    [0, preStep, thisBarPosition, postStep, 1],
    [0.1, 0.4, 1, 0.4, 0.1]
  );
  const width = useTransform(
    scrollProgress,
    [0, thisBarPosition, 1],
    [1.5, 5, 1.5]
  );

  return (
    <motion.div
      className="rounded-full bg-foreground shadow-sm"
      style={{
        height,
        opacity: useTransform(opacity, (value) => `${value}`),
        width: useTransform(width, (value) => `${value}px`),
      }}
    />
  );
};

const ScrollIndicatorBars = ({
  container,
  direction,
  externalScrollProgress,
}: {
  container: HTMLElement;
  direction: "vertical" | "horizontal";
  externalScrollProgress?: MotionValue<number>;
}) => {
  const ref = React.useRef<HTMLElement>(container);

  // Update ref if container changes
  React.useEffect(() => {
    ref.current = container;
  }, [container]);

  const { scrollXProgress, scrollYProgress } = useScroll({
    container: ref,
  });

  const scrollProgress =
    externalScrollProgress ||
    (direction === "vertical" ? scrollYProgress : scrollXProgress);

  const left = useTransform(scrollProgress, [0, 1], [0, 100]);

  return (
    <div className="relative flex w-fit items-end justify-center gap-1 md:gap-2">
      {Array.from({ length: BARS }).map((_, index) => (
        <ScrollBar
          index={index}
          key={`scroll-bar-${
            // biome-ignore lint/suspicious/noArrayIndexKey: Index as key
            index
          }`}
          scrollProgress={scrollProgress}
        />
      ))}
      <motion.div
        className="-translate-x-1/2 absolute bottom-0 left-1/2 h-12 w-1 bg-primary"
        style={{ left: useTransform(left, (value) => `${value}%`) }}
      />
    </div>
  );
};

const ScrollIndicator = ({
  scrollContainerId,
  direction,
  externalScrollProgress,
}: {
  scrollContainerId: string;
  direction: "vertical" | "horizontal";
  externalScrollProgress?: MotionValue<number>;
}) => {
  const [container, setContainer] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    const scrollContainer = document.getElementById(scrollContainerId);
    if (scrollContainer) {
      setContainer(scrollContainer);
    }
  }, [scrollContainerId]);

  if (!container) {
    return null;
  }

  return (
    <ScrollIndicatorBars
      container={container}
      direction={direction}
      externalScrollProgress={externalScrollProgress}
    />
  );
};

const GlowingScrollIndicator = ({
  scrollContainerId = "scroll-target",
  direction = "vertical",
  externalScrollProgress,
}: {
  scrollContainerId?: string;
  direction?: "vertical" | "horizontal";
  externalScrollProgress?: MotionValue<number>;
}) => {
  const pathname = usePathname();

  return (
    <ScrollIndicator
      direction={direction}
      externalScrollProgress={externalScrollProgress}
      key={pathname}
      scrollContainerId={scrollContainerId}
    />
  );
};

export default GlowingScrollIndicator;
