"use client";

import { Attachment01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";
import { projectData } from "@/lib/data/home";
import { GitHub } from "@/lib/svg/github";
import { ImageShowcase } from "./ui/image-showcase";
import { Video } from "./ui/video";

export const WorkStuff = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* <section className="flex flex-col gap-4"> */}
      {projectData.map((item) => (
        <section className="flex flex-col gap-4" key={item.project}>
          <div className="rounded-xl border border-border bg-card p-1.5 shadow-md shadow-border">
            <Video
              src={item.video}
              className="h-full w-full rounded-lg object-cover lg:w-full"
            />
          </div>
          <div className="">
            <Link
              href={item.link}
              className="font-medium uppercase flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md touch-manipulation hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HugeiconsIcon icon={Attachment01Icon} className="size-4" />
              {item.project}
            </Link>
            <p className="text-muted-foreground font-sans">
              {item.description}
            </p>
          </div>
        </section>
      ))}
      {/* <ImageShowcase
          image="https://framerusercontent.com/images/GMRu9EwZtu12CzGtRcBYmg5yXvo.png"
          alt="Vesta project showcase - Product Design & Engineering"
        />
        <div className="">
          <h3 className="font-medium uppercase">Vesta</h3>
          <p className="text-muted-foreground font-sans">
            Product Design & Engineering
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <ImageShowcase
          image="https://framerusercontent.com/images/GMRu9EwZtu12CzGtRcBYmg5yXvo.png"
          alt="Vesta project showcase - Product Design & Engineering"
        />
        <div className="">
          <h3 className="font-medium uppercase">Vesta</h3>
          <p className="text-muted-foreground font-sans">
            Product Design & Engineering
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <ImageShowcase
          image="https://framerusercontent.com/images/GMRu9EwZtu12CzGtRcBYmg5yXvo.png"
          alt="Vesta project showcase - Product Design & Engineering"
        />
        <div className="">
          <h3 className="font-medium uppercase">Vesta</h3>
          <p className="text-muted-foreground font-sans">
            Product Design & Engineering
          </p>
        </div>
      </section>
      <section className="flex flex-col gap-4">
        <ImageShowcase
          image="https://framerusercontent.com/images/GMRu9EwZtu12CzGtRcBYmg5yXvo.png"
          alt="Vesta project showcase - Product Design & Engineering"
        />
        <div className="">
          <h3 className="font-medium uppercase">Vesta</h3>
          <p className="text-muted-foreground font-sans">
            Product Design & Engineering
          </p>
        </div>
      </section> */}
    </main>
  );
};
