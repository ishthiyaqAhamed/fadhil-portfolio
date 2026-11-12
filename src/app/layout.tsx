import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fadhil Zakwan . — Gemologist & Visual Storyteller",
  description:
    "Official portfolio of Fadhil Zakwan — Certified Gemologist, Creative Researcher, and Visual Storyteller. Explore studies, capabilities, career experience, and gemology essays.",
  keywords: [
    "Fadhil Zakwan",
    "Gemologist",
    "Gemology Portfolio",
    "Gemstone Grading",
    "Visual Communication",
    "Personal Blog",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-[#0d0d0d] font-sans selection:bg-[#0d0d0d] selection:text-white">
        {children}
      </body>
    </html>
  );
}
