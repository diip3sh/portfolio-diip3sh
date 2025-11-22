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
    <>
      <Header title="Projects" />
      <main className="relative flex h-full w-full items-start justify-center overflow-x-hidden px-4 pt-24 pb-28 sm:items-center sm:px-8 sm:pt-28 sm:pb-28 md:px-20 lg:items-start lg:pt-32 lg:pb-16 xl:px-0">
        <div className="flex h-full w-full max-w-3xl flex-col items-start justify-center gap-4">
          <p className="pb-4 text-md leading-5">
            Sometimes I design things out of fun. One-offs, things that might
            not be related to a big project. So in no particular order,
            here&apos;s some of my silly little projects.
          </p>
          {works.map((work) => (
            <div className="w-full" key={work.id}>
              <DraggableGallery className="w-[calc(50vw+50%)]">
                {work.image.map((image) => (
                  <Image
                    alt={work.company}
                    className="h-[400px] w-[700px] rounded-lg shadow-md"
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
    </>
  );
}
