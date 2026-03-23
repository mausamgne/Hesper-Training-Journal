"use client";

import { useState } from "react";
import Container from "../common/Container";
import Heading from "../common/Heading";
import Paragraph from "../common/Paragraph";

const leftFAQs = [
  {
    question: "How does septic system monitoring work?",
    answer:
      "Septic system monitoring works by using IoT sensors installed in the septic tank to track key parameters like tank levels and system status. The data is sent in real time to a mobile or web app, where you can view updates and receive alerts if any issue or maintenance need is detected.",
  },
  { question: "How often should my septic tank be cleaned or pumped?" },
  { question: "What kind of alerts will I receive from the system?" },
  { question: "Can I monitor multiple septic tanks from one dashboard?" },
];

const rightFAQs = [
  { question: "How often should my septic tank be cleaned or pumped?" },
  { question: "What kind of alerts will I receive from the system?" },
  { question: "Can I monitor multiple septic tanks from one dashboard?" },
  { question: "Is the system easy to install and maintain?" },
  { question: "Is the system easy to install and maintain?" },
  { question: "Is the system easy to install and maintain?" },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  return (
    <section className="relative w-full bg-[#2f2f86] -mt-[2px] pt-[2px] overflow-hidden">

      {/* DIAGONAL */}
      <div
        className="absolute bottom-0 left-0 w-full h-[40%] bg-white z-0"
        style={{
          clipPath: "polygon(0 95%, 100% 65%, 100% 100%, 0% 100%)",
        }}
      />

      <Container>
        <div className="grid grid-cols-12 py-[100px] lg:py-[120px]">

          <div className="col-span-12 lg:col-start-2 lg:col-span-10 relative z-10">

            {/* HEADER */}
            <div className="text-center text-white">

              <Heading className="text-white">
                Frequently Asked Questions
              </Heading>

              <Paragraph className="mt-[14px] text-white/80">
                Answers to common questions about septic monitoring, maintenance, and services.
              </Paragraph>

              <div className="w-[40px] h-[3px] bg-[#EC1F24] mx-auto mt-[16px] rounded-full" />

            </div>

            {/* FAQ GRID */}
            <div className="mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-[30px]">

              {/* LEFT */}
              <div className="space-y-[16px]">
                {leftFAQs.map((item, index) => {
                  const isActive = active === `left-${index}`;

                  return (
                    <div key={index} className="rounded-[12px] overflow-hidden">

                      <div
                        onClick={() =>
                          setActive(isActive ? null : `left-${index}`)
                        }
                        className={`
                          cursor-pointer flex justify-between items-start
                          px-[20px] py-[16px]
                          transition-all duration-300

                          ${
                            isActive
                              ? "bg-[#EC1F24] text-white"
                              : "bg-white/15 text-white hover:bg-white/25"
                          }
                        `}
                      >
                        <span className="pr-3 break-words whitespace-normal">
                          {item.question}
                        </span>

                        <span className="ml-3 mt-[2px] shrink-0">
                          {isActive ? "⌄" : "›"}
                        </span>
                      </div>

                      {isActive && item.answer && (
                        <div className="bg-[#f2f2f2] text-[#4a4a4a] px-[20px] py-[18px] text-[14px] leading-[22px]">
                          {item.answer}
                        </div>
                      )}

                    </div>
                  );
                })}
              </div>

              {/* RIGHT */}
              <div className="space-y-[16px]">
                {rightFAQs.map((item, index) => {
                  const isActive = active === `right-${index}`;

                  return (
                    <div key={index} className="rounded-[12px] overflow-hidden">

                      <div
                        onClick={() =>
                          setActive(isActive ? null : `right-${index}`)
                        }
                        className={`
                          cursor-pointer flex justify-between items-start
                          px-[20px] py-[16px]
                          transition-all duration-300

                          ${
                            isActive
                              ? "bg-[#EC1F24] text-white"
                              : "bg-white/15 text-white hover:bg-white/25"
                          }
                        `}
                      >
                        <span className="pr-3 break-words whitespace-normal">
                          {item.question}
                        </span>

                        <span className="ml-3 mt-[2px] shrink-0">
                          {isActive ? "⌄" : "›"}
                        </span>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}