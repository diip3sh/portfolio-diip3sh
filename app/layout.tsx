import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://dip3sh.com";
const openGraphImage = "/android-chrome-512x512.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "diip3sh — Design & Frontend Engineer",
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
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#030712" },
  ],
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
    card: "summary_large_image",
    title: "diip3sh — Design & Frontend Engineer",
    description:
      "Design & Frontend Engineer specializing in React, Next.js, TypeScript, and React Native. Building fast, accessible, AI-powered interfaces.",
    creator: "@diip3sh",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono`}
      >
        <div className="flex flex-col bg-foreground/10 min-h-screen px-3">
          <Navbar />
          <div
            className="bg-background rounded-[14px] overflow-auto"
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
