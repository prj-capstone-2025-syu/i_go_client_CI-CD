"use client";
import BottomNav from "@/components/common/bottomNav";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${noto.className} antialiased`}>
        <div className="w-full h-[100dvh] bg-[#dfdfdf]">
          <style jsx>{`
            html {
              scroll-behavior: smooth;
            }
            a {
              cursor: pointer !important;
            }
          `}</style>
          <div
            id="layout-wrapper"
            className="relative h-full lg:w-[95%] w-full lg:max-w-[450px] flex flex-col items-center justify-between font-custom duration-500 layout-load preload lg:ml-[50%] mx-auto"
            draggableata-aos="fade"
            data-aos-duration="50"
            data-aos-once="true"
          >
            <main className="relative main-wrapper w-full h-[calc(100%-68px)]  shadow-xl bg-[#fff] pt-[48px]">
              {children}
            </main>
            <BottomNav />
            <div className="absolute top-[42%] left-[-100%] animate-bounce">
              <p>로고 위치</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
