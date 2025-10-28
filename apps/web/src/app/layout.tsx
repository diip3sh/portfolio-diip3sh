import { instrumentSerif, inter } from "@/components/ui/fonts";
import Providers from "@/context/providers";
import type { Metadata } from "next";
import "../index.css";

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
          <div className="h-svh">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
