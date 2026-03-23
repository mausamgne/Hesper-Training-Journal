export default function Heading({
  children,
  className = "",
  color = "primary",
  align = "center",
}) {
  const colors = {
    primary: "text-[#2C2B84]",
    white: "text-white",
  };

  const alignStyle =
    align === "left" ? "text-left" : "text-center";

  return (
    <h2
      className={`
        font-hackney uppercase
        font-bold
        text-[36px] sm:text-[44px] md:text-[54px] lg:text-[64px] xl:text-[72px]
        leading-[1.05]
        tracking-wide
        mb-[24px]
        ${alignStyle}
        ${colors[color]}
        ${className}
      `}
    >
      {children}
    </h2>
  );
}