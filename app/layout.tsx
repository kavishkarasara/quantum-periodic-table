import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/ChatBot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quantum Periodic Table | Interactive & Animated",
  description: "Explore the elements with this highly interactive, beautifully animated, and glowing Quantum Periodic Table.",
  keywords: ["Periodic Table", "Chemistry", "Interactive Elements", "Science Web App", "Isotopes", "Neon Periodic Table"],
  openGraph: {
    title: "Quantum Periodic Table",
    description: "A futuristic and animated periodic table of elements.",
    url: "https://quantum-periodic-table.vercel.app",
    siteName: "Quantum Periodic Table",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ChatBot />
      </body>
    </html>
  );
}
