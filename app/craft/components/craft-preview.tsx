"use client";

import type { Route } from "next";
import Link from "next/link";
import type { CraftType } from "@/lib/types/craft-type";

export default function CraftPreview({
  experiments,
}: {
  experiments: CraftType;
}) {
  const { slug, name, preview } = experiments;

  let href = "";
  let target = "_self";
  let externalIcon = false;
  if (experiments.type === "internal" || experiments.mdx === true) {
    href = `/lab/${slug}`;
  } else {
    href = experiments.href?.url ?? "";
    target = "_blank";
    externalIcon = true;
  }
  const resolution = {
    width: preview.base.width,
    height: preview.base.height,
  };
  const { placeholder } = preview.base;

  return (
    <Link
      className="group h-auto w-full rounded-xl outline-none ring-neutral-950 focus-visible:ring-1 dark:ring-neutral-50"
      href={href as Route}
      prefetch={true}
      target={target}
    >
      <div className="h-auto w-full rounded-xl border border-neutral-300 bg-linear-to-t from-neutral-300 to-neutral-200 p-1 dark:border-neutral-850 dark:from-neutral-850 dark:to-neutral-925">
        <div
          className="relative h-auto w-full overflow-hidden rounded-lg"
          style={{
            aspectRatio: `${resolution.width} / ${resolution.height}`,
          }}
        >
          <video
            autoPlay
            className="relative z-20 h-auto w-full"
            height={resolution.height}
            loop
            muted
            playsInline
            src={`/lab/${slug}/base.mp4`}
            style={{
              aspectRatio: `${resolution.width} / ${resolution.height}`,
            }}
            // type="video/mp4"
            width={resolution.width}
          />
          <div
            className="absolute top-0 left-0 z-10 h-full w-full bg-cover bg-no-repeat blur-lg"
            style={{
              backgroundImage: `url(${placeholder})`,
            }}
          />
          <div className="absolute top-0 left-0 z-30 h-full w-full bg-linear-to-b from-0% from-transparent to-neutral-925 opacity-75 transition-all duration-500 group-hover:opacity-95" />
          <div className="absolute top-0 left-0 z-40 h-full w-full">
            <div className="flex h-full w-full items-end justify-between p-3 sm:p-4">
              <div className="flex items-center justify-start gap-1 text-neutral-300 text-xs sm:text-sm">
                <span>{name}</span>
                {externalIcon && <ExternalIcon />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ExternalIcon() {
  return (
    <svg
      className="size-3 stroke-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>External Link</title>
      <path
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
