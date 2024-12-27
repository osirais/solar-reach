import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Cantarell } from 'next/font/google';

const cantarell = Cantarell({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: "Solar Reach Initiative",
  description:
    "At Solar Reach, we're committed to bringing sustainable, solar-powered light to areas where energy resources are scarce.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cantarell.className} overflow-clip`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
