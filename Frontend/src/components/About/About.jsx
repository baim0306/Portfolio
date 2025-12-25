import { useRef } from "react";
import Service from "./Service";

export default function About({ portfolioData, aboutRef }) {
  return (
    <div
      className="w-screen bg-slate-100 p-4 flex flex-col items-center relative overflow-hidden"
      ref={aboutRef}
    >
      <span
        style={{
          backgroundImage: "url('f3.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-[40%] md:w-[30%] lg:w-[20%] xl:w-[10%] aspect-[9/11] absolute top-50 -right-10 rotate-300 "
      ></span>
      <span
        style={{
          backgroundImage: "url('f5.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="w-[50%] md:w-[40%] lg:w-[20%] xl:w-[10%] aspect-[9/15] absolute bottom-20 left-0 rotate-65"
      ></span>
      <h2 className="text-white text-4xl text-shadow-lg text-center text-shadow-green-700 font-bold font-google-sans z-10 mt-10">
        About Me
      </h2>
      <div className="w-[90%] flex flex-col z-10 mt-10">
        <div className="p-4 bg-slate-500 rounded-xl shadow-md shadow-green-700 ">
          <h3 className="text-lg lg:text-2xl font-semibold font-google-sans text-green-400">
            Siapa saya?
          </h3>
          <p className="text-xs lg:text-sm leading-loose text-slate-300 font-google-sans mt-2">
            {portfolioData.descWeb}
          </p>
        </div>
        <div className="p-4 bg-slate-500 rounded-xl shadow-md shadow-green-700 mt-5">
          <h3 className="text-lg lg:text-2xl font-semibold font-google-sans text-green-400">
            Kenapa memilih saya?
          </h3>
          <p className="text-xs lg:text-sm leading-loose text-slate-300 font-google-sans mt-2">
            Saya bekerja keras untuk memberikan yang terbaik kepada klien saya.
            Anda bisa merasa nyaman untuk berdiskusi ataupun memberikan masukkan
            kepada saya untuk menyesuaikan web dengan selera anda. <br />
            Saya akan berusaha untuk memenuhi ekspektasi anda dan meningkatkan
            kemampuan saya mengikuti trend dan perkembangan teknologi web saat
            ini.
          </p>
        </div>
        <Service />
      </div>
    </div>
  );
}
