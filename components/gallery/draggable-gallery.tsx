"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const DraggableGallery = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const x = useMotionValue(0);
  const springX = useSpring(x, {
    stiffness: 150,
    damping: 30,
    mass: 0.5,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!(carousel.current && content.current)) {
      return;
    }

    const updateWidth = () => {
      if (carousel.current && content.current) {
        const scrollWidth = content.current.scrollWidth;
        const offsetWidth = carousel.current.offsetWidth;
        setWidth(Math.max(0, scrollWidth - offsetWidth));
      }
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(carousel.current);
    resizeObserver.observe(content.current);

    return () => resizeObserver.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || !carousel.current || width === 0) {
      return;
    }

    const rect = carousel.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const percentage = Math.min(Math.max(mouseX / rect.width, 0), 1);

    x.set(-percentage * width);
  };

  return (
    <motion.div
      className={`min-w-0 ${className}`}
      onMouseMove={isMobile ? undefined : handleMouseMove}
      ref={carousel}
    >
      <motion.div
        className="flex w-fit gap-4 *:shrink-0"
        drag={isMobile ? "x" : false}
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.1}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        ref={content}
        style={{ x: isMobile ? undefined : springX }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
