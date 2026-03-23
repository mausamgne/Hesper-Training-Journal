// components/common/Paragraph.js

export default function Paragraph({
  children,
  className = "",
  variant = "default",
}) {
  const styles = {
    default: "text-[15px] leading-[26px]",
    center:
      "text-[15px] sm:text-[16px] md:text-[17px] leading-[28px] text-center",
    small: "text-[14px] leading-[22px]",
  };

  return (
    <p className={`font-inter ${styles[variant]} ${className}`}>
      {children}
    </p>
  );
}