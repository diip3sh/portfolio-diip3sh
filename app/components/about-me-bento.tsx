import Image from "next/image";
import { getTimeOfDayGreeting } from "../lib/utils";
import { BentoCard } from "./BentoCard";
import { PixelatedCanvas } from "./pixaleted-canvas";

export function AboutMeBento({ linkTo }: { linkTo?: string }) {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <BentoCard height="h-[275px] md:h-[304px] lg:h-[220px]" linkTo={linkTo}>
      <div className="group flex h-full">
        <div className="text-balance">
          <h2 className="mb-4 text-base font-medium">Learn more about me</h2>
          <p className="mb-2 text-balance pr-1 text-text-secondary md:pr-4">
            Frontend Engineer with 3 years of experience in the field and strong
            foundation in Design and Development.
          </p>
        </div>
        <div className="relative">
          <div
            className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 ease-out group-hover:border-indigo-400"
            style={{ width: 188, height: 270 }}
          >
            <PixelatedCanvas
              src="https://images.unsplash.com/photo-1756894256833-934a85a42df9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              width={180}
              height={270}
              cellSize={3}
              dotScale={0.9}
              shape="square"
              backgroundColor="#000000"
              dropoutStrength={0.4}
              interactive
              distortionStrength={3}
              distortionRadius={80}
              distortionMode="swirl"
              followSpeed={0.2}
              jitterStrength={4}
              jitterSpeed={4}
              sampleAverage
              tintColor="#FFFFFF"
              tintStrength={0.2}
              className="rounded-xl border border-neutral-800 shadow-lg"
              objectFit="contain"
            />
          </div>
          {/* <div className="group inline-block text-center">
            <div
              className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 ease-out group-hover:border-indigo-400"
              style={{ width: 188, height: 278 }}
            >
              <div
                className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
              ></div>
            </div>
          </div> */}
          {/* <Image
            className="absolute -top-1 left-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105"
            src={
              "https://images.unsplash.com/photo-1746881523816-7693c797c3b4?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="A headshot"
            width={180}
            height={270}
          /> */}
        </div>
      </div>
    </BentoCard>
  );
}
