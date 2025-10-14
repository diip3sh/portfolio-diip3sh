"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { BentoCard } from "./BentoCard";

type ChannelKey = "H" | "S" | "L";

const channelOrder: ChannelKey[] = ["H", "S", "L"];

export function ColorToggleBento({ className }: { className?: string }) {
  const [activeChannel, setActiveChannel] = useState<ChannelKey>("H");

  const handleSelectChannel = (channel: ChannelKey) => {
    setActiveChannel(channel);
  };

  const handleChannelKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    channel: ChannelKey,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveChannel(channel);
      return;
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault();
      const currentIndex = channelOrder.indexOf(activeChannel);
      const nextIndex =
        (currentIndex - 1 + channelOrder.length) % channelOrder.length;
      setActiveChannel(channelOrder[nextIndex]);
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault();
      const currentIndex = channelOrder.indexOf(activeChannel);
      const nextIndex = (currentIndex + 1) % channelOrder.length;
      setActiveChannel(channelOrder[nextIndex]);
    }
  };

  return (
    <BentoCard className={className} height="h-full">
      <div className="flex h-full flex-col">
        <div className="relative flex flex-1 items-center justify-center gap-4 rounded-[8px] border border-border-primary">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
      `,
              backgroundSize: "8px 8px, 32px 32px, 32px 32px",
            }}
          />
          {channelOrder.map((channel) => (
            <div
              key={channel}
              className="z-10 flex size-12 cursor-pointer items-center justify-center rounded-full border border-border-primary bg-white transition-transform duration-200 ease-out data-[active=true]:-translate-y-1 data-[active=true]:border-indigo-400 data-[active=true]:shadow-lg"
              role="button"
              tabIndex={0}
              aria-pressed={activeChannel === channel}
              aria-label={`Toggle ${channel} channel`}
              onClick={() => handleSelectChannel(channel)}
              onKeyDown={(event) => handleChannelKeyDown(event, channel)}
              data-active={activeChannel === channel}
            >
              <span
                className="text-sm font-medium text-text-secondary data-[active=true]:text-indigo-500"
                data-active={activeChannel === channel}
              >
                {channel}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between">
          <h2 className="text-base font-medium uppercase tracking-wide">
            Pick a color
          </h2>
          <ArrowUp className="size-5" />
        </div>
      </div>
    </BentoCard>
  );
}
