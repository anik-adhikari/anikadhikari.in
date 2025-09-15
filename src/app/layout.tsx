import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FloatingDock } from "@/components/ui/floating-dock";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anik Adhikari",
  description: "Personal portfolio of Anik Adhikari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <FloatingDock items={[
          { title: "Home", icon: <></>, href: "/" },
          { title: "About", icon: <></>, href: "/about" },
          { title: "Projects", icon: <></>, href: "/projects" },
          { title: "Blog", icon: <></>, href: "/blog" },
          { title: "Contact", icon: <></>, href: "/contact" },
        ]} /> */}
      </body>
    </html>
  );
}
