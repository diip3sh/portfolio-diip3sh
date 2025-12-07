"use client";

import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type TypewriterProps = {
  text: string | string[];
  speed?: number;
  initialDelay?: number;
  waitTime?: number;
  deleteSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorOnType?: boolean;
  cursorChar?: string | React.ReactNode;
  cursorAnimationVariants?: {
    initial: Variants["initial"];
    animate: Variants["animate"];
  };
  cursorClassName?: string;
};

export const Typewriter = ({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "ml-1",
  cursorAnimationVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.01,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 0.4,
        repeatType: "reverse",
      },
    },
  },
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = Array.isArray(text) ? text : [text];
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = texts[currentTextIndex];

    const handleTextComplete = () => {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, waitTime);
    };

    const handleTyping = () => {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    };

    const handleDeletionComplete = () => {
      setIsDeleting(false);
      if (currentTextIndex === texts.length - 1 && !loop) {
        return;
      }
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      setCurrentIndex(0);
    };

    const handleDeleting = () => {
      if (displayText === "") {
        handleDeletionComplete();
      } else {
        timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, deleteSpeed);
      }
    };

    const startTyping = () => {
      if (isDeleting) {
        handleDeleting();
      } else if (currentIndex < currentText.length) {
        handleTyping();
      } else if (texts.length > 1) {
        handleTextComplete();
      }
    };

    // Apply initial delay only at the start
    if (currentIndex === 0 && !isDeleting && displayText === "") {
      timeout = setTimeout(startTyping, initialDelay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    displayText,
    isDeleting,
    speed,
    deleteSpeed,
    waitTime,
    texts,
    currentTextIndex,
    loop,
    initialDelay,
  ]);

  if (prefersReducedMotion) {
    const firstText = texts[0] ?? "";
    return (
      <div className={`inline whitespace-pre-wrap tracking-tight ${className}`}>
        <span>{firstText}</span>
        {showCursor && (
          <span className={cn(cursorClassName)}>{cursorChar}</span>
        )}
      </div>
    );
  }

  return (
    <div className={`inline whitespace-pre-wrap tracking-tight ${className}`}>
      <span>{displayText}</span>
      {showCursor && (
        <motion.span
          animate="animate"
          className={cn(
            cursorClassName,
            hideCursorOnType &&
              (currentIndex < texts[currentTextIndex].length || isDeleting)
              ? "hidden"
              : ""
          )}
          initial="initial"
          variants={{
            ...cursorAnimationVariants,
            animate: {
              ...cursorAnimationVariants.animate,
              transition: {
                duration: 0.01,
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 0.4,
                repeatType: "reverse",
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  );
};
