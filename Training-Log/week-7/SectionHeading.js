"use client";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center text-white">
      
      <h2 className="text-[32px] md:text-[48px] font-extrabold">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 opacity-80 max-w-[700px] mx-auto">
          {subtitle}
        </p>
      )}

    </div>
  );
}