"use client";

export default function Arrow({ direction = "left", onClick }) {
  const position =
    direction === "left" ? "left-[30px]" : "right-[30px]";

  return (
    <div
      onClick={onClick}
      className={`hidden lg:flex absolute ${position} top-1/2 -translate-y-1/2 items-center cursor-pointer group`}
    >
      {direction === "left" && (
        <>
          {/* Arrow Head */}
          <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-r-[22px] border-t-transparent border-b-transparent border-r-white group-hover:border-r-red-400 transition"></div>

          {/* Line */}
          <div className="h-[3px] w-[200px] flex-shrink-0 bg-white group-hover:bg-red-400 transition"></div>
        </>
      )}

      {direction === "right" && (
        <>
          {/* Line */}
          <div className="h-[3px] w-[200px] flex-shrink-0 bg-white group-hover:bg-red-400 transition"></div>

          {/* Arrow Head */}
          <div className="w-0 h-0 border-t-[12px] border-b-[12px] border-l-[22px] border-t-transparent border-b-transparent border-l-white group-hover:border-l-red-400 transition"></div>
        </>
      )}
    </div>
  );
}