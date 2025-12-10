import { Dock } from "@/components/Dock";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Anik Adhikari - Software Engineer",
    description:
        "Backend-focused full-stack developer with 2+ years of professional experience building scalable applications, tools and automating workflows. Skilled in designing efficient systems, robust APIs, cloud & AI services integration, and modern DevOps practices.",

    keywords: [
        "Anik Adhikari",
        "Anik",
        "Adhikari",
        "Software Engineer",
        "Engineer",
        "Full-Stack Developer",
        "Backend Developer",
        "Developer",
        "Programmer",
        "MERN Developer",
        "Next.js Developer",
        "Spring Boot Developer",
        "Python Developer",
        "AWS Developer",
        "DevOps Engineer",
        "Cloud Computing",
        "Resume",
        "CV",
        "Projects",
        "Portfolio",
    ],
    authors: [{ name: "Anik Adhikari", url: "https://anikadhikari.in" }],
    creator: "Anik Adhikari",
    publisher: "Anik Adhikari",

    metadataBase: new URL("https://anikadhikari.in"),
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
                <Dock />
            </body>
        </html>
    );
}
