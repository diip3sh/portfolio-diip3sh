"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

const CIRCLE_BLUR_CENTER_ANIMATION = `
  ::view-transition-group(root) {
    animation-duration: 0.7s;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  }

  ::view-transition-new(root) {
    animation-name: reveal-light-blur;
  }

  .dark::view-transition-new(root) {
    animation-name: reveal-dark-blur;
  }

  ::view-transition-old(root),
  .dark::view-transition-old(root) {
    animation: none;
  }

  @keyframes reveal-dark-blur {
    from {
      clip-path: circle(0% at 50% 50%);
      filter: blur(8px);
    }
    50% {
      filter: blur(4px);
    }
    to {
      clip-path: circle(100% at 50% 50%);
      filter: blur(0px);
    }
  }

  @keyframes reveal-light-blur {
    from {
      clip-path: circle(0% at 50% 50%);
      filter: blur(8px);
    }
    50% {
      filter: blur(4px);
    }
    to {
      clip-path: circle(100% at 50% 50%);
      filter: blur(0px);
    }
  }
`;

function useThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const updateStyles = useCallback((css: string) => {
    let styleEl = document.getElementById(
      "theme-transition-style"
    ) as HTMLStyleElement;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "theme-transition-style";
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = css;
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: setIsDark and isDark are both needed
  const toggleTheme = useCallback(() => {
    setIsDark(!isDark);

    updateStyles(CIRCLE_BLUR_CENTER_ANIMATION);

    if (typeof document === "undefined" || !document.startViewTransition) {
      setTheme(theme === "light" ? "dark" : "light");
      return;
    }

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    document.startViewTransition(switchTheme);
  }, [theme, setTheme, updateStyles, isDark, setIsDark]);

  return { isDark, toggleTheme };
}

export function ThemeToggleButton() {
  const { isDark, toggleTheme } = useThemeToggle();

  return (
    <button
      aria-label="Toggle theme"
      className="relative flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform duration-300 active:scale-95"
      onClick={toggleTheme}
      type="button"
    >
      <motion.svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Toggle theme</title>
        <motion.g
          animate={{ rotate: isDark ? -180 : 0 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <path
            d="M120 67.5C149.25 67.5 172.5 90.75 172.5 120C172.5 149.25 149.25 172.5 120 172.5"
            fill="white"
          />
          <path
            d="M120 67.5C90.75 67.5 67.5 90.75 67.5 120C67.5 149.25 90.75 172.5 120 172.5"
            fill="black"
          />
        </motion.g>
        <motion.path
          animate={{ rotate: isDark ? 180 : 0 }}
          d="M120 3.75C55.5 3.75 3.75 55.5 3.75 120C3.75 184.5 55.5 236.25 120 236.25C184.5 236.25 236.25 184.5 236.25 120C236.25 55.5 184.5 3.75 120 3.75ZM120 214.5V172.5C90.75 172.5 67.5 149.25 67.5 120C67.5 90.75 90.75 67.5 120 67.5V25.5C172.5 25.5 214.5 67.5 214.5 120C214.5 172.5 172.5 214.5 120 214.5Z"
          fill="white"
          transition={{ ease: "easeInOut", duration: 0.5 }}
        />
      </motion.svg>
    </button>
  );
}
