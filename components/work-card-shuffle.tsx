"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const cards = [
  {
    id: 1,
    src: "/work/1.png",
  },
  {
    id: 2,
    src: "/work/2.png",
  },
  {
    id: 3,
    src: "/work/3.png",
  },
  {
    id: 4,
    src: "/work/4.png",
  },
  {
    id: 5,
    src: "/work/5.png",
  },
  {
    id: 6,
    src: "/work/6.png",
  },
  {
    id: 7,
    src: "/work/7.png",
  },
];

export const WorkCardShuffle = () => {
  const [isHovered, setHovered] = useState<boolean | null>(false);

  return (
    <div className="flex items-center justify-center w-full overflow-visible relative">
      <AnimatePresence>
        <motion.div
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="relative flex items-center h-[250px] w-full xl:pl-36 z-50 group"
        >
          {cards.map((card, index) => {
            const x = index * 60 - ((cards.length - 1) * 30) / 2;
            const hoverX = index * 30 - ((cards.length - 1) * 30) / 2;

            return (
              <motion.div
                key={card.id}
                className={cn(
                  "absolute w-[220px] h-[200px] bg-card rounded-[20px] p-1 shadow-xl border border-border cursor-pointer will-change-transform",
                )}
                animate={{
                  rotate: 10,
                  x: isHovered === true ? hoverX : x,
                  scale: isHovered === true ? 0.87 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                <div className="w-full h-full relative overflow-hidden rounded-[14px]">
                  <Image
                    src={card.src}
                    alt={`Project ${card.id} showcase`}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
      <span className="text-primary text-sm z-10 font-mono font-normal uppercase mr-10">
        Let's make it resonate.
      </span>
    </div>
  );
};
