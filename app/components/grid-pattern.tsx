"use client";

export function GridPattern({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #C9C9C9 0.5px, transparent 1px),
        linear-gradient(to bottom, #C9C9C9 0.5px, transparent 1px)
      `,
          backgroundSize: "40px 40px",
        }}
      />
      {children}
    </div>
  );
}
