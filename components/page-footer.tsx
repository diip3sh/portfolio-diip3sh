import { GitHub } from "@/lib/svg/github";
import { LinkedInIcon } from "@/lib/svg/linkedin";
import { XformerlyTwitter } from "@/lib/svg/x";

export const PageFooter = () => {
  return (
    <div className="flex flex-col gap-2 text-muted-foreground text-sm font-sans">
      <span>
        Designed and Build by{" "}
        <span className="text-primary font-medium">@diip3sh</span>
      </span>
      <span>
        Source code on{" "}
        <span className="underline font-bold uppercase tracking-normal font-mono">
          GitHub
        </span>
      </span>
      <div className="flex gap-2 items-center">
        <span>Follow on</span>
        <XformerlyTwitter
          fill="#00000a"
          height={12}
          width={12}
          aria-label="X (formerly Twitter)"
        />
        ,{" "}
        <LinkedInIcon
          fill="#00000a"
          height={16}
          width={16}
          aria-label="LinkedIn"
        />{" "}
        OR <GitHub fill="#00000a" height={16} width={16} aria-label="GitHub" />
      </div>
    </div>
  );
};
