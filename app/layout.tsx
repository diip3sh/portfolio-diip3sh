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
const siteTitle = "Method Studio — Product Design & Engineering";
const siteDescription =
  "Method is a boutique product design and engineering studio helping founders ship bold, user-first digital products with clarity and speed.";
const siteKeywords = [
  "product design",
  "design systems",
  "product engineering",
  "founder design partner",
  "nextjs portfolio",
  "method studio",
];
const openGraphImage = "/android-chrome-512x512.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Method Studio",
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "Method Studio", url: siteUrl }],
  applicationName: "Method Studio Portfolio",
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
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Method Studio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: openGraphImage,
        width: 512,
        height: 512,
        alt: "Method Studio marks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@methodstudio",
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
