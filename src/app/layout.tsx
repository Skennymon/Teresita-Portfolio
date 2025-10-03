import type { Metadata } from "next";
import { Geist, Geist_Mono, Bitcount_Grid_Double } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ThemeProvider from "@/utils/ThemeProvider";

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
        className={`${geistSans.variable} ${geistMono.variable} ${bitCountDoubleInk.variable} antialiased`}
      >
          <Navbar />
          {children}
      </body>
    </html>
  );
}
