import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-primary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FindMyMentor",
  description: "Find Your Perfect Trading Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>{children}</body>
      <GoogleAnalytics gaId="G-9V7156E24T" />
    </html>
  );
}
