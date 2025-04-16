"use client";
import NavBar from "@/components/common/topNav";
import type { Metadata } from "next"; // Metadata 타입 임포트
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

// Metadata 객체 export

export default function Calendar() {
  const metadata: Metadata = {
    title: "아이고 - AI 지각방지 솔루션",
    description: "아이고 - Ai 지각방지 솔루션",
    icons: {
      icon: "/imgs/favi-icon.png",
      shortcut: "/imgs/favi-icon.png",
      apple: "/imgs/favi-icon.png",
    },
  };
  const events = [
    {
      title: "아침 먹기",
      start: "2024-03-17",
      end: "2024-03-17",
      color: "#fb8494",
    },
    {
      title: "점심 먹기",
      start: "2024-03-19",
      end: "2024-03-20",
      color: "#fb8494",
    },
    {
      title: "저녁 먹기",
      start: "2024-03-23",
      end: "2024-03-30",
      color: "#fb8494",
    },
  ];

  return (
    <div>
      <div>
        <NavBar title="캘린더" link="#"></NavBar>
        <div className="p-[20px]">
          <FullCalendar
            initialView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={events}
          />
          <FullCalendar
            plugins={[listPlugin]}
            initialView="listWeek"
            events={events}
          />
        </div>
      </div>
    </div>
  );
}
