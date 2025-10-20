import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Bitcount_Grid_Double,
  PT_Serif,
  Limelight,
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bitCountDoubleInk = Bitcount_Grid_Double({
  variable: "--font-bitcount-double",
  subsets: ["latin"],
  weight: "300",
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: "400",
});

const limeLight = Limelight({
  variable: "--font-limelight",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Teresita Portfolio",
  description: "Teresita Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bitCountDoubleInk.variable} ${ptSerif.variable} ${limeLight.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
