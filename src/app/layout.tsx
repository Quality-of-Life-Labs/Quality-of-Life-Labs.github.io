import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Space_Mono,
} from "next/font/google";
import NavTabs from "@/components/nav-tabs";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Quality of Life Labs",
    template: "%s | Quality of Life Labs",
  },
  description:
    "Quality of Life Labs is building tools and stories that improve life across cities worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${spaceMono.variable} bg-white antialiased`}
      >
        <div className="pointer-events-none fixed left-1/2 top-6 z-50 -translate-x-1/2">
          <div className="pointer-events-auto">
            <NavTabs />
          </div>
        </div>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
