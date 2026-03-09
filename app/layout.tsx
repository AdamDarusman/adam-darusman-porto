import type React from "react";
import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Sophie Petrova | Portfolio",
  description: "Editorial Fashion Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
