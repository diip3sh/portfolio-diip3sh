"use client";

import { GrainGradient, DotGrid } from "@paper-design/shaders-react";

export default function Logo() {
  return (
    <div
      style={{
        backgroundColor: "#020000",
        borderRadius: "24px",
        boxSizing: "border-box",
        contain: "content",
        filter: "drop-shadow(#000000 0px 2px 3px)",
        height: "48px",
        overflowWrap: "break-word",
        transformOrigin: "0% 0%",
        width: "104px",
      }}
    >
      <DotGrid
        colorFill="#FFFFFF80"
        colorStroke="#FFAA00"
        colorBack="#00000000"
        size={2}
        gapY={32}
        gapX={32}
        strokeWidth={0}
        sizeRange={0}
        opacityRange={0}
        shape="circle"
        style={{
          backgroundColor: "#030000",
          height: "48px",
          left: "0",
          position: "fixed",
          top: "0",
          transform:
            "translate(0.00010000000000331966px, -0.00010000000000331966px)",
          width: "104px",
        }}
      />
      <GrainGradient
        colors={["#1264E8", "#FFFFFF", "#00D2FF", "#0F78EC0D"]}
        colorBack="#00000000"
        speed={2}
        scale={2.14}
        rotation={-360}
        offsetX={0}
        offsetY={0}
        softness={1}
        intensity={0.65}
        noise={0.3}
        shape="blob"
        frame={1974485.510000294}
        style={{
          backgroundColor: "#000000",
          height: "48px",
          left: "0",
          position: "fixed",
          top: "0",
          transform: "translate(0px, 0px)",
          width: "104px",
        }}
      />
      <div
        style={{
          backgroundImage:
            'url("https://workers.paper.design/file-assets/01K79XB8Z599SCCGKHPQQG9QDD/01K7A76NERAT9HGGYYHCYSYJKM.png")',
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          boxSizing: "border-box",
          height: "38px",
          left: "0",
          maxHeight: "none",
          maxWidth: "none",
          mixBlendMode: "difference",
          position: "relative",
          top: "0",
          transform: "translate(33px, 5px)",
          transformOrigin: "0% 0%",
          width: "38px",
        }}
      />
    </div>
  );
}
