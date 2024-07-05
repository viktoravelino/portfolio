import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { CSPostHogProvider } from "../components/providers";
import PostHogPageView from "../components/PostHogPageView";
import { Suspense } from "react";

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
          <Suspense>
            <PostHogPageView />
          </Suspense>
          {children}
        </body>
      </CSPostHogProvider>
    </html>
  );
}
