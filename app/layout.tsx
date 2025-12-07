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
