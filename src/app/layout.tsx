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
  title: "RAKESH D.R — Software Developer | Information Science & Systems",
  description:
    "Portfolio of RAKESH D.R — Software developer and Information Science Engineering student at SIT Tumakuru. Specializing in C, C++, Java, Spring Boot, WebRTC, and backend systems.",
  keywords: [
    "RAKESH D.R",
    "Software Developer",
    "Information Science",
    "Backend Developer",
    "Spring Boot",
    "Java",
    "C++",
    "WebRTC"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#050505] text-[#f5f5f5] flex flex-col">
        {children}
      </body>
    </html>
  );
}
