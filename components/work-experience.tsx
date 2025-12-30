"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { workExperience } from "@/lib/data/home";

export const WorkExperience = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReduceMotion(mql.matches);
    handleChange();
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);
  return (
    <div className="flex flex-col gap-6 w-full">
      <h3 className="cursor-pointer hover:text-primary hover:transition-all text-muted-foreground uppercase text-sm font-semibold text-end">
        Know more
      </h3>

      {/* Timeline Container */}
      <div className="relative w-full">
        {/* Horizontal Line SVG */}
        <div className="absolute top-[6px] left-0 right-0 h-[2px] overflow-visible z-0">
          <svg
            className="w-full h-full overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Background Line */}
            <line
              x1="0"
              y1="1"
              x2="100%"
              y2="1"
              className="stroke-primary/50"
              strokeWidth="1"
            />
            {/* Animated Line (Right to Left) */}
            <motion.line
              x1="100%"
              y1="1"
              x2="0"
              y2="1"
              className="stroke-primary"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 5,
                      ease: "linear",
                      repeat: Number.POSITIVE_INFINITY,
                    }
              }
            />
          </svg>
        </div>

        <div className="grid grid-cols-4 w-full gap-0.5 pt-6 z-10 relative">
          {workExperience.map((job, index) => {
            const isCurrent = index === 0;

            return (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                className="relative flex flex-col gap-2 min-w-0"
              >
                {/* Dot */}
                <div className="absolute left-0 -top-[24px] z-10 w-3 h-3 flex items-center justify-center">
                  {isCurrent && (
                    <motion.div
                      className="absolute inset-0 bg-primary/30 rounded-full"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 2.5, opacity: 0 }}
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : {
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeOut",
                            }
                      }
                    />
                  )}
                  <div
                    className={`w-2.5 h-2.5 rounded-full ring-4 ring-background ${
                      isCurrent ? "bg-primary" : "bg-primary/50"
                    }`}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex flex-col">
                    <h4 className="font-medium text-foreground text-sm uppercase truncate">
                      {job.company}
                    </h4>
                    <span className="text-[10px] sm:text-xs text-muted-foreground tabular-nums truncate">
                      {job.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
