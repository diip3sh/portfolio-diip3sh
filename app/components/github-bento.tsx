"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { BentoCard } from "./BentoCard";
import { getGithubContributions } from "../db/actions";
import { type GithubContribution } from "../db/github";
import HeatMap from "@uiw/react-heat-map";

const HEATMAP_WIDTH = 600;
const HEATMAP_HEIGHT = 250;
const ANIMATION_DURATION_SECONDS = 28;

export function GithubBento() {
  const [contributions, setContributions] = useState<GithubContribution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [today, setToday] = useState<string>(() => {
    const getTodayDate = () => {
      const now = new Date();
      // YYYY-MM-DD format
      return now.toISOString().split("T")[0];
    };
    return getTodayDate();
  });

  useEffect(() => {
    const getTodayDate = () => {
      const now = new Date();
      // YYYY/MM/DD format
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      return `${year}/${month}/${day}`;
    };

    setToday(getTodayDate());

    const interval = setInterval(
      () => {
        setToday(getTodayDate());
      },
      6 * 60 * 60 * 1000,
    ); // 6 hours

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        setIsLoading(true);
        const data = await getGithubContributions();
        setContributions(data);
      } catch (error) {
        console.error("Failed to fetch GitHub contributions:", error);
        // Keep contributions as empty array to show "No contributions found" message
        setContributions([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContributions();
  }, []);

  return (
    <BentoCard
      height="md:h-[304px] lg:h-[300px]"
      linkTo="https://github.com/diip3sh"
    >
      <div className="flex h-full flex-col gap-4">
        {/* Contribution grid */}
        <div className="overflow-hidden">
          {isLoading ? (
            <div className="flex h-full items-center justify-center">
              <div className="text-text-secondary">
                Loading contributions...
              </div>
            </div>
          ) : contributions.length === 0 ? (
            <>
              <div className="flex h-full items-center justify-center">
                <p className="text-text-secondary">No contributions found.</p>
              </div>
            </>
          ) : (
            <div className="relative h-[250px] overflow-hidden">
              <motion.div
                className="flex"
                initial={{ x: 0 }}
                animate={{ x: -HEATMAP_WIDTH }}
                transition={{
                  duration: ANIMATION_DURATION_SECONDS,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                {[0, 1].map((loopIndex) => (
                  <div
                    key={`github-heatmap-${loopIndex}`}
                    className="ml-[-4px] min-w-[600px] flex-shrink-0"
                  >
                    <HeatMap
                      value={contributions}
                      height={HEATMAP_HEIGHT}
                      width={HEATMAP_WIDTH}
                      weekLabels={false}
                      startDate={new Date("2024/12/12")}
                      endDate={new Date(today)}
                      legendCellSize={0}
                      rectProps={{
                        rx: 3,
                        mode: "dark",
                      }}
                      monthLabels={false}
                    />
                  </div>
                ))}
              </motion.div>

              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-bg-primary via-bg-primary/60 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg-primary via-bg-primary/60 to-transparent" />
            </div>
          )}
        </div>
        {/* Header with title and color controls */}
        <div className="flex flex-col gap-5">
          <h3 className="text-lg font-medium text-text-primary">
            GitHub <span className="font-italic">Contributions</span>
            <span className="align-top">*</span>
          </h3>
          <span className="font-sans">
            Total 773 contributions in the last year.
          </span>
        </div>
      </div>
    </BentoCard>
  );
}
