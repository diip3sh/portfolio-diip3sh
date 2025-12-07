import type { Metadata } from "next";
import { instrumentSerif, inter } from "../components/ui/fonts";
import Providers from "../context/providers";
import { ebGaramond } from "../lib/fonts";
import "../index.css";
import { Footer } from "@/components/section/footer";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  metadataBase: new URL("https://diip3sh.netlify.app"),
  openGraph: {
    title: "Portfolio",
    description: "Portfolio",
    url: "https://diip3sh.netlify.app",
    siteName: "Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "Portfolio",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} ${ebGaramond.variable} bg-accent p-3 font-medium font-sans antialiased`}
      >
        <Providers>
          <div
            className={cn(
              "h-[93svh] overflow-hidden rounded-[14px]",
              "shadow-2xl shadow-accent"
            )}
          >
            <div className="relative h-full w-full">{children}</div>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
