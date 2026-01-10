"use client";

import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type VideoProps = {
  src: string;
  className?: string;
};

export function Video({ src, className }: VideoProps) {
  const [ratio, setRatio] = useState(16 / 9);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMetadata = () => {
    if (videoRef.current) {
      const { videoWidth, videoHeight } = videoRef.current;
      if (videoWidth && videoHeight) {
        setRatio(videoWidth / videoHeight);
      }
    }
  };

  const handlePlay = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    const playPromise = video.play();
    if (playPromise !== undefined) {
      void playPromise.catch(() => {});
    }
  }, []);

  const handlePause = useCallback(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, []);

  return (
    <video
      ref={videoRef}
      onLoadedMetadata={handleMetadata}
      preload="metadata"
      style={{ aspectRatio: `${ratio}` }}
      className={cn(
        "h-auto w-full lg:w-[max(min(100vw - 56px, 720px), 1px)] rounded-lg aspect-video",
        className,
      )}
      controls={false}
      autoPlay={false}
      loop
      muted
      playsInline
      onFocus={handlePlay}
      onBlur={handlePause}
      onMouseEnter={handlePlay}
      onMouseLeave={handlePause}
      aria-label={`Video: ${src.split("/").pop() || "project video"}`}
    >
      <source src={src} type="video/mp4" />
      <track kind="captions" srcLang="en" label="English" default />
    </video>
  );
}
