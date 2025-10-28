"use client";

import { AnimatePresence, motion } from "motion/react";
import { useTheme } from "next-themes";
import type React from "react";
import useSound from "use-sound";
import { cn } from "@/lib/utils";

type ToggleButtonProps = {
  options: Array<{
    label: React.ReactNode;
    value: string;
  }>;
  defaultValue?: string;
  className?: string;
  onClick?: (value: string) => void;
};

export const ModeToggle = ({
  options,
  defaultValue,
  onClick,
  className,
  ...props
}: ToggleButtonProps) => {
  const { theme, setTheme } = useTheme();

  const [playSwitchOn] = useSound("/sounds/on.mp3", { volume: 0.5 });
  const [playSwitchOff] = useSound("/sounds/off.mp3", { volume: 0.5 });

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme === "dark") {
      playSwitchOff();
    } else {
      playSwitchOn();
    }
  };

  return (
    <button
      className={cn(
        "relative flex h-[32px] w-[32px] items-center justify-center overflow-hidden rounded-full hover:bg-accent",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          {options.map((option) => {
            if (option.value !== theme) {
              return null;
            }

            return (
              <motion.div
                animate={{
                  y: 0,
                }}
                className="absolute flex items-center justify-center"
                exit={{
                  y: -40,
                }}
                initial={{
                  y: 40,
                }}
                key={option.value}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {option.label}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </button>
  );
};
