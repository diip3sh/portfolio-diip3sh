"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const cards = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1542397284385-6010376c5337?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=400&auto=format&fit=crop",
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
          className="relative flex items-center h-[250px] w-full pl-40 z-50 group"
        >
          {cards.map((card, index) => {
            const x = index * 60 - ((cards.length - 1) * 30) / 2;
            const hoverX = index * 30 - ((cards.length - 1) * 30) / 2;

            return (
              <motion.div
                key={card.id}
                className={cn(
                  "absolute w-[220px] h-[200px] bg-card rounded-[20px] p-2 shadow-xl border border-border cursor-pointer will-change-transform",
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
                    alt="Work card"
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
      <span className="text-primary text-sm absolute top-40 right-28 z-10 font-sans font-semibold">
        Let's make it
        <br />
        resonate.
      </span>
    </div>
  );
};
