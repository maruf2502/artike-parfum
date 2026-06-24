import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parfum Unisex: Wangi Tanpa Batas Gender yang Wajib Kamu Coba",
  description: "Dunia wewangian sedang mengalami revolusi. Temukan panduan lengkap tentang parfum unisex, alasan popularitasnya, dan cara memilih aroma terbaik untuk kepribadianmu.",
  keywords: ["parfum unisex", "parfum gender neutral", "wewangian unisex", "parfum untuk pria dan wanita", "cara memilih parfum unisex", "parfum unisex terbaik"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
