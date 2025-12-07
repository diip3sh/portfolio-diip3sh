import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageSource = {
  src: string;
  alt: string;
};

type ShowImageListItemProps = {
  text: string;
  images: [ImageSource, ImageSource];
};

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";

  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-8">
      <h1 className="font-black text-7xl text-foreground transition-all duration-500 group-hover:opacity-40">
        {text}
      </h1>

      <div className={container}>
        <div className={effect}>
          <Image
            alt={images[1].alt}
            className="h-full w-full object-cover"
            height={64}
            src={images[1].src}
            unoptimized
            width={64}
          />
        </div>
      </div>

      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12"
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <Image
            alt={images[0].alt}
            className="h-full w-full object-cover"
            height={64}
            src={images[0].src}
            unoptimized
            width={64}
          />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Branding",
      images: [
        {
          src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1567262439850-1d4dc1fefdd0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Web design",
      images: [
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
    {
      text: "Illustration",
      images: [
        {
          src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 1",
        },
        {
          src: "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          alt: "Image 2",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-1 rounded-sm bg-background px-8 py-4">
      <h3 className="font-black text-muted-foreground text-sm uppercase">
        Our services
      </h3>
      {items.map((item) => (
        <RevealImageListItem
          images={item.images}
          key={item.text}
          text={item.text}
        />
      ))}
    </div>
  );
}

type HoverImageTextProps = {
  children: React.ReactNode;
  images: [ImageSource, ImageSource];
  className?: string;
};

function HoverImageText({ children, images, className }: HoverImageTextProps) {
  const container = "absolute right-0 top-0 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div
      className={cn("group relative h-fit w-fit overflow-visible", className)}
    >
      {children}

      <div className={container}>
        <div className={effect}>
          <Image
            alt={images[1].alt}
            className="h-full w-full object-cover"
            height={64}
            src={images[1].src}
            unoptimized
            width={64}
          />
        </div>
      </div>

      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12"
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <Image
            alt={images[0].alt}
            className="h-full w-full object-cover"
            height={64}
            src={images[0].src}
            unoptimized
            width={64}
          />
        </div>
      </div>
    </div>
  );
}

export {
  RevealImageList,
  RevealImageListItem,
  HoverImageText,
  type ShowImageListItemProps,
  type HoverImageTextProps,
  type ImageSource,
};
