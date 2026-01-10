"use client";
import { Accordion } from "@base-ui/react/accordion";
import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, MotionConfig, motion } from "motion/react";

type DataProp = {
  question: string;
  answer: React.ReactNode;
};

export const AccordianComponent = ({ data }: { data: DataProp[] }) => {
  return (
    <MotionConfig transition={{ type: "spring", stiffness: 120, damping: 20 }}>
      <AnimatePresence>
        <Accordion.Root
          className="flex w-full flex-col gap-4 justify-center font-sans tracking-wide"
          keepMounted
          suppressHydrationWarning
        >
          {data.map((item) => (
            <Accordion.Item
              render={
                <motion.div
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                  }}
                  variants={{
                    expanded: {
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    },
                    collapsed: {
                      opacity: 0.85,
                      scale: 0.995,
                      y: -2,
                    },
                  }}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                />
              }
              key={item.question}
              className="data-open:bg-primary rounded-[14px] corner-squircle bg-[#e5e5e5] data-open:text-secondary"
            >
              <Accordion.Header className="">
                <Accordion.Trigger className="group relative flex w-full items-start justify-between gap-4 py-2 pr-1 pl-3 text-left font-medium focus-visible:z-1 focus-visible:outline focus-visible:outline-primary">
                  {item?.question}
                  <div className="border border-black p-1.5 flex items-center justify-center rounded-full mr-2 group-data-panel-open:bg-secondary group-data-panel-open:border-none">
                    <HugeiconsIcon
                      icon={ArrowRight02Icon}
                      className=" size-4 shrink-0 transition-all ease-out group-data-panel-open:scale-110 group-data-panel-open:rotate-45 group-data-panel-open:text-primary"
                    />
                  </div>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden text-base transition-[height] ease-out data-ending-style:h-0 data-starting-style:h-0">
                <div className="p-3">{item.answer}</div>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </AnimatePresence>
    </MotionConfig>
  );
};
