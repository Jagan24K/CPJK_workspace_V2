import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CPJK Workspace — Professional Workspace in Vadapalani, Chennai",
  description:
    "CPJK Workspace offers professional workspace solutions across two floors in Vadapalani, Chennai — 63 seats, six configurations, private cabins and virtual office plans starting from ₹5,000/month.",
  keywords: [
    "CPJK Workspace",
    "workspace Vadapalani",
    "office space Chennai",
    "virtual office Chennai",
    "coworking Vadapalani",
  ],
  openGraph: {
    title: "CPJK Workspace — Vadapalani, Chennai",
    description:
      "Professional workspace for teams that are ready to grow. Vadapalani, Chennai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-ink text-cream antialiased">{children}</body>
    </html>
  );
}
