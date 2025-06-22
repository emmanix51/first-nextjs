import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog site",
  description: "My first NextJS site, its a blog site",
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
        <header className="p-2 flex justify-between bg-slate-900">
          <div>
            <Link className="text-lg  text-white" href=".">
              Emman Blog
            </Link>
          </div>
          <div className="space-x-2">
            <Link className="text-white" href="/about">
              About
            </Link>
            <Link className="text-white" href="/contact-us">
              Contact Us
            </Link>
          </div>
        </header>
        {children}
        <footer>Footer</footer>
      </body>
    </html>
  );
}
