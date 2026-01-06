"use client";

import { cn } from "@/lib/utils";
import { LineShadowText } from "./line-shadow-text";

export const TitleText = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <LineShadowText
      className={cn(
        "font-mono uppercase font-semibold tracking-tighter text-wrap leading-[7vw]",
        className,
      )}
      style={{
        fontSize: "clamp(3rem, 1.4155rem + 6.7606vw, 7.5rem)",
      }}
    >
      {title}
    </LineShadowText>
  );
};

export const SubHeadingText = ({ text }: { text: string }) => {
  return (
    <h3 className="uppercase text-2xl font-medium tracking-tight">{text}</h3>
  );
};
