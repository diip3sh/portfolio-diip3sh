"use client";

import { useRef, useState, useEffect, createContext, useContext } from "react";

// Shared context for synchronized blinking
const BlinkContext = createContext<{ isBlinking: boolean }>({ isBlinking: false });

interface InteractiveEyeProps {
  size?: number;
  pupilSize?: number;
  className?: string;
}

function Eye({ size = 24, pupilSize = 12, className = "" }: InteractiveEyeProps) {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });
  const { isBlinking } = useContext(BlinkContext);

  // Handle cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);

      const maxDistance = size / 2 - pupilSize / 2 - 2;
      const distance = Math.min(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        maxDistance
      );

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      setPupilPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size, pupilSize]);

  return (
    <div
      ref={eyeRef}
      className={`relative bg-background rounded-full overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
        transform: isBlinking ? "scaleY(0.1)" : "scaleY(1)",
        transition: isBlinking 
          ? "transform 75ms ease-in" 
          : "transform 100ms ease-out",
        transformOrigin: "center",
      }}
    >
      <div
        className="absolute bg-black rounded-full"
        style={{
          width: pupilSize,
          height: pupilSize,
          left: "50%",
          top: "50%",
          transform: `translate(calc(-50% + ${pupilPosition.x}px), calc(-50% + ${pupilPosition.y}px))`,
          transition: "transform 50ms ease-out",
        }}
      />
    </div>
  );
}

interface InteractiveEyesProps {
  size?: number;
  pupilSize?: number;
  gap?: number;
  className?: string;
  blinkInterval?: number;
}

export function InteractiveEyes({
  size = 24,
  pupilSize = 12,
  gap = 8,
  className = "",
  blinkInterval = 4000,
}: InteractiveEyesProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  // Handle synchronized blinking
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const scheduleBlink = () => {
      const randomDelay = blinkInterval + Math.random() * 4000;
      
      return setTimeout(() => {
        setIsBlinking(true);
        
        setTimeout(() => {
          setIsBlinking(false);
        }, 150);
        
        scheduleBlink();
      }, randomDelay);
    };

    const timeoutId = scheduleBlink();
    
    return () => clearTimeout(timeoutId);
  }, [blinkInterval]);

  return (
    <BlinkContext.Provider value={{ isBlinking }}>
      <div className={`flex items-center ${className}`} style={{ gap }}>
        <Eye size={size} pupilSize={pupilSize} />
        <Eye size={size} pupilSize={pupilSize} />
      </div>
    </BlinkContext.Provider>
  );
}

// Keep single eye export for backward compatibility
export { Eye as InteractiveEye };
