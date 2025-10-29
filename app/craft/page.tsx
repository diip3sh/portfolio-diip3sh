import type { Metadata, Route } from "next";
import Link from "next/link";
import Masonry from "./components/masonary";

export const metadata: Metadata = {
  title: "Craft",
  description: "A collection of my craft projects",
};

export default function CraftPage() {
  return (
    <>
      <header className="fixed top-0 z-10 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-5 text-primary tracking-tighter">
          <Link href={"/" as Route} prefetch={true}>
            <h1 className="font-normal text-[37px] italic leading-[38px]">
              (h.)
            </h1>
          </Link>
          <p className="text-[37px] italic leading-[38px]">Craft - by dip3sh</p>
        </div>
      </header>
      <main className="relative flex w-full items-start justify-center px-4 pt-24 pb-28 sm:items-center sm:px-8 sm:pt-28 sm:pb-28 md:px-20 md:pb-16 lg:items-start lg:pt-32 lg:pb-16 xl:px-0">
        <div className="h-full w-full max-w-7xl">
          <Masonry />
        </div>
      </main>
    </>
  );
}
