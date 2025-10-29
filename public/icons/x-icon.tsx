"use client";

import type React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: string;
}

export function IconXTwitter({ size = "32px", ...props }: IconProps) {
  return (
    <svg
      height={size}
      viewBox="0 0 32 32"
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Twitter</title>
      <g className="nc-icon-wrapper" fill="currentColor">
        <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z" />
      </g>
    </svg>
  );
}
