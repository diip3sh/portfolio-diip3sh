import Image from "next/image";
import { cn } from "@/lib/utils";
import { HeatMapButton } from "./ui/buttons";

export default function Navbar() {
  return (
    <div className="h-[60px] w-full py-2.5">
      <div className="flex items-center justify-between">
        <div className="p-px bg-muted rounded-xl ml-1.5">
          <Image
            src="/logo.png"
            alt="Globe"
            width={512}
            height={512}
            className="text-black size-8 rounded-xl"
          />
        </div>
        <HeatMapButton className="rounded-full flex gap-2 items-center cursor-pointer uppercase p-[3px]">
          <div
            className={cn(
              "flex items-center gap-2 rounded-full bg-background px-4 py-1",
              "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
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
