"use client"
import {Noto_Sans_JP} from "next/font/google";
import { UIProvider } from "@yamada-ui/react";
//import type { Metadata } from "next";
import "./globals.css";
import Header from "@/component/header";
import Footer from "@/component/footer";


const inter = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

// export const metadata: Metadata = {
//   title: "ポートフォリオサイト",
//   description: "Generated by create next app",
// };

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="ja">
      <body className={inter.className}>
        <UIProvider>
          <Header/>
          {children}
          <Footer/>
        </UIProvider>
      </body>
    </html>
  );
}
