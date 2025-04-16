"use client";
import NavBar from "@/components/common/topNav";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";

// Metadata 객체 export

export default function Calendar() {
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
    <div className="flex flex-col w-full h-full">
      <NavBar title="캘린더" link="#" />
      <div className="w-full max-h-full overflow-y-auto">
        <div className="w-full max-h-full overflow-y-auto">
          <div className="p-[20px] h-full">
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
    </div>
  );
}
