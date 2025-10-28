import type { Metadata } from "next";
import { instrumentSerif, inter } from "../components/ui/fonts";
import Providers from "../context/providers";
import "../index.css";
import { Footer } from "@/components/section/footer";

export const metadata: Metadata = {
  title: "portfolio",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-medium font-sans antialiased`}
      >
        <Providers>
          <div className="h-svh">
            <div className="relative min-h-screen w-full bg-background">
              {/* Paper Texture */}
              <div
                className="absolute inset-0 z-0"
                style={{
                  backgroundImage: `
        radial-gradient(circle at 1px 1px, color-mix(in oklch, var(--accent) 20%, transparent) 1px, transparent 0),
        repeating-linear-gradient(0deg, transparent, transparent 2px, color-mix(in oklch, var(--accent) 20%, transparent) 2px, color-mix(in oklch, var(--accent) 20%, transparent) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, color-mix(in oklch, var(--accent) 20%, transparent) 2px, color-mix(in oklch, var(--accent) 20%, transparent) 4px)
      `,
                  backgroundSize: "8px 8px, 32px 32px, 32px 32px",
                }}
              />
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
