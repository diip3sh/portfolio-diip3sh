"use client";

import Image from "next/image";
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils"; // Your utility for merging Tailwind classes

// Define the type for a single report item
export type Report = {
  imageSrc: string;
};

// Define the props for the main component
type ShareholderReportsProps = {
  reports: Report[];
  title?: string;
  subtitle?: string;
  className?: string;
};

export const Carousel = forwardRef<HTMLDivElement, ShareholderReportsProps>(
  (
    {
      reports,
      title = "Shareholders' Letter and Results",
      subtitle = "Powering India's changing lifestyles",
      className,
      ...props
    },
    ref
  ) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
      <section
        aria-labelledby="reports-heading"
        className={cn("mx-auto w-full max-w-7xl py-8", className)}
        ref={ref}
        {...props}
      >
        <div
          className="scrollbar-hide flex snap-x snap-mandatory space-x-4 overflow-x-auto scroll-smooth px-4 sm:px-6 md:space-x-6"
          ref={scrollContainerRef}
        >
          {reports.map((report) => (
            <div
              className="h-[400px] w-[700px] shrink-0 snap-start sm:h-[400px] sm:w-[700px]"
              key={report.imageSrc}
            >
              {/* Report Card */}
              <div className="group cursor-pointer">
                <div className="group-hover:-translate-y-1 relative mb-3 overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 ease-in-out group-hover:shadow-lg">
                  <Image
                    alt={`Report for ${report.imageSrc}`}
                    className="h-[400px] w-[700px] rounded-lg object-cover shadow-md sm:h-[380px]"
                    height={320}
                    src={report.imageSrc}
                    unoptimized
                    width={240}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
);
