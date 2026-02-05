"use client";

import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  GithubIcon,
  Link01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import type { WorkSectionItem } from "@/lib/data/work";
import { cn } from "@/lib/utils";

type WorkDetailProps = {
  data: WorkSectionItem;
};

export const WorkDetail = ({ data }: WorkDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % data.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + data.images.length) % data.images.length);
  };

  return (
    <motion.div
      key={data.dataKey}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex flex-col gap-5"
    >
      {/* Image Gallery */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0"
          >
            <Image
              src={data.images[currentImageIndex]}
              alt={`${data.title} screenshot ${currentImageIndex + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {data.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/70 focus:opacity-100 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/70 focus:opacity-100 group-hover:opacity-100"
              aria-label="Next image"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {data.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {data.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-all",
                  index === currentImageIndex
                    ? "w-4 bg-white"
                    : "bg-white/50 hover:bg-white/75"
                )}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{data.title}</h3>
            <p className="text-sm text-muted-foreground">
              {data.role} · {data.year}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {data.githubUrl && (
              <Link
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="View source code"
              >
                <HugeiconsIcon icon={GithubIcon} size={16} />
              </Link>
            )}
            {data.liveUrl && (
              <Link
                href={data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="View live site"
              >
                <HugeiconsIcon icon={Link01Icon} size={16} />
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="font-sans text-sm leading-relaxed text-muted-foreground">
          {data.fullDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {data.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
