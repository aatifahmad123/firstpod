import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Firstpod - beyond the surface",
  description: "Thoughtful notes on making, culture, and the spaces in between.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
