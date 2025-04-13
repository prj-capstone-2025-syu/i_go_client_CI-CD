"use client";
import QuickNav from "@/components/common/quickNav";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
            <div className="w-full h-full bg-[#dfdfdf]">
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        a {
          cursor: pointer !important;
        }
      `}</style>
      <div id="layout-wrapper" className="relative h-[100vh] lg:w-[95%] w-full lg:max-w-[450px] flex flex-col items-center justify-between font-custom duration-500 layout-load preload lg:ml-[50%] mx-auto" draggableata-aos="fade" data-aos-duration="50" data-aos-once="true">
        <main className="main-wrapper w-full h-[calc(100%-68px)] shadow-xl bg-[#fff]">{children}</main>
        <QuickNav />
        <div className="absolute top-[42%] left-[-100%] animate-bounce">
        <p>로고 위치</p>
        </div>
      </div>
    </div>
        
      </body>
    </html>
  );
}
