import type { Metadata } from "next";
import { instrumentSerif, inter } from "../components/ui/fonts";
import Providers from "../context/providers";
import { ebGaramond } from "../lib/fonts";
import "../index.css";
import { Footer } from "@/components/section/footer";
import { cn } from "@/lib/utils";

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
        className={`${inter.variable} ${instrumentSerif.variable} ${ebGaramond.variable} bg-sidebar p-3 font-medium font-sans antialiased`}
      >
        <Providers>
          <div
            className={cn(
              "h-[93svh] overflow-hidden rounded-[14px]",
              "shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]"
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
