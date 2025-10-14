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
import { GridPattern } from "./components/grid-pattern";
import { GithubBento } from "./components/github-bento";
import { ColorToggleBento } from "./components/color-toggle-bento";
import { AnimatedIllustrationBento } from "./components/animated-illustration-bento";

// Enable ISR with 24-hour revalidation for GitHub contributions
export const revalidate = 86400;

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
          <GridPattern>
            <GridWrapper>
              <div>
                {/* Desktop Photos */}
                <div className="relative hidden h-fit w-full items-center justify-center lg:flex">
                  <PhotoGallery animationDelay={PHOTOS_DELAY} />
                </div>

                {/* Mobile Photos */}
                <AnimatedMobilePhotos delay={PHOTOS_DELAY} />
              </div>
            </GridWrapper>
          </GridPattern>
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
          <GridPattern>
            <GridWrapper className="relative z-10 px-1 py-10">
              <div
                id="bento-div"
                className="max-auto grid w-full auto-rows-[20rem] grid-cols-1 gap-4 p-1 md:grid-cols-2 lg:grid-cols-12"
              >
                <div className="group overflow-hidden rounded-md md:col-span-1 lg:col-span-3">
                  <ColorToggleBento />
                </div>

                <div className="group overflow-hidden rounded-md md:col-span-1 lg:col-span-5">
                  <ConnectionsBento />
                </div>

                <div className="group overflow-hidden rounded-md md:col-span-2 md:row-span-1 lg:col-span-4 lg:row-span-2">
                  <AboutMeBento />
                </div>
                <div className="group overflow-hidden rounded-md md:col-span-1 lg:col-span-5">
                  <ToolboxBento />
                </div>
                <div className="group overflow-hidden rounded-md md:col-span-1 lg:col-span-3">
                  <GithubBento />
                </div>
              </div>
            </GridWrapper>
          </GridPattern>
        </section>

        {/* Newsletter Section */}
        <section>{/* <NewsletterSignUp /> */}</section>
      </div>
    </section>
  );
}
