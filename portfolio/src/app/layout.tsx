import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import Script from "next/script";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Viktor Avelino",
  description: "Viktor Avelino's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <Script
        defer
        src={
          process.env.NODE_ENV === "production"
            ? "https://umami.vkav.net/script.js"
            : ""
        }
        data-website-id="05e6e1ac-7ad4-4bae-9027-a8dd0dbd872f"
      ></Script>

      <body
        className={cn(
          "bg-background font-sans antialiased min-h-dvh",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
