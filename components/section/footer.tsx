"use client";

import { DiscordIcon } from "@/public/icons/discord-icon";
import { IconGithub } from "@/public/icons/github-icon";
import { IconLinkedin } from "@/public/icons/linkedIn-icon";
import { IconEnvelopeFill32 } from "@/public/icons/mail-icon";
import { IconXTwitter } from "@/public/icons/x-icon";
import { ThemeToggleButton } from "../animated-ui/theme-toggle";
import { Typewriter } from "../animated-ui/word-rotate";
import { NavigationButton } from "./custom-button";

const socialLinks = [
  {
    href: "/",
    label: "Mail",
    icon: <IconEnvelopeFill32 size="16px" />,
    accent: "text-red-500 dark:text-red-400", // Gmail-style red
  },
  {
    href: "/",
    label: "GitHub",
    icon: <IconGithub size="16px" />,
    accent: "text-[#0969DA] dark:text-[#0969DA]", // GitHub blue accent
  },
  {
    href: "/",
    label: "Twitter",
    icon: <IconXTwitter size="16px" />,
    accent: "text-neutral-800 dark:text-neutral-200", // Twitter/X black
  },
  {
    href: "/",
    label: "LinkedIn",
    icon: <IconLinkedin size="18px" />,
    accent: "text-[#0A66C2] dark:text-[#0A66C2]", // LinkedIn official blue
  },
  {
    href: "/",
    label: "Discord",
    icon: <DiscordIcon size="18px" />,
    accent: "text-[#5865F2] dark:text-[#5865F2]", // Discord official blue
  },
];

export const Footer = () => (
  <div className="hidden md:block">
    <footer className="fixed bottom-5 w-full px-[5svw]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {socialLinks.map((item) => (
            <div key={item.label}>
              <NavigationButton
                accent={item.accent}
                href={item.href}
                icon={item.icon}
                text={item.label}
              />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-xs sm:text-sm">
            Built with{" "}
            <Typewriter
              className="text-primary"
              cursorChar={"_"}
              deleteSpeed={40}
              speed={70}
              text={["Myself", "Cursor"]}
              waitTime={2000}
            />
          </span>
          <ThemeToggleButton />
        </div>
        {/* <div className="text-xs sm:text-sm">Copyright © 2025</div> */}
      </div>
    </footer>
  </div>
);
