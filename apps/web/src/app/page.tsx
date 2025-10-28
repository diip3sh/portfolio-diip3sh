"use client";

import { Section1 } from "@/components/section-1";
import { Footer } from "@/components/section/footer";
import Lenis from "lenis";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";

// Import your GlowingScrollIndicator component here
// import { GlowingScrollIndicator } from "@/components/ui/glowing-scroll-indicator";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  // const [scrollProgress, setScrollProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // // Track scroll progress for the indicator
  // useEffect(() => {
  //   const unsubscribe = scrollYProgress.on("change", (latest) => {
  //     setScrollProgress(latest);
  //   });
  //   return () => unsubscribe();
  // }, [scrollYProgress]);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      // biome-ignore lint/style/noMagicNumbers: Easing function
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    });

    // Animation frame loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Prevent horizontal wheel scrolling
    const preventHorizontal = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", preventHorizontal, {
      passive: false,
    });

    // Cleanup
    return () => {
      lenis.destroy();
      container?.removeEventListener("wheel", preventHorizontal);
    };
  }, []);

  // Calculate the scroll distance based on content width
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-400vw"]);

  return (
    <div
      className="relative"
      id="horizontal-scroll-container"
      ref={containerRef}
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="flex h-screen w-full flex-nowrap"
          ref={scrollRef}
          style={{ x }}
        >
          <div className="flex h-full w-screen shrink-0 items-center justify-center bg-background font-bold text-6xl">
            <Section1 />
          </div>
          <div className="flex h-full w-screen shrink-0 items-center justify-center bg-background font-bold text-6xl">
            Section 2
          </div>
          <div className="flex h-full w-screen shrink-0 items-center justify-center bg-background font-bold text-6xl">
            Section 3
          </div>
          <div className="flex h-full w-screen shrink-0 items-center justify-center bg-background font-bold text-6xl">
            Section 4
          </div>
          <div className="flex h-full w-screen shrink-0 items-center justify-center bg-background font-bold text-6xl">
            Section 5
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="fixed right-4 bottom-4 left-4 z-999 flex h-32 items-end justify-center rounded p-2">
          <Footer
            scrollContainerId="horizontal-scroll-container"
            scrollYProgress={scrollYProgress}
          />
        </div>
      </div>
    </div>
  );
}
