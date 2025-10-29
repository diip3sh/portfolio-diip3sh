"use client";

import CraftPreview from "@/app/craft/components/craft-preview";
import { crafts } from "@/data/craft";
import useWindowBreakpoints from "@/hooks/use-window-breakpoints";

export default function Masonry() {
  const windowBreakpoint = useWindowBreakpoints();

  if (windowBreakpoint === "sm" || windowBreakpoint === "xs") {
    return <OneColumn />;
  }
  if (windowBreakpoint === "md") {
    return <TwoColumns />;
  }
  if (windowBreakpoint === "lg" || windowBreakpoint === "xl") {
    return <ThreeColumns />;
  }
}

function OneColumn() {
  return (
    <div className="flex flex-col items-start justify-center gap-4">
      {crafts.map((experiment) => (
        <CraftPreview experiments={experiment} key={experiment.slug} />
      ))}
    </div>
  );
}

function TwoColumns() {
  const leftColumn = crafts.filter(
    (experiment, index) => index % 2 === 0 && experiment
  );
  const rightColumn = crafts.filter(
    (experiment, index) => index % 2 !== 0 && experiment
  );

  return (
    <div className="flex flex-row items-start justify-center gap-1">
      <div className="flex flex-1 flex-col gap-1">
        {leftColumn.map((experiment) => (
          <CraftPreview experiments={experiment} key={experiment.slug} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {rightColumn.map((experiment) => (
          <CraftPreview experiments={experiment} key={experiment.slug} />
        ))}
      </div>
    </div>
  );
}

function ThreeColumns() {
  const leftColumn = crafts.filter(
    (experiment, index) => index % 3 === 0 && experiment
  );
  const middleColumn = crafts.filter(
    (experiment, index) => index % 3 === 1 && experiment
  );
  const rightColumn = crafts.filter(
    (experiment, index) => index % 3 === 2 && experiment
  );

  return (
    <div className="flex flex-row items-start justify-center gap-1">
      <div className="flex flex-1 flex-col gap-1">
        {leftColumn.map((experiment) => (
          <CraftPreview experiments={experiment} key={experiment.slug} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {middleColumn.map((experiment) => (
          <CraftPreview experiments={experiment} key={experiment.slug} />
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        {rightColumn.map((experiment) => (
          <CraftPreview experiments={experiment} key={experiment.slug} />
        ))}
      </div>
    </div>
  );
}
