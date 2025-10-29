import type { Metadata } from "next";
import { Header } from "@/components/section/header";

export const metadata: Metadata = {
  title: "Work",
  description: "A collection of my work",
};

export default function WorkPage() {
  return (
    <>
      <Header title="Work" />
      <main className="relative flex w-full items-start justify-center px-4 pt-24 pb-28 sm:items-center sm:px-8 sm:pt-28 sm:pb-28 md:px-20 md:pb-16 lg:items-start lg:pt-32 lg:pb-16 xl:px-0">
        <div className="h-full w-full max-w-7xl">
          <div className="relative">Work</div>
        </div>
      </main>
    </>
  );
}
