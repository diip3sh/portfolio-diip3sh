import Image from "next/image";
import { Container } from "@/components/container";
import { PageFooter } from "@/components/page-footer";
import { SubHeadingText, TitleText } from "@/components/ui/text";

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
      <SubHeadingText text="Projects" />
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
      <PageFooter />
    </div>
  );
};
