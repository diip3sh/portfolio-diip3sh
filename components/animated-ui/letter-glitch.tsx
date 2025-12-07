"use client";

import type { MouseEvent, ReactNode } from "react";
import { useEffect, useRef } from "react";

const SHORTHAND_HEX_REGEX = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
const FULL_HEX_REGEX = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;

interface LetterGlitchProps {
  glitchColors?: string[];
  glitchSpeed?: number;
  centerVignette?: boolean;
  outerVignette?: boolean;
  smooth?: boolean;
  characters?: string;
  children?: ReactNode;
  className?: string;
  contentClassName?: string;
}

const LetterGlitch = ({
  glitchColors = [
    "oklch(0.7686 0.1647 70.0804)",
    "oklch(0.6658 0.1574 58.3183)",
    "oklch(0.5553 0.1455 48.9975)",
  ],
  glitchSpeed = 50,
  centerVignette: _centerVignette = false,
  outerVignette: _outerVignette = true,
  smooth = true,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>.,0123456789",
  children,
  className = "",
  contentClassName = "",
}: LetterGlitchProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const letters = useRef<
    {
      char: string;
      color: string;
      targetColor: string;
      colorProgress: number;
      opacity: number;
      targetOpacity: number;
    }[]
  >([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(Date.now());
  const highlightIndex = useRef<number | null>(null);

  const lettersAndSymbols = Array.from(characters);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;
  const baseOpacity = 0.05;
  const highlightOpacity = 1;

  const getRandomChar = () =>
    lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)];

  const getRandomColor = () =>
    glitchColors[Math.floor(Math.random() * glitchColors.length)];

  const hexToRgb = (hex: string) => {
    const normalizedHex = hex.replace(
      SHORTHAND_HEX_REGEX,
      (_m, r, g, b) => r + r + g + g + b + b
    );

    const result = FULL_HEX_REGEX.exec(normalizedHex);
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null;
  };

  const interpolateColor = (
    start: { r: number; g: number; b: number },
    end: { r: number; g: number; b: number },
    factor: number
  ) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor),
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
  };

  const calculateGrid = (width: number, height: number) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeLetters = (columns: number, rows: number) => {
    grid.current = { columns, rows };
    const totalLetters = columns * rows;
    letters.current = Array.from({ length: totalLetters }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
      opacity: baseOpacity,
      targetOpacity: baseOpacity,
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const parent = canvas.parentElement;
    if (!parent) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeLetters(columns, rows);
    drawLetters();
  };

  const drawLetters = () => {
    if (!context.current || letters.current.length === 0) {
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = context.current;
    const { width, height } = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";

    letters.current.forEach((letter, index) => {
      const x = (index % grid.current.columns) * charWidth;
      const y = Math.floor(index / grid.current.columns) * charHeight;
      ctx.globalAlpha = letter.opacity;
      ctx.fillStyle = letter.color;
      ctx.fillText(letter.char, x, y);
    });
    ctx.globalAlpha = 1;
  };

  const updateLetters = () => {
    if (!letters.current || letters.current.length === 0) {
      return;
    }

    const updateCount = Math.max(1, Math.floor(letters.current.length * 0.05));

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * letters.current.length);
      if (!letters.current[index]) {
        continue;
      }

      letters.current[index].char = getRandomChar();
      letters.current[index].targetColor = getRandomColor();

      if (smooth) {
        letters.current[index].colorProgress = 0;
      } else {
        letters.current[index].color = letters.current[index].targetColor;
        letters.current[index].colorProgress = 1;
      }
    }
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    for (const letter of letters.current) {
      if (letter.colorProgress >= 1) {
        continue;
      }

      letter.colorProgress = Math.min(1, letter.colorProgress + 0.05);

      const startRgb = hexToRgb(letter.color);
      if (!startRgb) {
        continue;
      }

      const endRgb = hexToRgb(letter.targetColor);
      if (!endRgb) {
        continue;
      }

      letter.color = interpolateColor(startRgb, endRgb, letter.colorProgress);
      needsRedraw = true;
    }

    if (needsRedraw) {
      drawLetters();
    }
  };

  const handleOpacityTransitions = () => {
    let needsRedraw = false;
    for (const letter of letters.current) {
      if (Math.abs(letter.opacity - letter.targetOpacity) > 0.01) {
        letter.opacity += (letter.targetOpacity - letter.opacity) * 0.2;
        if (Math.abs(letter.opacity - letter.targetOpacity) <= 0.01) {
          letter.opacity = letter.targetOpacity;
        }
        needsRedraw = true;
      }
    }

    if (needsRedraw) {
      drawLetters();
    }
  };

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas || letters.current.length === 0) {
      return;
    }

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
      return;
    }

    const column = Math.floor(x / charWidth);
    const row = Math.floor(y / charHeight);
    const index = row * grid.current.columns + column;

    if (index === highlightIndex.current) {
      return;
    }

    if (
      highlightIndex.current !== null &&
      letters.current[highlightIndex.current]
    ) {
      letters.current[highlightIndex.current].targetOpacity = baseOpacity;
    }

    if (index >= 0 && index < letters.current.length) {
      highlightIndex.current = index;
      letters.current[index].targetOpacity = highlightOpacity;
    } else {
      highlightIndex.current = null;
    }
  };

  const handlePointerLeave = () => {
    if (
      highlightIndex.current !== null &&
      letters.current[highlightIndex.current]
    ) {
      letters.current[highlightIndex.current].targetOpacity = baseOpacity;
    }
    highlightIndex.current = null;
  };

  const animate = () => {
    const now = Date.now();
    if (now - lastGlitchTime.current >= glitchSpeed) {
      updateLetters();
      drawLetters();
      lastGlitchTime.current = now;
    }

    if (smooth) {
      handleSmoothTransitions();
    }

    handleOpacityTransitions();

    animationRef.current = requestAnimationFrame(animate);
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: animation loop uses stable refs
  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    context.current = canvas.getContext("2d");
    resizeCanvas();
    animate();

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
        }
        resizeCanvas();
        animate();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (prefersReducedMotion) {
    return (
      <div
        className={`relative isolate w-full overflow-hidden bg-background ${className}`}
      >
        <div
          className={`relative z-10 flex w-full flex-col ${contentClassName}`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: pointer tracking drives canvas highlight
    <div
      className={`relative isolate w-full overflow-hidden bg-background ${className}`}
      onMouseLeave={handlePointerLeave}
      onMouseMove={handlePointerMove}
      role="presentation"
      tabIndex={-1}
    >
      <canvas
        className="pointer-events-none absolute inset-0 h-full w-full"
        ref={canvasRef}
      />
      <div className={`relative z-10 flex w-full flex-col ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default LetterGlitch;
