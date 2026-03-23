

import Image from "next/image";
import Container from "./Container";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Button from "./Button";

export default function ProductSection({
  title,
  description,
  points = [],
  bestFor,
  image,
  reverse = false,
  dark = false,
}) {
  return (
    <section
      className={`w-full py-[80px] md:py-[100px] ${
        dark ? "bg-[#2f2f86] text-white" : "bg-white text-black"
      }`}
    >
      <Container>
        <div
          className={`grid lg:grid-cols-12 gap-[40px] lg:gap-[60px] items-center ${
            reverse ? "lg:flex-row-reverse" : ""
          }`}
        >
          {/* IMAGE */}
          <div className={`lg:col-span-5 ${reverse ? "lg:col-start-7" : "lg:col-start-2"} flex justify-center`}>
            <Image
              src={image}
              alt=""
              width={420}
              height={420}
              className="w-[300px] sm:w-[360px] md:w-[400px] rounded-[16px]"
            />
          </div>

          {/* CONTENT */}
          <div className="lg:col-span-5 text-center lg:text-left">

            <Heading
              className={`uppercase ${
                dark ? "text-white" : "text-[#2f2f86]"
              } text-[32px] md:text-[42px] lg:text-[48px]`}
            >
              {title}
            </Heading>

            <Paragraph
              className={`mt-[16px] ${
                dark ? "text-white/80" : "text-[#555]"
              }`}
            >
              {description}
            </Paragraph>

            {/* LIST */}
            <ul className="mt-[20px] space-y-[10px] text-left">
              {points.map((item, i) => (
                <li key={i} className="flex gap-[10px]">
                  <span className="text-[#EC1F24]">✔</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* BEST FOR */}
            <Paragraph className="mt-[20px]">
              <span className="font-semibold">Best For:</span> {bestFor}
            </Paragraph>

            {/* BUTTON */}
            <Button className="mt-[20px] border border-[#EC1F24] text-[#EC1F24] px-[20px] py-[8px] rounded-full">
              Learn More →
            </Button>

          </div>
        </div>
      </Container>
    </section>
  );
}