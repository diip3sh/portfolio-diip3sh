/** biome-ignore-all lint/style/noNestedTernary: <explanation> */

"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type Frame = {
  id: number;
  video: string;
  defaultPos: { x: number; y: number; w: number; h: number };
  corner?: string;
  edgeHorizontal?: string;
  edgeVertical?: string;
  mediaSize: number;
  borderThickness?: number;
  borderSize?: number;
  isHovered: boolean;
};

type FrameComponentProps = {
  video: string;
  width: number | string;
  height: number | string;
  className?: string;
  corner: string;
  edgeHorizontal: string;
  edgeVertical: string;
  mediaSize: number;
  borderThickness: number;
  borderSize: number;
  showFrame: boolean;
  isHovered: boolean;
};

function FrameComponent({
  video,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  showFrame,
  isHovered,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isHovered) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isHovered]);

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="h-full w-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <video
              className="h-full w-full object-cover"
              loop
              muted
              playsInline
              ref={videoRef}
              src={video}
            />
          </div>
        </div>

        {showFrame && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div
              className="absolute top-0 left-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute top-0 right-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${corner})`,
                transform: "scaleX(-1)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${corner})`,
                transform: "scaleY(-1)",
              }}
            />
            <div
              className="absolute right-0 bottom-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${corner})`,
                transform: "scale(-1, -1)",
              }}
            />

            <div
              className="absolute top-0 right-16 left-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute right-16 bottom-0 left-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute top-16 bottom-16 left-0 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute top-16 right-0 bottom-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

type DynamicFrameLayoutProps = {
  frames: Frame[];
  className?: string;
  showFrames?: boolean;
  hoverSize?: number;
  gapSize?: number;
};

export function DynamicFrameLayout({
  frames: initialFrames,
  className,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4,
}: DynamicFrameLayoutProps) {
  const [frames] = useState<Frame[]>(initialFrames);
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
    null
  );

  const getRowSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr";
    }
    const { row } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((r) => (r === row ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(" ");
  };

  const getColSizes = () => {
    if (hovered === null) {
      return "4fr 4fr 4fr";
    }
    const { col } = hovered;
    const nonHoveredSize = (12 - hoverSize) / 2;
    return [0, 1, 2]
      .map((c) => (c === col ? `${hoverSize}fr` : `${nonHoveredSize}fr`))
      .join(" ");
  };

  const getTransformOrigin = (x: number, y: number) => {
    const vertical = y === 0 ? "top" : y === 4 ? "center" : "bottom";
    const horizontal = x === 0 ? "left" : x === 4 ? "center" : "right";
    return `${vertical} ${horizontal}`;
  };

  return (
    <div
      className={cn("relative h-full w-full", className)}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition:
          "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4);
        const col = Math.floor(frame.defaultPos.x / 4);
        const transformOrigin = getTransformOrigin(
          frame.defaultPos.x,
          frame.defaultPos.y
        );

        return (
          <motion.div
            className="relative"
            key={frame.id}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
          >
            <FrameComponent
              borderSize={frame.borderSize || 0}
              borderThickness={frame.borderThickness || 0}
              className="absolute inset-0"
              corner={frame.corner || ""}
              edgeHorizontal={frame.edgeHorizontal || ""}
              edgeVertical={frame.edgeVertical || ""}
              height="100%"
              isHovered={hovered?.row === row && hovered?.col === col}
              mediaSize={frame.mediaSize}
              showFrame={showFrames}
              video={frame.video}
              width="100%"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
