import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGroteskSans = Space_Grotesk({
  variable: "--font-space-grotesk-sans",
  subsets: ["latin"],
});

const spaceGroteskMono = Space_Grotesk({
  variable: "--font-space-grotesk-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Faisal",
  description: "Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGroteskSans.variable} ${spaceGroteskMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
