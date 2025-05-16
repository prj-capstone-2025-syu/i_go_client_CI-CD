// app/page.tsx 또는 해당 Home 컴포넌트가 위치한 파일 경로
"use client"; // ChatInterface 및 하위 컴포넌트들이 상태와 이벤트를 사용하므로 최상위에 명시

import React, { useState, useEffect, useRef } from "react";
import NavBarMain from "@/components/common/topNavMain"; // 사용자 제공 경로
// --- 아이콘 컴포넌트 정의 ---
interface IconProps extends React.SVGProps<SVGSVGElement> {}

const ChevronLeftIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 19.5L8.25 12l7.5-7.5"
    ></path>
  </svg>
);

const SearchIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    ></path>
  </svg>
);

const DotsVerticalIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
    ></path>
  </svg>
);

const ProfileInformationIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
    ></path>
  </svg>
);

const VoiceCallIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    ></path>
  </svg>
);

const SharedMediaIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
    ></path>
  </svg>
);

const BlockContactIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
    ></path>
  </svg>
);

const AttachmentIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
    ></path>
  </svg>
);

const EmojiIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
    ></path>
  </svg>
);

const MicrophoneIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
    ></path>
  </svg>
);

const SendIcon: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    ></path>
  </svg>
);
// --- 아이콘 컴포넌트 정의 끝 ---

// --- 채팅 UI 관련 타입 및 컴포넌트 정의 ---
interface User {
  name: string;
  avatarUrl: string;
  lastSeen?: string;
  isOnline?: boolean;
}

interface Message {
  id: string;
  text: string;
  time: string;
  sender: User;
  isSenderMe: boolean;
}

interface ChatHeaderProps {
  groupName?: string;
  groupAvatarUrl?: string;
  participant?: User;
  lastSeen?: string;
  onBack?: () => void;
  onSearch?: () => void;
  onMenuToggle?: () => void;
  isMenuOpen?: boolean; // 메뉴 상태를 받을 수 있도록 추가
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  groupName,
  groupAvatarUrl,
  participant,
  lastSeen,
  onBack,
  onSearch,
  onMenuToggle,
  isMenuOpen,
}) => {
  const displayName = groupName || participant?.name || "Chat";
  const avatarUrl =
    groupAvatarUrl ||
    participant?.avatarUrl ||
    "https://via.placeholder.com/150";

  return (
    <div className="w-full min-h-[5.25rem] px-5 py-6 border-b !border-[#01274f]">
      <div className="w-full flex justify-center items-center">
        <div className="group mr-4 md:hidden">
          <button
            onClick={onBack}
            className="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 w-7 h-7"
            title="Close conversation"
            aria-label="Close conversation"
          >
            <ChevronLeftIcon className="w-[1.25rem] h-[1.25rem] text-gray-300 group-hover:text-indigo-300" />
          </button>
        </div>
        <div className="flex grow">
          <button className="mr-5 outline-none" aria-label="Profile avatar">
            <div
              className="w-[2.25rem] h-[2.25rem] rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url("${avatarUrl}")` }}
            ></div>
          </button>
          <div className="flex flex-col">
            <p
              className="outline-none text-[20px] text-black opacity-60  font-semibold leading-4 tracking-[.01rem] mb-2 default-outline cursor-pointer"
              tabIndex={0}
            >
              {displayName}
            </p>
            {lastSeen && (
              <p
                className="outline-none text-[14px] tracking-[-0.8px] text-black opacity-60 font-[500] leading-4 tracking-[.01rem] default-outline rounded-[.25rem]"
                tabIndex={0}
                aria-label={`Last seen ${lastSeen}`}
              >
                {lastSeen}
              </p>
            )}
          </div>
        </div>
        <div className="flex">
          <button
            onClick={onSearch}
            className="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 w-7 h-7 mr-3"
            title="Search messages"
            aria-label="Search messages"
          >
            <SearchIcon className="w-[1.25rem] h-[1.25rem] text-gray-400 group-hover:text-indigo-300" />
          </button>
          <div className="relative">
            <button
              onClick={onMenuToggle}
              className="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 w-7 h-7"
              id="open-conversation-menu"
              tabIndex={0}
              aria-expanded={isMenuOpen}
              aria-controls="conversation-menu"
              title="Toggle conversation menu"
              aria-label="Toggle conversation menu"
            >
              <DotsVerticalIcon className="w-[1.25rem] h-[1.25rem] text-gray-400 group-hover:text-indigo-300" />
            </button>
            {/* ConversationMenu가 ChatInterface에서 isMenuOpen 상태에 따라 렌더링됩니다. */}
          </div>
        </div>
      </div>
    </div>
  );
};

interface ConversationMenuItemProps {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isDestructive?: boolean;
}

const ConversationMenuItem: React.FC<ConversationMenuItemProps> = ({
  label,
  icon,
  onClick,
  isDestructive,
}) => (
  <button
    onClick={onClick}
    className={`w-full px-4 py-3 flex items-center border-b outline-none text-sm border-gray-200 dark:border-gray-600 transition-all duration-200
                ${
                  isDestructive
                    ? "text-red-500 dark:hover:text-red-50 hover:bg-red-50 active:bg-red-100 dark:hover:bg-red-900"
                    : "text-black  opacity-60 dark:opacity-70 active:bg-gray-100 dark:hover:bg-gray-600 dark:focus:bg-gray-600 hover:bg-gray-50"
                }`}
    role="menuitem"
  >
    {icon} {label}
  </button>
);

interface ConversationMenuProps {
  // isOpen: boolean; // ChatInterface에서 관리하므로 직접적인 prop은 제거 가능, 또는 스타일링 위해 유지
  // onClose: () => void;
}

const ConversationMenu: React.FC<ConversationMenuProps> = () => {
  // 실제 메뉴 아이템들은 props나 내부 데이터로 관리
  const menuItems: ConversationMenuItemProps[] = [
    {
      label: "Profile Information",
      icon: (
        <ProfileInformationIcon className="h-5 w-5 mr-3 text-black opacity-60  dark:opacity-70" />
      ),
      onClick: () => console.log("Profile Info clicked"),
    },
    {
      label: "Voice call",
      icon: (
        <VoiceCallIcon className="h-5 w-5 mr-3 text-black opacity-60  dark:opacity-70" />
      ),
      onClick: () => console.log("Voice call clicked"),
    },
    {
      label: "Shared media",
      icon: (
        <SharedMediaIcon className="h-5 w-5 mr-3 text-black opacity-60  dark:opacity-70" />
      ),
      onClick: () => console.log("Shared media clicked"),
    },
    {
      label: "Block contact",
      icon: <BlockContactIcon className="h-5 w-5 mr-3" />,
      onClick: () => console.log("Block contact clicked"),
      isDestructive: true,
    },
  ];

  return (
    <div
      className="right-0 absolute z-[100] w-[12.5rem] mt-2 rounded-sm bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-600 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="open-conversation-menu"
      tabIndex={-1}
    >
      <div role="none">
        {menuItems.map((item) => (
          <ConversationMenuItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
};

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const bubbleOrderClass = message.isSenderMe
    ? "order-1 ml-[8px]"
    : "order-2 mr-[8px]"; // Adjusted for avatar logic
  const bubbleBgClass = message.isSenderMe
    ? "bg-indigo-50 dark:bg-gray-600 rounded-tl"
    : "bg-gray-50 !bg-[#01274f] !text-white rounded-tr"; // Dark mode bg for received slightly different
  const avatarContainerClass = message.isSenderMe
    ? "order-2"
    : "order-1 mr-[10px]";
  const timeAndStatusContainerClass = message.isSenderMe
    ? "order-1 mr-[10px]"
    : "order-3 ml-[10px]";

  return (
    <div
      className={`select-none xs:mb-6 md:mb-5 flex items-end ${
        message.isSenderMe ? "justify-end" : "justify-start"
      }`}
    >
      {!message.isSenderMe && (
        <div className={avatarContainerClass}>
          {" "}
          {/* Avatar for receiver */}
          <div aria-label={message.sender.name} className="outline-none">
            <div
              className="w-[2.25rem] h-[2.25rem] bg-cover bg-center rounded-full"
              style={{
                backgroundImage: `url("${
                  message.sender.avatarUrl || "https://via.placeholder.com/150"
                }")`,
              }}
            ></div>
          </div>
        </div>
      )}
      <div className={timeAndStatusContainerClass}>
        <p className="outline-none text-xs text-black opacity-60  dark:opacity-70 font-light leading-4 tracking-[.01rem] whitespace-pre">
          {message.time}
        </p>
      </div>
      <div
        className={`group max-w-[31.25rem] p-5 rounded-b transition duration-500 ${bubbleBgClass} ${bubbleOrderClass}`}
      >
        <p
          className="text-[14px] font-normal leading-4 tracking-[.01rem] outline-none text-white opacity-60  dark:opacity-70"
          tabIndex={0}
        >
          {message.text}
        </p>
      </div>
    </div>
  );
};

interface MessageInputProps {
  onSendMessage: (messageText: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [messageText, setMessageText] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set to scroll height
    }
  };

  useEffect(() => {
    adjustTextareaHeight();
  }, [messageText]);

  const handleSubmit = () => {
    if (messageText.trim()) {
      onSendMessage(messageText.trim());
      setMessageText("");
      // After sending, reset height if needed, or it will be handled by useEffect on messageText change
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessageText(event.target.value);
  };

  return (
    <div className="w-full border-t !border-[#01274f]">
      <div className="h-auto min-h-[60px] p-[15px] flex items-end">
        <div className="min-h-[2.75rem]">
          <button
            className="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 w-7 h-7 md:mr-5 xs:mr-4"
            title="Open select attachments modal"
            aria-label="Open select attachments modal"
            onClick={() => alert("Attach file clicked (implement modal)")}
          >
            <AttachmentIcon className="w-[1.25rem] h-[1.25rem] text-gray-400 group-hover:text-indigo-300" />
          </button>
        </div>
        <div className="grow md:mr-5 xs:mr-4 self-end">
          <div className="relative">
            <textarea
              ref={textareaRef}
              className="max-w-full w-full px-5 py-4 rounded-sm content-center outline-none text-sm placeholder:text-black placeholder:opacity-40 text-opacity-70  dark:placeholder:opacity-70 focus:outline-none transition duration-200 ease-out text-black bg-gray-50  border-opacity-0 !bg-[#01274f] !text-[#383838] !bg-[#fff] !text-[#383838]  dark:border-opacity-70 !border-[#01274f] max-h-[10rem] pr-[3.125rem] resize-none scrollbar-hidden" // Increased max-h for better multiline
              value={messageText}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              rows={1}
              placeholder="무엇을 도와드릴까요?"
              aria-label="무엇을 도와드릴까요?"
            ></textarea>
            <div className="absolute bottom-[.8125rem] right-0">
              <button
                onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                className="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 toggle-picker-button w-7 h-7 md:mr-5 xs:mr-4"
                title="Toggle emoji picker"
                aria-label="Toggle emoji picker"
              >
                <EmojiIcon className="w-[1.25rem] h-[1.25rem] text-gray-400 group-hover:text-indigo-300" />
              </button>
              {isEmojiPickerOpen && (
                <div className="absolute z-10 bottom-[calc(100%+0.5rem)] md:right-0 xs:right-[-5rem] mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md border !border-[#01274f] p-2">
                  <p className="text-xs text-gray-500">
                    Emoji Picker Placeholder
                  </p>
                  {/* You would integrate a real emoji picker component here */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="min-h-[2.75rem] flex">
          <button
            className="group flex justify-center items-center rounded-full outline-none focus:outline-none hover:bg-gray-50 dark:hover:bg-gray-700 focus:bg-gray-50 dark:focus:bg-gray-600 transition-all duration-200 w-7 h-7 md:mr-5 xs:mr-4"
            title="Start recording"
            aria-label="Start recording"
            onClick={() => alert("Record audio clicked (not implemented)")}
          >
            <MicrophoneIcon className="w-[1.25rem] h-[1.25rem] text-gray-400 group-hover:text-indigo-300" />
          </button>
          <button
            onClick={handleSubmit}
            className="group flex justify-center items-center outline-none rounded-full focus:outline-none transition-all duration-200 w-7 h-7 bg-indigo-300 hover:bg-indigo-400 focus:bg-indigo-400 dark:focus:bg-indigo-300 dark:bg-indigo-400 dark:hover:bg-indigo-400 active:scale-110"
            title="Send message"
            aria-label="Send message"
          >
            <SendIcon className="w-[1.0625rem] h-[1.0625rem] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- ChatInterface 컴포넌트 (메인 채팅 UI 로직) ---
const ChatInterface = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const messageAreaRef = useRef<HTMLDivElement>(null);

  const dummyUser2: User = {
    name: "Ahmed Ali",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  };
  const dummyCurrentUser: User = {
    name: "Me",
    avatarUrl: "https://via.placeholder.com/150/007BFF/FFFFFF?Text=Me",
  }; // Example current user

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "2",
      text: "무엇을 도와드릴까요?",
      time: "2:00 pm",
      sender: dummyUser2,
      isSenderMe: false,
    },
    {
      id: "3",
      text: "4월 11일 17시 회기역 1번출구에서 저녁 모임 등록해줘",
      time: "5:00 pm",
      sender: dummyCurrentUser,
      isSenderMe: true,
    },
    {
      id: "4",
      text: "날짜 : 2025.04.11. 시간 : 17:00 제목 : 저녁 모임 장소 : 회기역 1번 출구",
      time: "3:00 pm",
      sender: dummyUser2,
      isSenderMe: false,
    },
    {
      id: "5",
      text: "일정 상세정보 입력하러가기",
      time: "3:00 pm",
      sender: dummyUser2,
      isSenderMe: false,
    },
  ]);

  const handleSendMessage = (messageText: string) => {
    const newMessage: Message = {
      id: String(Date.now()),
      text: messageText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      sender: dummyCurrentUser,
      isSenderMe: true,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    // TODO: 여기에 Socket.IO를 통해 메시지를 서버로 전송하는 로직을 추가합니다.
    // 예: socket.emit('sendMessage', newMessage);
    console.log("Sending message via ChatInterface:", newMessage);
  };

  useEffect(() => {
    if (messageAreaRef.current) {
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      id="mainContent"
      className="flex flex-col grow h-full w-full scrollbar-hidden bg-[#e8e8e8] transition-all duration-500"
      role="region"
    >
      <ChatHeader
        groupName="아이고 AI" // 예시 그룹명
        groupAvatarUrl="https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        lastSeen="무엇이든 물어보세요."
        onBack={() => alert("Back button clicked (e.g., close chat window)")}
        onSearch={() => alert("Search clicked (implement search UI)")}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <div className="relative">
        {" "}
        {/* 메뉴가 헤더 바로 아래에 위치하도록 */}
        {isMenuOpen && <ConversationMenu />}
      </div>

      <div
        ref={messageAreaRef}
        className="grow px-[15px] py-5 !bg-[#f9f9f9] flex flex-col overflow-y-auto scrollbar-hidden gap-y-[15px]"
      >
        {messages.map((msg) => (
          <MessageItem key={msg.id} message={msg} />
        ))}
        <div className="w-full h-full">
          <div className="w-full my-7 flex items-center justify-center">
            <div className="w-full h-0 border-t border-dashed dark:border-gray-600"></div>
            <p className="outline-none text-xs font-light text-black opacity-60  dark:opacity-70 leading-4 tracking-[.01rem] mx-5 whitespace-nowrap">
              {" "}
              Today{" "}
            </p>
            <div className="w-full h-0 border-t border-dashed dark:border-gray-600"></div>
          </div>
        </div>
      </div>

      <MessageInput onSendMessage={handleSendMessage} />

      {/* 모달들은 여기에 조건부로 렌더링합니다. 
          예: {isGroupInfoModalOpen && <GroupInfoModal onClose={() => setIsGroupInfoModalOpen(false)} />}
          제공된 HTML에는 여러 모달이 있었지만, 이 변환에서는 주요 채팅 인터페이스에 집중했습니다.
          각 모달(Group Info, Media Carousel, Search Messages 등)은 별도의 컴포넌트로 만들고 
          ChatInterface 내에서 상태에 따라 조건부 렌더링해야 합니다.
      */}
    </div>
  );
};
// --- 채팅 UI 관련 타입 및 컴포넌트 정의 끝 ---

// --- Home 컴포넌트 ---
export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <NavBarMain link="/mypage"></NavBarMain>
      <div className="w-full grow overflow-y-auto flex">
        {" "}
        {/* grow와 flex 추가 */}
        {/* 주석 처리된 간단한 채팅 UI 대신 ChatInterface를 렌더링합니다. */}
        {/* ChatInterface는 자체적으로 스크롤 및 높이 관리를 하도록 설계되었습니다. */}
        <ChatInterface />
      </div>
    </div>
  );
}
