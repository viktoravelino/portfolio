import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

import "./globals.css";
import { CSPostHogProvider } from "../providers/providers";
import PostHogPageView from "../components/PostHogPageView";
import { Suspense } from "react";
import Head from "next/head";

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
      <Head>
        <script
          defer
          src="https://umami.vkav.net/script.js"
          data-website-id="05e6e1ac-7ad4-4bae-9027-a8dd0dbd872f"
        ></script>
      </Head>
      
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
