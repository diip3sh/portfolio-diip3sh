import localFont from "next/font/local";
import { Playfair_Display, Public_Sans } from "next/font/google";

// export const myFont = localFont({
//   src: [
//     {
//       path: "../../public/fonts/LibreCaslonCondensed-Italic.woff2",
//       weight: "400",
//       style: "italic",
//     },
//     {
//       path: "../../public/fonts/LibreCaslonCondensed-MediumItalic.woff2",
//       weight: "500",
//       style: "italic",
//     },
//   ],
//   variable: "--font-italic",
// });

export const fontItalic = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "italic",
  variable: "--font-italic",
});

export const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-public-sans",
});
