import type { Metadata } from "next";
import { Spectral, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const spectral = Spectral({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-spectral",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "An Tran | Portfolio",
  description: "Full-stack developer and designer creating beautiful digital experiences | Portfolio showcasing projects and creative work",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spectral.variable} ${playfair.variable} antialiased bg-[#121416] text-[#ededed] overflow-x-hidden font-serif font-extralight`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
