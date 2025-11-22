"use client";

import { motion } from "motion/react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

type TransitionType = {
  type?: "spring" | "tween" | "inertia" | "keyframes";
  stiffness?: number;
  damping?: number;
  delay?: number;
  [key: string]: unknown;
};

type TextProps = {
  children: React.ReactNode;
  reverse?: boolean;
  transition?: TransitionType;
  splitBy?: "words" | "characters" | "lines" | string;
  staggerDuration?: number;
  staggerFrom?: "first" | "last" | "center" | "random" | number;
  containerClassName?: string;
  wordLevelClassName?: string;
  elementLevelClassName?: string;
  onClick?: () => void;
  onStart?: () => void;
  onComplete?: () => void;
  autoStart?: boolean;
};

export type VerticalCutRevealRef = {
  startAnimation: () => void;
  reset: () => void;
};

type WordObject = {
  characters: string[];
  needsSpace: boolean;
};

const VerticalCutReveal = forwardRef<VerticalCutRevealRef, TextProps>(
  (
    {
      children,
      reverse = false,
      transition = {
        type: "spring",
        stiffness: 190,
        damping: 22,
      },
      splitBy = "words",
      staggerDuration = 0.2,
      staggerFrom = "first",
      containerClassName,
      wordLevelClassName,
      elementLevelClassName,
      onClick,
      onStart,
      onComplete,
      autoStart = true,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLSpanElement>(null);
    const text =
      typeof children === "string" ? children : children?.toString() || "";
    const [isAnimating, setIsAnimating] = useState(false);

    // Разделение текста на символы с поддержкой Unicode и эмодзи
    const splitIntoCharacters = useCallback((inputText: string): string[] => {
      if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
        const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
        return Array.from(
          segmenter.segment(inputText),
          ({ segment }) => segment
        );
      }
      return Array.from(inputText);
    }, []);

    // Разделение текста на основе параметра splitBy
    const elements = useMemo(() => {
      const words = text.split(" ");
      if (splitBy === "characters") {
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
        }));
      }
      if (splitBy === "words") {
        return text.split(" ");
      }
      if (splitBy === "lines") {
        return text.split("\n");
      }
      return text.split(splitBy);
    }, [text, splitBy, splitIntoCharacters]);

    // Расчет задержек для эффекта stagger
    const getStaggerDelay = useCallback(
      (index: number) => {
        const total =
          splitBy === "characters"
            ? elements.reduce(
                (acc, word) =>
                  acc +
                  (typeof word === "string"
                    ? 1
                    : word.characters.length + (word.needsSpace ? 1 : 0)),
                0
              )
            : elements.length;
        if (staggerFrom === "first") {
          return index * staggerDuration;
        }
        if (staggerFrom === "last") {
          return (total - 1 - index) * staggerDuration;
        }
        if (staggerFrom === "center") {
          const center = Math.floor(total / 2);
          return Math.abs(center - index) * staggerDuration;
        }
        if (staggerFrom === "random") {
          const randomIndex = Math.floor(Math.random() * total);
          return Math.abs(randomIndex - index) * staggerDuration;
        }
        return Math.abs(staggerFrom - index) * staggerDuration;
      },
      [elements, splitBy, staggerFrom, staggerDuration]
    );

    const startAnimation = useCallback(() => {
      setIsAnimating(true);
      onStart?.();
    }, [onStart]);

    useImperativeHandle(ref, () => ({
      startAnimation,
      reset: () => setIsAnimating(false),
    }));

    useEffect(() => {
      if (autoStart) {
        startAnimation();
      }
    }, [autoStart, startAnimation]);

    const variants = {
      hidden: { y: reverse ? "-100%" : "100%" },
      visible: (i: number) => ({
        y: 0,
        transition: {
          ...transition,
          delay: ((transition?.delay as number) || 0) + getStaggerDelay(i),
        },
      }),
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
      if ((event.key === "Enter" || event.key === " ") && onClick) {
        event.preventDefault();
        onClick();
      }
    };

    const interactiveProps = onClick
      ? {
          onClick,
          onKeyDown: handleKeyDown,
          role: "button" as const,
          tabIndex: 0,
        }
      : {};

    return (
      <span
        className={cn(
          containerClassName,
          "flex flex-wrap whitespace-pre-wrap",
          splitBy === "lines" && "flex-col"
        )}
        ref={containerRef}
        {...interactiveProps}
        {...props}
      >
        <span className="sr-only">{text}</span>

        {(splitBy === "characters"
          ? (elements as WordObject[])
          : (elements as string[]).map((el, i) => ({
              characters: [el],
              needsSpace: i !== elements.length - 1,
            }))
        ).map((wordObj, wordIndex, array) => {
          const previousCharsCount = array
            .slice(0, wordIndex)
            .reduce((sum, word) => sum + word.characters.length, 0);

          return (
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex overflow-hidden py-0.5",
                wordLevelClassName
              )}
              key={`word-${wordObj.characters.join("")}-${wordIndex}`}
            >
              {wordObj.characters.map((char, charIndex) => (
                <span
                  className={cn(
                    elementLevelClassName,
                    "relative whitespace-pre-wrap"
                  )}
                  key={`char-${previousCharsCount + charIndex}`}
                >
                  <motion.span
                    animate={isAnimating ? "visible" : "hidden"}
                    className="inline-block"
                    custom={previousCharsCount + charIndex}
                    initial="hidden"
                    onAnimationComplete={
                      wordIndex === elements.length - 1 &&
                      charIndex === wordObj.characters.length - 1
                        ? onComplete
                        : undefined
                    }
                    variants={variants}
                  >
                    {char}
                  </motion.span>
                </span>
              ))}
              {wordObj.needsSpace && <span> </span>}
            </span>
          );
        })}
      </span>
    );
  }
);

VerticalCutReveal.displayName = "VerticalCutReveal";

export { VerticalCutReveal };
