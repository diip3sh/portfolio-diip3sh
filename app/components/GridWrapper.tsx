import clsx from "clsx";

export function GridWrapper({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={clsx(
        className,
        "relative w-full",
        "before:absolute before:top-0 before:h-px before:bg-border-primary/50",
        "before:-left-4 before:right-[-1rem] md:before:-left-8 md:before:right-[-2rem] lg:before:inset-x-0",
        "after:-left-4 after:right-[-1rem] md:after:-left-8 md:after:right-[-2rem] lg:after:inset-x-0",
        "after:absolute after:bottom-0 after:h-px after:bg-border-primary/50",
      )}
    >
      {children}
    </div>
  );
}
