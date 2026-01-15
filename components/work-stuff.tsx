"use client";

import { ImageShowcase } from "./ui/image-showcase";

export const WorkStuff = () => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </section>
    </main>
  );
};
