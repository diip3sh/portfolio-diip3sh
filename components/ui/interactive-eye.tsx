"use client";

import { useRef, useState, useEffect } from "react";

interface InteractiveEyeProps {
  size?: number;
  pupilSize?: number;
  className?: string;
}

export function InteractiveEye({
  size = 24,
  pupilSize = 12,
  className = "",
}: InteractiveEyeProps) {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;

      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate angle and distance from eye center to mouse
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);

      // Maximum distance pupil can move (eye radius - pupil radius - padding)
      const maxDistance = size / 2 - pupilSize / 2 - 2;
      const distance = Math.min(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        maxDistance
      );

      // Calculate pupil position
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      setPupilPosition({ x, y });
    };

    // Track mouse globally
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [size, pupilSize]);

  return (
    <div
      ref={eyeRef}
      className={`relative bg-background rounded-full overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
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
