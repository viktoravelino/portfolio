import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { CSPostHogProvider } from "./providers";
import PostHogPageView from "./PostHogPageView";

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
      <CSPostHogProvider>
        <body
          className={cn(
            "bg-background font-sans antialiased min-h-dvh",
            fontSans.variable
          )}
        >
          <PostHogPageView />
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
