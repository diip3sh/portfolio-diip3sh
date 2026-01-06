import { Add01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Image from "next/image";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { Accordion04 } from "@/components/ui/accordion-04";
import { SocialButton } from "@/components/ui/buttons";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { SubHeadingText } from "@/components/ui/text";
import { WorkExperience } from "@/components/work-experience";
import {
  domainsData,
  homeSection1,
  stackData,
  whatIBuildData,
} from "@/lib/data/home";
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
          <SocialButton>
            <XformerlyTwitter fill="#00000a" height={12} width={12} />
            <span>Twitter DM</span>
          </SocialButton>
          <span className="text-xs text-muted-foreground font-semibold">
            OR
          </span>
          <SocialButton>
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
      <div className="flex flex-col gap-4">
        <SubHeadingText text="Few Works" />

        <div className="flex flex-col gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-4">
              <Image
                src={
                  "https://framerusercontent.com/images/GMRu9EwZtu12CzGtRcBYmg5yXvo.png"
                }
                alt="work"
                height={840}
                width={500}
                className="h-auto w-full lg:w-[max(min(100vw - 56px, 720px), 1px)] rounded-lg"
                sizes="(max-width: 720px) calc(100vw - 56px), 720px"
              />
              <div className="">
                <h3 className="font-medium uppercase">Vesta</h3>
                <p className="text-muted-foreground font-sans">
                  Product Design & Engineering
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <SubHeadingText text="Services" />

        <p className="lg:max-w-[80%] text-muted-foreground text-wrap font-sans">
          Design with intent - sharp, functional and user-first. No fluff, just
          digital experiences that feel right and work fast. From startups to
          market leaders, we&apos;ve done this for over 10 years for companies
          in a wide range of categories, using the best and latest tools.
        </p>

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
            <h4 className="text-muted-foreground uppercase text-sm">Stacks</h4>
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

      <div className="flex flex-col gap-4">
        <SubHeadingText text="Frequently Asked Questions" />

        <p className="lg:max-w-3/4 text-muted-foreground text-wrap font-sans">
          Got questions? I&apos;ve got answers. Here&apos;s everything you need
          to know about working with me.
        </p>

        <Accordion04 />
      </div>

      <PageFooter />
    </div>
  );
};
