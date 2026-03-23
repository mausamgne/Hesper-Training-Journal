export default function ChevronArrow({
  size = 14,
  containerSize = 32,
  bg = "bg-white",
  iconColor = "text-[#EC1F24]",
  hoverBg,
  hoverIconColor,
}) {
  return (
    <span
      className={`
        ${bg}
        ${hoverBg ? `group-hover:${hoverBg}` : ""}
        flex items-center justify-center
        rounded-full
        transition-all duration-300
      `}
      style={{
        width: containerSize,
        height: containerSize,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${iconColor} ${
          hoverIconColor ? `group-hover:${hoverIconColor}` : ""
        }`}
      >
        <path d="M9 5l7 7-7 7" />
      </svg>
    </span>
  );
}