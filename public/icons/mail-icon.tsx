"use client";

import type React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: string;
}

export function IconEnvelopeFill32({ size = "32px", ...props }: IconProps) {
  return (
    <svg
      height={size}
      viewBox="0 0 32 32"
      width={size}
      x="0px"
      xmlns="http://www.w3.org/2000/svg"
      y="0px"
      {...props}
    >
      <title>Mail</title>
      <path
        d="m16,14.882l15-7.5v-.382c0-2.206-1.794-4-4-4H5c-2.206,0-4,1.794-4,4v.382l15,7.5Z"
        data-color="color-2"
        fill="currentColor"
        strokeWidth="0"
      />
      <path
        d="m16,17.118L1,9.618v15.382c0,2.206,1.794,4,4,4h22c2.206,0,4-1.794,4-4v-15.382l-15,7.5Z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
}
