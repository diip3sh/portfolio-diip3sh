import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { SubHeadingText, TitleText } from "@/components/ui/text";
import { work } from "@/lib/data/work";

export default function Work() {
  return <Container gridOne={<WorkGridOne />} gridTwo={<WorkGridTwo />} />;
}

const WorkGridOne = () => {
  return (
    <div className="flex xl:h-[calc(100vh-10.5rem)] flex-col justify-between">
      <section></section>
      <section className="flex flex-col gap-6">
        <TitleText title="Works" />
        <p className="text-wrap text-muted-foreground max-w-3/4 font-sans">
          From zero to shipped, from startups to market leaders — here’s a few
          projects we’ve designed along the way.
        </p>
      </section>
    </div>
  );
};

const WorkGridTwo = () => {
  return (
    <div className="flex flex-col gap-6">
      <SubHeadingText text="Here's my work experience" />
      {work.map((item) => (
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
            {/* <div className="-mr-1.5 mt-2 flex h-px w-1/2 flex-row gap-2 bg-linear-to-r from-transparent via-transparent to-neutral-800/80"></div> */}
            <div className="flex min-w-24 flex-col justify-between whitespace-nowrap text-right text-xs">
              <div className="text-muted-foreground">{item.date}</div>
              <div className="text-muted-foreground">{item.location}</div>
            </div>
          </div>
          <ul className="px-4">
            {item.description.map((desc) => (
              <li
                typeof="circle"
                className="list-disc list-outside marker:text-primary font-sans"
                key={desc}
              >
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {/* </div> */}
      <PageFooter />
    </div>
  );
};
