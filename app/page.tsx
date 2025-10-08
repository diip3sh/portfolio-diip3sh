import { BgGradient } from "./components/BgGradient";
import { NewsletterSignUp } from "./components/NewsletterSignUp";
import { ChangelogBento } from "./components/ChangelogBento";
import { SpeakingBento } from "./components/SpeakingBento";
import { CommunityWallBento } from "./components/CommunityWallBento";
import { CalendarBento } from "./components/CalendarBento";
import { ToolboxBento } from "./components/ToolboxBento";
import { ConnectionsBento } from "./components/ConnectionsBento";
import { AnimatedProfilePicture } from "./components/AnimatedProfilePicture";
import { AnimatedText } from "./components/AnimatedText";
import { PhotoGallery } from "./components/PhotoGallery";
import { AboutMeBento } from "./components/about-me-bento";
import { AnimatedMobilePhotos } from "./components/AnimatedMobilePhotos";
import { GridWrapper } from "./components/GridWrapper";
import { H2Tag, HeaderTag, ParagraphTag, SpanTag } from "./components/html-tag";
import MagneticEffect from "./components/magnetic-effect";

export default async function Home() {
  const PROFILE_DELAY = 0;
  const HEADING_DELAY = PROFILE_DELAY + 0.2;
  const PARAGRAPH_DELAY = HEADING_DELAY + 0.1;
  const PHOTOS_DELAY = PARAGRAPH_DELAY + 0.1;

  return (
    <section>
      {/* //TODO:add something new here */}
      <AnimatedProfilePicture delay={PROFILE_DELAY} />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <AnimatedText
                as="h1"
                delay={HEADING_DELAY}
                className="relative mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
              >
                <HeaderTag>
                  Hey, I&apos;m Dip3sh! <br /> Welcome to my corner of the{" "}
                  <span className="font-italic italic">
                    <MagneticEffect>internet!</MagneticEffect>
                  </span>
                </HeaderTag>
              </AnimatedText>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <AnimatedText
                  as="p"
                  delay={PARAGRAPH_DELAY}
                  className="text-balance leading-8 tracking-tighter text-text-secondary"
                >
                  <ParagraphTag>
                    I&apos;m not just any average software engineer, I&apos;m a{" "}
                    <span className="font-italic italic">Design Engineer</span>{" "}
                    just kidding! I&apos;m a{" "}
                    <span className="font-italic font-medium italic text-text-primary">
                      Frontend Engineer
                    </span>{" "}
                    but in love with design and development. Yeah that means I
                    can create designs and make them functional.
                  </ParagraphTag>
                </AnimatedText>
              </div>
            </GridWrapper>
          </div>
          <div>
            {/* Desktop Photos */}
            <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
              <PhotoGallery animationDelay={PHOTOS_DELAY} />
            </div>

            {/* Mobile Photos */}
            <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
          </div>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          {/* <AboutPattern /> */}
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium uppercase tracking-widest text-sky-500">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                <H2Tag>
                  Here&apos;s how I make my mark on the{" "}
                  <span className="font-italic italic">
                    <MagneticEffect>gig!</MagneticEffect>
                  </span>
                </H2Tag>
              </h2>
            </GridWrapper>
          </div>

          {/* Content grid with background */}
          <div className="relative">
            {/* Background grid pattern */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `
          linear-gradient(to right, #a8a8a8 1px, transparent 1px),
          linear-gradient(to bottom, #a8a8a8 1px, transparent 1px)
        `,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 0",
                maskImage: `
          repeating-linear-gradient(
            to right,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 8px
          ),
          repeating-linear-gradient(
            to bottom,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 8px
          )
        `,
                WebkitMaskImage: `
          repeating-linear-gradient(
            to right,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 8px
          ),
          repeating-linear-gradient(
            to bottom,
            black 0px,
            black 3px,
            transparent 3px,
            transparent 8px
          )
        `,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />

            <GridWrapper className="relative z-10">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14]">
                <div className="col-span-1 m-2 md:col-span-5 lg:col-span-5 lg:row-span-6">
                  <AboutMeBento linkTo="/about" />
                </div>

                <div className="m-2 md:col-span-12 lg:col-span-7 lg:row-span-8">
                  <ConnectionsBento linkTo="/connections" />
                </div>

                <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                  <ToolboxBento linkTo="/toolbox" />
                </div>

                <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                  <CalendarBento />
                </div>

                <div className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7">
                  <ToolboxBento linkTo="/toolbox" />
                </div>

                <div className="md:col-span-12 lg:col-span-7 lg:row-span-5">
                  <CalendarBento />
                </div>
              </div>
            </GridWrapper>
          </div>
        </section>

        {/* Newsletter Section */}
        <section>
          <NewsletterSignUp />
        </section>
      </div>
    </section>
  );
}
