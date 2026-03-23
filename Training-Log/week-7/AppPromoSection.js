"use client";

import Image from "next/image";
import Container from "../common/Container";
import Link from "next/link";
import Heading from "../common/Heading";

/* 🔥 REUSABLE BADGE COMPONENT (FINAL FIXED) */
function FeatureBadge({ href, src, alt }) {
  return (
    <Link href={href}>
      <Image
        src={src}
        alt={alt}
        width={140}
        height={45}
        className="
          h-[32px] sm:h-[36px]
          w-auto
          shrink-0
          cursor-pointer
          hover:scale-105
          transition
        "
      />
    </Link>
  );
}

/* 🔥 REUSABLE STORE BUTTON */
function StoreButton({ href, src, alt }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        width={160}
        height={60}
        className="h-[38px] sm:h-[44px] w-auto hover:scale-105 transition"
      />
    </a>
  );
}

export default function AppPromoSection() {
  return (
    <section className="relative w-full bg-[#d6d7e4] overflow-hidden">

      {/* BACKGROUND SHAPES */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-white/30 pointer-events-none"
        style={{ clipPath: "polygon(0 0, 28% 0, 0 45%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-full h-full bg-white/30 pointer-events-none"
        style={{ clipPath: "polygon(100% 100%, 72% 100%, 100% 60%)" }}
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-y-[50px] lg:gap-x-[60px] py-[70px] sm:py-[90px] lg:py-[110px]">

          {/* LEFT IMAGE */}
          <div className="lg:col-span-5 lg:col-start-2 flex justify-center lg:justify-start order-2 lg:order-1">
            <Image
              src="/images/phone.png"
              alt="AGX Mobile App"
              width={400}
              height={400}
              className="
                w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px]
                h-auto object-contain drop-shadow-2xl
              "
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-5 text-center lg:text-left order-1 lg:order-2">

            {/* HEADING */}
            <Heading
  align="center"
  className="
    text-[#EC1F24]
    uppercase
    text-center lg:text-left
    text-[24px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[46px]
    leading-[1.2]
  "
>
  <span className="block">
    AGX PRO CONNECT
  </span>

  <span className="block whitespace-nowrap">
    REMOTE MONITORING SOFTWARE
  </span>
</Heading>

            {/* ✅ FEATURE BADGES (FINAL - SAME ROW ALWAYS) */}
            <div
              className="
                flex
                justify-center lg:justify-start
                items-center
                gap-[12px] sm:gap-[16px]
                mb-[24px]
              "
            >
              <FeatureBadge
                href="/cloud-sync"
                src="/images/CloudSync.png"
                alt="Cloud Sync"
              />

              <FeatureBadge
                href="/real-time"
                src="/images/RealTime.png"
                alt="Real Time Telemetry"
              />
            </div>

            {/* STORE BUTTONS */}
            <div
              className="
                flex flex-wrap
                justify-center lg:justify-start
                items-center
                gap-[12px] sm:gap-[16px]
              "
            >
              <StoreButton
                href="https://play.google.com/store/apps"
                src="/images/GooglePlay.png"
                alt="Google Play"
              />

              <StoreButton
                href="https://apps.apple.com/in/app/apple-store/id375380948"
                src="/images/AppStore.png"
                alt="App Store"
              />
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}