"use client";

import React from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

type UseWindowBreakpointsOptions = {
  isMobile?: boolean;
};

export default function useWindowBreakpoints(
  options: UseWindowBreakpointsOptions = {}
) {
  const [breakpoint, setBreakpoint] = React.useState<Breakpoint | null>(null);
  const { isMobile = false } = options;

  React.useEffect(() => {
    const getBreakpoint = (width: number): Breakpoint => {
      if (isMobile) {
        return width < 640 ? "xs" : "sm";
      }

      const breakpoints = [
        { max: 640, name: "xs" as const },
        { max: 768, name: "sm" as const },
        { max: 1024, name: "md" as const },
        { max: 1280, name: "lg" as const },
        { max: Number.POSITIVE_INFINITY, name: "xl" as const },
      ];

      const found = breakpoints.find((bp) => width < bp.max);
      return found ? found.name : "xl";
    };

    const handleResize = () => {
      const newBreakpoint = getBreakpoint(window.innerWidth);
      if (newBreakpoint !== breakpoint) {
        setBreakpoint(newBreakpoint);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint, isMobile]);

  return breakpoint;
}
