// components/common/SmallHeading.js

export default function SmallHeading({ children, className = "" }) {
  return (
    <h4
      className={`
        font-hackney text-[#EC1F24]
        text-[25px] leading-[22px]
        ${className}
      `}
    >
      {children}
    </h4>
  );
}