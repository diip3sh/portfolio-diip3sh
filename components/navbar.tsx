import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeatMapButton } from "./ui/buttons";

export default function Navbar() {
  return (
    <div className="h-[60px] w-full py-2.5">
      <div className="flex items-center justify-between">
        <div className="p-px bg-muted rounded-xl ml-1.5">
          <Link
            href="/"
            className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl"
            aria-label="Home - diip3sh portfolio"
          >
            <Image
              src="/logo.png"
              alt="Globe"
              width={512}
              height={512}
              className="text-black size-8 rounded-xl"
            />
          </Link>
        </div>
        <HeatMapButton className="rounded-full flex gap-2 items-center cursor-pointer uppercase p-1">
          <div
            className={cn(
              "flex items-center gap-2 rounded-full bg-background px-4 py-1",
              "shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)]",
            )}
          >
            <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="">Open for work</span>
          </div>
        </HeatMapButton>
      </div>
    </div>
  );
}
