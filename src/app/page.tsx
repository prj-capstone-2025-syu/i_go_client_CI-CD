import NavBarMain from "@/components/common/topNavMain";
import type { Metadata } from "next"; // Metadata 타입 임포트

// Metadata 객체 export
export const metadata: Metadata = {
  title: "아이고 - AI 지각방지 솔루션",
  description: "아이고 - Ai 지각방지 솔루션",
  icons: {
    icon: "/imgs/favi-icon.png",
    shortcut: "/imgs/favi-icon.png",
    apple: "/imgs/favi-icon.png",
  },
};

export default function Home() {
  return (
    <div>
      <NavBarMain link="#"></NavBarMain>
    </div>
  );
}
