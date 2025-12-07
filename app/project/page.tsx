import type { Metadata } from "next";
import Image from "next/image";
import { DraggableGallery } from "@/components/gallery/draggable-gallery";
import { Header } from "@/components/section/header";
import { works } from "@/data/work";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of my work",
};

export default function ProjectPage() {
  return (
    <div className="relative flex h-full min-h-0 flex-col bg-background">
      <Header title="Projects" />
      <main className="scrollbar-hide flex min-h-0 flex-1 items-start justify-center overflow-y-auto overflow-x-hidden px-4 pt-20 pb-16 sm:items-start">
        <div className="flex w-full max-w-3xl flex-col items-start gap-4">
          <p className="pb-4 text-md leading-5">
            Sometimes I design things out of fun. One-offs, things that might
            not be related to a big project. So in no particular order,
            here&apos;s some of my silly little projects.
          </p>
          {works.map((work) => (
            <div className="w-full" key={work.id}>
              <DraggableGallery className="w-full">
                {work.image.map((image) => (
                  <Image
                    alt={work.company}
                    className="aspect-7/4 h-auto w-full max-w-[720px] rounded-lg object-cover shadow-md"
                    draggable={false}
                    height={400}
                    key={image}
                    src={
                      "https://images.unsplash.com/photo-1761602545494-4cd002b4d2b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2242"
                    }
                    unoptimized
                    width={700}
                  />
                ))}
              </DraggableGallery>
              <p className="py-4 text-md text-muted-foreground leading-5">
                The <span className="text-primary">iMessage Tapback</span>{" "}
                bubble, accurately recreated in Figma using a combination of
                blend modes and fully using auto layout. Available on the Figma
                Community.
              </p>
            </div>
          ))}
        </div>
      </main>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[8dvh] bg-linear-to-t from-background" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[10dvh] bg-linear-to-b from-background" />
    </div>
  );
}
