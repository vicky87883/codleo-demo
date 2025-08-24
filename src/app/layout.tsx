import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopNavbar from "@/components/layout/TopNavbar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
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
        <div className="min-h-screen flex flex-col relative">
          <div className="relative z-50">
            <TopNavbar />
            <Header />
          </div>
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
