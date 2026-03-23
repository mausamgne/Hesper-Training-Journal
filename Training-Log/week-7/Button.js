"use client";

import ChevronArrow from "./ChevronArrow";

export default function Button({ children, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        group
        inline-flex items-center justify-between
        gap-3
        px-[22px] pr-[12px] py-[10px]
        rounded-full
        border-2 border-[#EC1F24]
        bg-white
        text-[#EC1F24]
        font-inter font-medium
        transition-all duration-300

        hover:bg-[#EC1F24]
        hover:text-white

        focus:outline-none
        focus:ring-0

        ${className}
      `}
    >
      <span>{children}</span>

      <ChevronArrow
        size={14}
        containerSize={30}
        bg="bg-[#EC1F24]"
        iconColor="text-white"
        hoverBg="bg-white"
        hoverIconColor="text-[#EC1F24]"
      />
    </button>
  );
}