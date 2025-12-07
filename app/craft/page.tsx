import type { Metadata } from "next";
import { DynamicFrameLayout } from "@/components/animated-ui/dynamic-frame-layout";
import { Header } from "@/components/section/header";
import { craft } from "@/data/craft";

export const metadata: Metadata = {
  title: "Craft",
  description: "A collection of my craft projects",
};

export default function CraftPage() {
  return (
    <>
      <Header title="Craft" />
      <DynamicFrameLayout
        className="h-full w-full overflow-hidden rounded-[14px]"
        frames={craft}
        gapSize={4}
        hoverSize={6}
      />
    </>
  );
}
