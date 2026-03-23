export default function SubHeading({
  children,
  className = "",
  align = "center",
  color = "primary",
}) {
  const alignStyle = align === "left" ? "text-left" : "text-center";

  const colors = {
    primary: "text-[#2C2B84]",
    white: "text-white",
  };

  return (
    <h3
      className={`
        font-hackney uppercase
        text-[20px] sm:text-[22px] md:text-[24px] lg:text-[30px]
        leading-[1.2]
        mb-[20px]
        ${alignStyle}
        ${colors[color]}
        ${className}
      `}
    >
      {children}
    </h3>
  );
}