"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center relative">
      <h3
        className="text-2xl font-semibold uppercase tracking-tighter"
        style={{
          fontSize: "clamp(3rem, 1.4155rem + 6.7606vw, 7.5rem)",
        }}
      >
        Not found.
      </h3>
      <p className="text-2xl font-sans text-center">
        But that's ok. You can go back to
        <br /> the{" "}
        <Link href="/" className="underline font-semibold text-primary">
          keep exploring
        </Link>
        .
      </p>
    </div>
  );
}
