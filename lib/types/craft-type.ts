type MediaType = {
  type: "video" | "image";
  width: number;
  height: number;
  placeholder: string;
};

type AttributesType = {
  keyBoardAccessibility?: boolean;
  touchAccessibility?: boolean;
  pointerDeviceOnly?: boolean;
} | null;

export type CraftType = {
  slug: string;
  name: string;
  type: "internal" | "external";
  href: {
    url: string;
    type: "production" | "development";
  } | null;
  preview: {
    base: MediaType;
    square?: MediaType;
  };
  attributes: AttributesType;
  date: string;
  mdx: boolean;
  technologies: string[];
};
