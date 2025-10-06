type HardwareDataItem = {
  title: string;
  description: string;
  link: string;
};

type SoftwareDataItem = {
  title: string;
  imgSrc: string;
  link: string;
};

const softwareData: SoftwareDataItem[] = [
  {
    title: "Raycast",
    imgSrc: "/raycast_logo.png",
    link: "https://raycast.com/?via=braydon",
  },
  {
    title: "Dia",
    imgSrc: "/dia_logo.png",
    link: "https://www.diabrowser.com/",
  },
  {
    title: "Cursor AI",
    imgSrc: "/cursor_logo.png",
    link: "https://cursor.com/?from=home",
  },
  {
    title: "Eagle",
    imgSrc: "/eagle_logo.png",
    link: "https://eagle.cool/",
  },
  {
    title: "Obsidian",
    imgSrc: "/obsidian_logo.png",
    link: "https://obsidian.md/",
  },
  {
    title: "Ghostty",
    imgSrc: "/ghostty_logo.png",
    link: "https://ghostty.org/",
  },
  {
    title: "Perplexity",
    imgSrc: "/perplexity_logo.png",
    link: "https://www.perplexity.ai/",
  },
  {
    title: "Music",
    imgSrc: "/music_logo.png",
    link: "https://music.apple.com/us/new",
  },
  {
    title: "Figma",
    imgSrc: "/figma_logo.png",
    link: "https://www.figma.com/",
  },
  {
    title: "Shortwave",
    imgSrc: "/shortwave_logo.png",
    link: "https://www.shortwave.com/",
  },
  {
    title: "Rive",
    imgSrc: "/rive_logo.png",
    link: "https://rive.app/",
  },
  {
    title: "1Password",
    imgSrc: "/1password_logo.png",
    link: "https://1password.com/",
  },
  {
    title: "Framer",
    imgSrc: "/framer_logo.png",
    link: "https://www.framer.com/",
  },
  {
    title: "Shottr",
    imgSrc: "/shottr_logo.jpeg",
    link: "https://shottr.cc/",
  },
  {
    title: "Insomnia",
    imgSrc: "/insomnia_logo.png",
    link: "https://insomnia.rest/",
  },
  {
    title: "Linear",
    imgSrc: "/linear_logo.png",
    link: "https://linear.app/",
  },
];

const hardwareData: HardwareDataItem[] = [
  {
    title: "MacBook Air (13 inch), 2025",
    description:
      "10-core CPU, 8-core GPU, 16-core Neural Engine, 16GB unified memory, 256GB SSD storage",
    link: "https://www.apple.com/shop/buy-mac/macbook-air/",
  },
  {
    title: "Airpods Pro (2022)",
    description:
      "Apple's latest Airpods Pro with active noise cancellation and spatial audio.",
    link: "https://www.apple.com/airpods-pro/",
  },
  {
    title: "GIGABYTE M27Q-X 27 Monitor",
    description: "A 240Hz 1440P KVM monitor that I use for work and gaming.",
    link: "https://www.gigabyte.com/Monitor/M27Q-X-rev-10#kf",
  },
];

export { hardwareData, softwareData };
