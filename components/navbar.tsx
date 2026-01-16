import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LiquidMetalButton } from "./ui/buttons";

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
              alt="diip3sh logo"
              width={512}
              height={512}
              className="text-black size-8 rounded-xl"
            />
          </Link>
        </div>
        <Link
          href={"https://cal.com/pilla-dipesh-dnyt7l/15min"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LiquidMetalButton className="rounded-full flex gap-2 items-center cursor-pointer p-0.5">
            <div
              className={cn(
                "flex items-center gap-2 rounded-full bg-background px-4 py-1",
                "shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)]",
              )}
            >
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500"></span>
              </span>
              <span className="font-sans">Open to roles</span>
            </div>
          </LiquidMetalButton>
        </Link>
      </div>
    </div>
  );
}
