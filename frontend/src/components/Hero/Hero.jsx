import React, { useRef } from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero({ portfolioData, homeRef }) {
  return (
    <header
      style={{
        backgroundImage: "url('bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      ref={homeRef}
      className="w-full h-screen flex flex-col justify-center lg:flex-row lg:justify-evenly items-center text-white p-4 gap-10 lg:gap-0 relative"
    >
      <span
        style={{
          backgroundImage: "url('f2.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-full md:w-[90%] lg:w-[60%] xl:w-[50%] aspect-[16/8] absolute -bottom-50 md:-bottom-60 lg:-bottom-50 xl:-bottom-50 2xl:-bottom-70 z-10"
      ></span>
      <HeroLeft portfolioData={portfolioData} />
      <HeroRight portfolioData={portfolioData} />
    </header>
  );
}
