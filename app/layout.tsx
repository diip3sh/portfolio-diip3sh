import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Dithering } from "@paper-design/shaders-react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jet-brains-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

if (!siteUrl) {
  throw new Error("NEXT_PUBLIC_SITE_URL is not set");
}
const openGraphImage = "/og.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Design & Frontend Engineer",
    template: "%s | diip3sh",
  },
  description:
    "diip3sh is a Design & Frontend Engineer with 3+ years of experience building high-performance web and mobile applications. Specialized in React, Next.js, TypeScript, React Native, and AI-driven platforms with a strong focus on UX, accessibility, and performance.",
  keywords: [
    "diip3sh",
    "Design Engineer",
    "Frontend Engineer",
    "Design & Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "React Native",
    "UI Engineering",
    "UX Engineering",
    "AI Marketplace",
    "Web Performance",
    "Accessibility",
    "AWS",
    "Serverless Applications",
    "Portfolio",
  ],
  authors: [
    {
      name: "diip3sh",
      url: siteUrl,
    },
  ],
  applicationName: "diip3sh Portfolio",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "diip3sh — Design & Frontend Engineer",
    description:
      "Design & Frontend Engineer building scalable, user-centric web and mobile apps using React, Next.js, TypeScript, and React Native. Experience across AI platforms, fintech, and cloud-native systems.",
    url: siteUrl,
    siteName: "diip3sh Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: openGraphImage,
        width: 512,
        height: 512,
        alt: "diip3sh — Design & Frontend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    images: [openGraphImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} antialiased font-mono`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
        >
          Skip to content
        </a>
        <div className="flex flex-col min-h-screen px-3">
          <Dithering
            colorBack="#e5e5e5"
            colorFront="#ff6a00"
            shape="wave"
            type="8x8"
            size={2.2}
            speed={0.86}
            scale={0.68}
            className="absolute top-0 left-0 w-full h-screen -z-10 opacity-20 dithering-effect"
          />
          <Navbar />
          <div
            id="main-content"
            className={cn(
              "bg-background overflow-auto rounded-[25px] corner-squircle",
              "shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)]",
            )}
            style={{ height: `calc(100dvh - 120px)` }}
          >
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
