"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import NavBarMain from "@/components/common/topNavMain";
import { Suspense } from "react";

// --- 유틸리티 및 아이콘 컴포넌트 ---

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const GoogleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        {...props}
    >
      <path
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          fill="#4285F4"
      />
      <path
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          fill="#34A853"
      />
      <path
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
          fill="#FBBC05"
      />
      <path
          d="M12 5.45c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          fill="#EA4335"
      />
      <path d="M1 1h24v24H1z" fill="none" />
    </svg>
);

// --- 토큰 검증 유틸리티 함수 ---
const getAccessToken = (): string | null => {
  if (typeof window === 'undefined') return null;

  // localStorage에서 access_token 확인
  const token = localStorage.getItem('access_token');
  if (token) return token;

  // 쿠키에서 access_token 확인
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');
    if (name === 'access_token') {
      return value;
    }
  }

  // URL 파라미터에서 access_token 확인 (OAuth 리다이렉트 후)
  const urlParams = new URLSearchParams(window.location.search);
  const urlToken = urlParams.get('access_token');
  if (urlToken) {
    // URL에서 받은 토큰을 localStorage에 저장
    localStorage.setItem('access_token', urlToken);
    return urlToken;
  }

  return null;
};

const isLoggedIn = (): boolean => {
  const token = getAccessToken();
  return token !== null && token !== '';
};

// --- 채팅 UI 관련 타입 및 컴포넌트 정의 ---

interface ActionButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

interface Message {
  id: string;
  text: string;
  time: string;
  sender: { name: string; avatarUrl: string };
  isSenderMe: boolean;
  actions?: ActionButtonProps[];
  actionsDisabled?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
                                                     text,
                                                     icon,
                                                     onClick,
                                                     disabled,
                                                   }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="w-full flex items-center justify-center px-4 py-2.5 text-sm font-bold text-gray-800 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </button>
);

const MessageItem: React.FC<{ message: Message }> = ({ message }) => {
  const myMessageBubbleClass =
      "bg-[#01274f] text-white rounded-l-xl rounded-br-xl";
  const partnerMessageBubbleClass =
      "bg-white text-[#383838] border border-gray-200 rounded-r-xl rounded-bl-xl";
  const partnerMessageContainerClass = "justify-start pr-10";
  const myMessageContainerClass = "justify-end pl-10";

  return (
      <div
          className={`select-none flex w-full mb-3 ${
              message.isSenderMe
                  ? myMessageContainerClass
                  : partnerMessageContainerClass
          }`}
      >
        {!message.isSenderMe && (
            <div className="mr-[10px] self-end shrink-0">
              <div aria-label={message.sender.name} className="outline-none">
                <div
                    className="w-[36px] h-[36px] bg-contain bg-center bg-[#fff] bg-no-repeat rounded-full border border-gray-200"
                    style={{ backgroundImage: `url("${message.sender.avatarUrl}")` }}
                ></div>
              </div>
            </div>
        )}
        <div
            className={`flex flex-col ${
                message.isSenderMe ? "items-end" : "items-start"
            }`}
        >
          <div
              className={`group max-w-xs md:max-md p-3 shadow-sm ${
                  message.isSenderMe
                      ? myMessageBubbleClass
                      : partnerMessageBubbleClass
              }`}
          >
            <p className="text-sm font-normal leading-relaxed whitespace-pre-wrap">
              {message.text}
            </p>
            {message.actions && !message.isSenderMe && (
                <div className="mt-4 flex flex-col space-y-2">
                  {message.actions.map((action, index) => (
                      <ActionButton
                          key={index}
                          text={action.text}
                          icon={action.icon}
                          onClick={action.onClick}
                          disabled={message.actionsDisabled}
                      />
                  ))}
                </div>
            )}
          </div>
          <p
              className={`outline-none text-xs text-gray-400 font-light leading-4 tracking-tight mt-1 ${
                  message.isSenderMe ? "mr-1" : "ml-1"
              }`}
          >
            {message.time}
          </p>
        </div>
      </div>
  );
};

// --- 메인 로직 컴포넌트 ---
const ChatInterface = () => {
  const router = useRouter();
  const messageAreaRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([]);
  const [isFlowRunning, setIsFlowRunning] = useState(false);

  // useRef를 사용하여 온보딩 흐름 중복 실행 방지
  const onboardingFlowHasRun = useRef(false);

  const aiPartner = { name: "아이고 AI", avatarUrl: "/logo.png" };
  const currentUser = { name: "나", avatarUrl: "..." };

  // 로그인 상태 확인 및 리다이렉트
  useEffect(() => {
    // 로그인 상태 확인
    if (isLoggedIn()) {
      // 로그인된 상태라면 이전 페이지로 이동
      // history.length가 1이면 직접 URL로 접근한 경우이므로 홈으로 이동
      if (window.history.length > 1) {
        router.back();
      } else {
        // 직접 URL로 접근한 경우 메인 페이지나 대시보드로 이동
        router.push('/'); // 또는 '/dashboard', '/main' 등 원하는 페이지
      }
      return;
    }
  }, [router]);

  // 범용 메시지 
  const addMessage = (
      text: string,
      sender: any,
      options: Partial<Message> = {}
  ) => {
    const newMessage: Message = {
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      text,
      sender,
      isSenderMe: sender === currentUser,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
      ...options,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  //useEffect에 중복 실행 방지 로직
  useEffect(() => {
    // 로그인된 상태라면 온보딩 흐름을 실행하지 않음
    if (isLoggedIn()) return;

    // 온보딩 흐름이 이미 실행되었거나, 다른 AI 흐름이 진행 중이면 중복 실행 방지
    if (onboardingFlowHasRun.current || isFlowRunning) {
      return;
    }

    const runOnboardingFlow = async () => {
      setIsFlowRunning(true);
      onboardingFlowHasRun.current = true; // 온보딩 흐름 실행됨으로 표시

      await sleep(1000);
      addMessage("아이고... 또 지각하셨나요? 🐢", aiPartner);

      await sleep(1000);
      addMessage(
          "제가 도와드릴게요!✌️\n날씨, 교통상황 등 실시간 정보를 확인해 최적의 출발시간을 알려드려요!",
          aiPartner
      );

      await sleep(2000);
      addMessage("혹시 이전에 아이고를 이용하신 적이 있으신가요⁉️", aiPartner, {
        actions: [
          { text: "응!", onClick: () => runLoginFlow() },
          { text: "아니, 처음이야!", onClick: () => runSignupFlow() },
        ],
      });
      setIsFlowRunning(false);
    };

    runOnboardingFlow();
  }, []); // 빈 의존성 배열 유지

  // 버튼 비활성화 로직
  const disablePreviousActions = () => {
    setMessages((prev) =>
        prev.map((msg) => (msg.actions ? { ...msg, actionsDisabled: true } : msg))
    );
  };

  // 로그인 흐름
  const runLoginFlow = async () => {
    if (isFlowRunning) return;
    setIsFlowRunning(true);
    disablePreviousActions();

    addMessage("응! 이용한 적 있어.", currentUser);

    await sleep(1000);
    addMessage(
        "다시 돌아오신 것을 환영해요!\n로그인을 진행해주세요.",
        aiPartner,
        {
          actions: [
            {
              text: "Google 계정으로 로그인",
              icon: <GoogleIcon />,
              onClick: () => {
                //TODO: 백엔드 URL 설정
                //const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://igo.ai.kr';
                const BACKEND_URL = 'http://localhost:8080';
                // Google OAuth 인증 URL로 리다이렉트
                window.location.href = `${BACKEND_URL}/oauth2/authorization/google`;
              },
            },
          ],
        }
    );
    addMessage("아이고에 대한 설명이 필요하신가요?", aiPartner, {
      actions: [
        { text: "응! 잘 기억이 안나네ㅠ", onClick: () => runSignupFlow() },
      ],
    });
    setIsFlowRunning(false);
  };

  // 회원가입 흐름
  const runSignupFlow = async () => {
    if (isFlowRunning) return;
    setIsFlowRunning(true);
    disablePreviousActions();

    addMessage("설명이 필요해 😂", currentUser);

    await sleep(1000);
    addMessage(
        "반복되는 일상은 루틴으로 ↩️\n한 번만 등록하면 돼요!",
        aiPartner
    );

    await sleep(1500);
    addMessage(
        "알람은 출발시간 전에 딱!⏰\n앱을 안켜도 푸시로 알려드릴게요!",
        aiPartner
    );
    await sleep(1500);
    addMessage(
        "날씨가 안 좋은 날엔 센스있게 ☔\n준비물에 우산을 추가해서 알려드려요!",
        aiPartner
    );
    await sleep(1500);
    addMessage(
        "길이 막히면 좀 더 일찍 🏃‍♂️\n출발시간을 설정해드려요! ",
        aiPartner
    );

    await sleep(2000);
    addMessage(
        "이젠 아이고...가 아닌 I GO! 하실 차례!🤲\n센스 넘치는 IGO와 함께 하시겠어요?",
        aiPartner,
        {
          actions: [
            {
              text: "Google 계정으로 시작하기",
              icon: <GoogleIcon />,
              onClick: () => {
                //TODO: 백엔드 URL 설정
                //const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'https://igo.ai.kr';
                const BACKEND_URL = 'http://localhost:8080';
                // Google OAuth 인증 URL로 리다이렉트
                window.location.href = `${BACKEND_URL}/oauth2/authorization/google`;
              },
            },
          ],
        }
    );
    setIsFlowRunning(false);
  };

  // 스크롤 맨 아래로
  useEffect(() => {
    if (messageAreaRef.current) {
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }
  }, [messages]);

  // 로그인된 상태라면 빈 화면을 보여주거나 로딩 표시
  if (isLoggedIn()) {
    return (
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">이전 페이지로 이동 중...</p>
          </div>
        </div>
    );
  }

  return (
      <div className="flex flex-col grow h-full w-full bg-[#F9F9F9] overflow-hidden">
        <div
            ref={messageAreaRef}
            className="grow px-4 py-5 flex flex-col overflow-y-auto gap-y-2"
        >
          {messages.map((msg) => (
              <MessageItem key={msg.id} message={msg} />
          ))}
        </div>
      </div>
  );
};

// --- 페이지 최종 렌더링 ---
export default function ChatPage() {
  return (
      <Suspense fallback={<div>로딩...</div>}>
        <div className="flex flex-col w-full h-full">
          <style jsx global>{`
            .btn-history-back {
              pointer-events: none;
            }
            .main-wrapper {
              height: 100dvh !important;
            }
            .bottom-nav-warpper {
              display: none !important;
            }
          `}</style>
          <NavBarMain link="/greeting" />
          <ChatInterface />
        </div>
      </Suspense>
  );
}