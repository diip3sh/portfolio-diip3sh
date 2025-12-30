import Image from "next/image";

export default function Navbar() {
  return (
    <div className="h-[60px] w-full py-3">
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
        <button
          type="button"
          className="bg-background px-4 py-2 rounded-full flex gap-2 items-center cursor-pointer uppercase"
        >
          <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Open for work</span>
        </button>
      </div>
    </div>
  );
}
