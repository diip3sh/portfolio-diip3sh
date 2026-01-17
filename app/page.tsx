import { Add01FreeIcons, Attachment01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { AccordianComponent } from "@/components/ui/accordion";
import { SocialButton } from "@/components/ui/buttons";
import { ImageShowcase } from "@/components/ui/image-showcase";
import { SubHeadingText } from "@/components/ui/text";
import { WorkCardShuffle } from "@/components/work-card-shuffle";
import { WorkExperience } from "@/components/work-experience";
import { WorkStuff } from "@/components/work-stuff";
import {
  domainsData,
  faqs,
  homeSection1,
  openSourceContributions,
  stackData,
  whatIBuildData,
} from "@/lib/data/home";
import { GitHub } from "@/lib/svg/github";
import { Gmail } from "@/lib/svg/gmail";
import { XformerlyTwitter } from "@/lib/svg/x";

export default function Home() {
  return <Container gridOne={<HomeGridOne />} gridTwo={<HomeGridTwo />} />;
}

const HomeGridOne = () => {
  return (
    <div className="flex xl:h-[calc(100vh-10.5rem)] flex-col relative lg:justify-between gap-10">
      <section className="flex flex-col">
        {homeSection1.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-3 lg:grid-cols-5 gap-2"
          >
            <h3 className="col-span-1 text-muted-foreground uppercase">
              {item.title}
            </h3>
            <span className="col-span-2 lg:col-span-3 font-sans">
              {item.value}
            </span>
          </div>
        ))}
      </section>
      <section className="flex flex-col gap-4 lg:max-w-3/4">
        <div className="text-5xl font-sans font-semibold tracking-tight text-wrap">
          I turn beautiful designs into code that actually ships—and stays
          pretty.
        </div>
        <div className="flex gap-2.5 items-center w-full">
          <SocialButton onClickAction={"https://x.com/diip3sh"}>
            <XformerlyTwitter fill="#00000a" height={12} width={12} />
            <span>Twitter DM</span>
          </SocialButton>
          <span className="text-xs text-muted-foreground font-semibold">
            OR
          </span>
          <SocialButton onClickAction="mailto:pilla.dipesh@gmail.com">
            <Gmail fill="#00000a" height={12} width={12} />
            <span>Mail Me</span>
          </SocialButton>
        </div>
        <WorkExperience />
      </section>
    </div>
  );
};

const HomeGridTwo = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <SubHeadingText text="fields of work" />

          <p className="lg:max-w-[90%] text-muted-foreground text-wrap font-sans">
            Design & code with intent. Sharp. Functional. User-first. Zero
            fluff. Pure digital experiences that feel right and load/perform
            fast. 3+ years moving from promising startups to category-defining
            companies — wide range of verticals, latest tools, no compromises.
          </p>

          <div className="hidden xl:block">
            <WorkCardShuffle />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-8">
            {/* What I Build */}
            <div className="flex flex-col gap-2">
              <h4 className="text-muted-foreground uppercase text-sm">
                What I Build
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {whatIBuildData.map((text) => (
                  <div key={text} className="font-sans flex gap-4 items-center">
                    <HugeiconsIcon
                      icon={Add01FreeIcons}
                      className="text-muted-foreground"
                    />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Domains I've Shipped In */}
            <div className="flex flex-col gap-2">
              <h4 className="text-muted-foreground uppercase text-sm">
                Domains I've Shipped In
              </h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {domainsData.map((entry) => (
                  <div
                    key={entry.label}
                    className="font-sans flex gap-4 items-center"
                  >
                    <HugeiconsIcon
                      icon={entry.logo}
                      className="text-muted-foreground"
                      size={16}
                    />
                    <span>{entry.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack I Ship With */}
            <div className="flex flex-col gap-2">
              <h4 className="text-muted-foreground uppercase text-sm">
                Stacks
              </h4>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {stackData.map((entry) => (
                  <div
                    key={entry.label}
                    className="font-sans flex gap-3 items-center"
                  >
                    <Image
                      src={entry.logo}
                      alt={entry.label}
                      width={16}
                      height={16}
                      className="text-muted-foreground"
                    />
                    <span className="uppercase font-medium text-sm">
                      {entry.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SubHeadingText text="Features I Recently worked on" />

        <WorkStuff />

        <SubHeadingText text="open-source contributions" />

        <div className="flex flex-col md:flex-row gap-6">
          {openSourceContributions.map((item) => (
            <div key={item.project} className="flex flex-col gap-4">
              <ImageShowcase image={item.image} alt={item.project} />
              <div className="flex justify-between items-end">
                <Link
                  href={item.link}
                  className="font-medium uppercase flex items-center gap-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md touch-manipulation hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HugeiconsIcon icon={Attachment01Icon} className="size-4" />
                  {item.project}
                </Link>
                <div className="inline-flex items-center gap-2 rounded-md border border-border px-2 py-1 text-xs font-medium backdrop-blur-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 touch-manipulation shadown-xl">
                  <GitHub className="h-3 w-3 fill-muted-foreground" />
                  {item.stars}
                </div>
              </div>
              <p className="text-muted-foreground font-sans">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SubHeadingText text="Frequently Asked Questions" />

        <p className="lg:max-w-3/4 text-muted-foreground text-wrap font-sans">
          Got questions? I&apos;ve got answers. Here&apos;s everything you need
          to know about working with me.
        </p>

        <AccordianComponent data={faqs} />
      </div>

      <PageFooter />
    </div>
  );
};
