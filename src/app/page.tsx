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
    <div className="flex flex-col w-full h-full">
      <NavBarMain link="#"></NavBarMain>
      <div className="flex flex-col items-center justify-start gap-[20px] p-[20px] w-full h-full ">
        {/* 프롬프트 입력창 */}
        <div className="relative w-full 2xl:max-w-[781px]">
          <input
            type="text"
            className="outline-none border-[1px] border-[#DFDFDF] shadow-[0px_0px_5px_rgba(0,0,0,0.2)] rounded-[6px] pr-[38px] pl-[15px] py-[12px] w-full font-[400] text-[15px] leading-[20px] text-[#383838] placeholder:!text-[#949494] focus:border-[#0B57E3]"
            placeholder="아이고 AI, 무엇을 도와드릴까요?"
          />
          <div className="absolute flex right-[11px] !top-[50%] !translate-y-[-50%]">
            <button className="p-[4px]" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
              >
                <path
                  fill="#0B57E3"
                  d="M13.267 13.984 8.883 9.6a3.673 3.673 0 0 1-1.166.675 4.125 4.125 0 0 1-1.417.242c-1.2 0-2.217-.417-3.05-1.25C2.417 8.434 2 7.428 2 6.25s.417-2.183 1.25-3.016c.833-.834 1.844-1.25 3.033-1.25 1.178 0 2.18.416 3.009 1.25.827.833 1.241 1.838 1.241 3.016A4.156 4.156 0 0 1 9.6 8.884L14 13.25l-.733.734ZM6.283 9.517c.9 0 1.667-.32 2.3-.958a3.16 3.16 0 0 0 .95-2.309c0-.9-.316-1.67-.95-2.308a3.119 3.119 0 0 0-2.3-.958c-.91 0-1.686.319-2.325.958A3.146 3.146 0 0 0 3 6.25c0 .9.32 1.67.958 2.309a3.166 3.166 0 0 0 2.325.958Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* 진행중인 일정 */}
        <div className="w-full bg-[#fff] p-[15px] rounded-[6px] shadow-[0px_0px_5px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between pb-[15px] border-b-[1px] border-[#dfdfdf] md:!border-[0px]">
            <p className="text-[#1a1a1a] text-[15px] font-[700] tracking-[-0.4px]">
              진행중인 일정
            </p>
            <p className="text-[#ff2f01] text-[14px] font-[600] tracking-[-0.4px]">
              지각입니다!!
            </p>
          </div>

          <a
            href="#"
            className="flex items-start  flex-col  justify-between gap-x-[10px] gap-y-[4px] w-full bg-[#fff] border-b-[1px] border-[#dfdfdf] py-[7px] px-[10px] lg:px-[20px] hover:bg-[#dfdfdf]"
          >
            <p className="w-full text-[#383838] text-[13px] line-clamp-1 pr-[15px]">
              제목은 첫줄까지만 표시됩니다. 제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.
            </p>
            <div className="flex flex-row gap-x-[3px] md:gap-x-[15px] xl:gap-x-[65px]">
              <p className="w-full text-[#777] text-[13px] pr-[5px] min-w-[68px] text-left md:text-center whitespace-nowrap">
                YYYY-MM-DD TT:MM
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-start  flex-col  justify-between gap-x-[10px] gap-y-[4px] w-full bg-[#fff] border-b-[1px] border-[#dfdfdf] py-[7px] px-[10px] lg:px-[20px] hover:bg-[#dfdfdf]"
          >
            <p className="w-full text-[#383838] text-[13px] line-clamp-1 pr-[15px]">
              제목은 첫줄까지만 표시됩니다. 제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.
            </p>
            <div className="flex flex-row gap-x-[3px] md:gap-x-[15px] xl:gap-x-[65px]">
              <p className="w-full text-[#777] text-[13px] pr-[5px] min-w-[68px] text-left md:text-center whitespace-nowrap">
                YYYY-MM-DD TT:MM
              </p>
            </div>
          </a>
        </div>
        {/* 길찾기 */}
        <div className="w-full bg-[#fff] p-[15px] rounded-[6px] shadow-[0px_0px_5px_rgba(0,0,0,0.2)]">
          <p className="pb-[10px] text-[#1A1A1A] text-[17px] font-[700] tracking-[-0.4px]">
            빠른 길찾기
          </p>
          <div className="quick-access-wrap grid-3xl grid grid-cols-4  gap-x-[10px] sm:gap-x-[18px] gap-y-[10px] w-full">
            <a
              href="https://map.kakao.com"
              target="_blank"
              className="flex flex-col items-center justify-center gap-y-[8px] w-full bg-[#fff] sm:py-[20px] border-[1px] border-[transparent] hover:border-[#0B57E3]"
            >
              <div className="w-full h-auto aspect-square bg-[#dfdfdf]"></div>
              <p className="text-[#1A1A1A] text-[13px] lg:text-[14px] line-clamp-1 font-[500] tracking-[-0.4px] px-[5px] text-center">
                카카오맵
              </p>
            </a>
            <a
              href="https://map.kakao.com"
              target="_blank"
              className="flex flex-col items-center justify-center gap-y-[8px] w-full bg-[#fff] sm:py-[20px] border-[1px] border-[transparent] hover:border-[#0B57E3]"
            >
              <div className="w-full h-auto aspect-square bg-[#dfdfdf]"></div>
              <p className="text-[#1A1A1A] text-[13px] lg:text-[14px] line-clamp-1 font-[500] tracking-[-0.4px] px-[5px] text-center">
                티맵
              </p>
            </a>
            <a
              href="https://map.kakao.com"
              target="_blank"
              className="flex flex-col items-center justify-center gap-y-[8px] w-full bg-[#fff] sm:py-[20px] border-[1px] border-[transparent] hover:border-[#0B57E3]"
            >
              <div className="w-full h-auto aspect-square bg-[#dfdfdf]"></div>
              <p className="text-[#1A1A1A] text-[13px] lg:text-[14px] line-clamp-1 font-[500] tracking-[-0.4px] px-[5px] text-center">
                카카오네비
              </p>
            </a>
            <a
              href="https://map.kakao.com"
              target="_blank"
              className="flex flex-col items-center justify-center gap-y-[8px] w-full bg-[#fff] sm:py-[20px] border-[1px] border-[transparent] hover:border-[#0B57E3]"
            >
              <div className="w-full h-auto aspect-square bg-[#dfdfdf]"></div>
              <p className="text-[#1A1A1A] text-[13px] lg:text-[14px] line-clamp-1 font-[500] tracking-[-0.4px] px-[5px] text-center">
                구글맵
              </p>
            </a>
          </div>
        </div>
        {/* 다가오는 일정 */}
        <div className="w-full bg-[#fff] p-[15px] rounded-[6px] shadow-[0px_0px_5px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between pb-[15px] border-b-[1px] border-[#dfdfdf] md:!border-[0px]">
            <p className="text-[#1a1a1a] text-[15px] font-[700] tracking-[-0.4px]">
              다가오는 일정
            </p>
            <a href="#" className="flex items-center gap-x-[7px] !text-[#555]">
              <span className="text-[#555] text-[13px] font-[400] tracking-[-0.4px]">
                더보기
              </span>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.12706 5.57169L3.73071 0.177143C3.49392 -0.0590475 3.11029 -0.0590475 2.8729 0.177143C2.63612 0.413333 2.63612 0.796967 2.8729 1.03316L7.84122 5.99968L2.8735 10.9662C2.63671 11.2024 2.63671 11.586 2.8735 11.8228C3.11029 12.059 3.49452 12.059 3.73131 11.8228L9.12766 6.42826C9.36086 6.19451 9.36086 5.80484 9.12706 5.57169Z"
                  fill="#949494"
                ></path>
              </svg>
            </a>
          </div>

          <div className="hidden  items-start lg:items-center flex-row lg:!flex-row justify-between gap-x-[10px] gap-y-[4px] w-full bg-[#F6F8FC] border-t-[1px] border-[#949494] py-[13px] px-[10px] lg:px-[20px]">
            <p className="font-[500] w-full text-[#383838] text-[13px] line-clamp-1 pr-[15px]">
              제목
            </p>
            <div className="flex flex-row gap-x-[3px] md:gap-x-[15px] xl:gap-x-[65px]">
              <p className="font-[500] w-full text-[#383838] text-[13px] line-clamp-1 pr-[2px] md:pr-[5px] min-w-[68px] text-left md:text-center">
                조회일시
              </p>
            </div>
          </div>

          <a
            href="#"
            className="flex items-start  flex-col  justify-between gap-x-[10px] gap-y-[4px] w-full bg-[#fff] border-b-[1px] border-[#dfdfdf] py-[7px] px-[10px] lg:px-[20px] hover:bg-[#dfdfdf]"
          >
            <p className="w-full text-[#383838] text-[13px] line-clamp-1 pr-[15px]">
              제목은 첫줄까지만 표시됩니다. 제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.
            </p>
            <div className="flex flex-row gap-x-[3px] md:gap-x-[15px] xl:gap-x-[65px]">
              <p className="w-full text-[#777] text-[13px] pr-[5px] min-w-[68px] text-left md:text-center whitespace-nowrap">
                YYYY-MM-DD TT:MM
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-start  flex-col  justify-between gap-x-[10px] gap-y-[4px] w-full bg-[#fff] border-b-[1px] border-[#dfdfdf] py-[7px] px-[10px] lg:px-[20px] hover:bg-[#dfdfdf]"
          >
            <p className="w-full text-[#383838] text-[13px] line-clamp-1 pr-[15px]">
              제목은 첫줄까지만 표시됩니다. 제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.
            </p>
            <div className="flex flex-row gap-x-[3px] md:gap-x-[15px] xl:gap-x-[65px]">
              <p className="w-full text-[#777] text-[13px] pr-[5px] min-w-[68px] text-left md:text-center whitespace-nowrap">
                YYYY-MM-DD TT:MM
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-start  flex-col  justify-between gap-x-[10px] gap-y-[4px] w-full bg-[#fff] border-b-[1px] border-[#dfdfdf] py-[7px] px-[10px] lg:px-[20px] hover:bg-[#dfdfdf]"
          >
            <p className="w-full text-[#383838] text-[13px] line-clamp-1 pr-[15px]">
              제목은 첫줄까지만 표시됩니다. 제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.
            </p>
            <div className="flex flex-row gap-x-[3px] md:gap-x-[15px] xl:gap-x-[65px]">
              <p className="w-full text-[#777] text-[13px] pr-[5px] min-w-[68px] text-left md:text-center whitespace-nowrap">
                YYYY-MM-DD TT:MM
              </p>
            </div>
          </a>
          <a
            href="#"
            className="flex items-start  flex-col  justify-between gap-x-[10px] gap-y-[4px] w-full bg-[#fff] border-b-[1px] border-[#dfdfdf] py-[7px] px-[10px] lg:px-[20px] hover:bg-[#dfdfdf]"
          >
            <p className="w-full text-[#383838] text-[13px] line-clamp-1 pr-[15px]">
              제목은 첫줄까지만 표시됩니다. 제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.제목은 첫줄까지만 표시됩니다.제목은
              첫줄까지만 표시됩니다.
            </p>
            <div className="flex flex-row gap-x-[3px] md:gap-x-[15px] xl:gap-x-[65px]">
              <p className="w-full text-[#777] text-[13px] pr-[5px] min-w-[68px] text-left md:text-center whitespace-nowrap">
                YYYY-MM-DD TT:MM
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
