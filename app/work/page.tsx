"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { SubHeadingText, TitleText } from "@/components/ui/text";
import { work, workSection, type WorkSectionItem } from "@/lib/data/work";
import { WorkDetail } from "@/components/projects/work-detail";
import { cn } from "@/lib/utils";

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<WorkSectionItem>(workSection[0]);

  return (
    <Container
      gridOne={
        <WorkGridOne
          selectedWork={selectedWork}
          setSelectedWork={setSelectedWork}
        />
      }
      gridTwo={<WorkGridTwo selectedWork={selectedWork} />}
    />
  );
}

type WorkGridOneProps = {
  selectedWork: WorkSectionItem;
  setSelectedWork: (work: WorkSectionItem) => void;
};

const WorkGridOne = ({ selectedWork, setSelectedWork }: WorkGridOneProps) => {
  return (
    <div className="flex xl:h-[calc(100vh-10.5rem)] flex-col justify-between">
      {/* Index Section */}
      <section className="flex flex-col">
        <h3 className="font-semibold uppercase">
          Index
          <span className="text-primary text-xs pl-2 align-top font-normal">
            (Press any one)
          </span>
        </h3>
        {workSection.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedWork(item)}
            className={cn(
              "flex items-center gap-2 text-left transition-colors duration-200 group",
              selectedWork.id === item.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <h3
              className={cn(
                "uppercase transition-colors",
                selectedWork.id === item.id
                  ? "text-primary"
                  : "text-muted-foreground group-hover:text-primary"
              )}
            >
              {item.id}.
            </h3>
            <span className="font-sans">{item.title}</span>
            {selectedWork.id === item.id && (
              <motion.div
                layoutId="active-indicator"
                className="ml-auto h-1.5 w-1.5 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </section>

      {/* Work Detail Section */}
      <section className="flex flex-col gap-6 mt-8">
        <TitleText title="Works" />
        <p className="text-wrap text-muted-foreground max-w-3/4 font-sans">
          From zero to shipped, from startups to market leaders — here&apos;s my
          work experience.
        </p>
      </section>
    </div>
  );
};

const WorkGridTwo = ({selectedWork}: {selectedWork: WorkSectionItem}) => {
  return (
    <div className="flex flex-col gap-6">
      <SubHeadingText text="Here's my work experience" />
      {/* {work.map((item) => (
        <div key={item.id} className="flex flex-col gap-4">
          <div className="flex w-full flex-row items-center justify-between gap-4 overflow-hidden">
            <Link target="_blank" href={item.url || ""} rel="noopener">
              <div className="flex flex-row gap-2">
                <Image
                  src={item.image}
                  alt={item.company}
                  width={36}
                  height={36}
                  className="object-contain p-2 grayscale"
                  loading="lazy"
                  unoptimized
                />
                <div className="flex flex-col justify-between whitespace-nowrap">
                  <div className="space-x-2 text-sm font-medium">
                    <span className="uppercase">{item.company}</span>
                    {item.badge && (
                      <span className="select-none rounded-full bg-[#F2F2F3] px-2 py-0.5 text-[10px] text-[#18181B] border border-[#EEEFF0]">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground uppercase">
                    {item.title}
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex min-w-24 flex-col justify-between whitespace-nowrap text-right text-xs">
              <div className="text-muted-foreground">{item.date}</div>
              <div className="text-muted-foreground">{item.location}</div>
            </div>
          </div>
          <ul className="px-4">
            {item.description.map((desc) => (
              <li
                className="list-disc list-outside marker:text-primary font-sans"
                key={desc}
              >
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))} */}
      <AnimatePresence mode="wait">
          <WorkDetail key={selectedWork.dataKey} data={selectedWork} />
        </AnimatePresence>
      <PageFooter />
    </div>
  );
};
