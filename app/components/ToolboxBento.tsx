import { softwareData } from "../data/toolbox";
import { BentoCard } from "./BentoCard";

const items = softwareData
  .map((item, index) => (
    <div key={item.title} className="group inline-block text-center">
      <div
        className={`rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 ${
          index === 2
            ? "delay-0 group-hover:-translate-y-3"
            : index === 1 || index === 3
              ? "delay-100 group-hover:-translate-y-3"
              : "delay-200 group-hover:-translate-y-3"
        }`}
        style={{
          width: index === 2 ? 130 : 110,
          height: index === 2 ? 130 : 110,
        }}
      >
        <div
          className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
          style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
        >
          <img className="h-10 w-10" alt={item.title} src={item.imgSrc} />
        </div>
      </div>
    </div>
  ))
  .slice(0, 5);

export function ToolboxBento({
  linkTo,
  className,
}: {
  linkTo?: string;
  className?: string;
}) {
  return (
    <BentoCard className={className} height="h-full" linkTo={linkTo}>
      <div className="flex h-full flex-col">
        <div className="relative flex flex-1 items-center justify-center gap-4 rounded-[8px] border border-border-primary">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
      `,
              backgroundSize: "8px 8px, 32px 32px, 32px 32px",
            }}
          />
        </div>
        <div className="mt-5">Toolbox</div>
      </div>
    </BentoCard>
  );
}
