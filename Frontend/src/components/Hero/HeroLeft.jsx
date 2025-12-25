import React, { useRef } from "react";
import ListContacts from "../ListContacts";

export default function HeroLeft({ portfolioData }) {
  return (
    <div className="hero-left w-full lg:w-1/2 font-google-sans text-shadow">
      <h1 className="text-green-400 text-6xl lg:text-8xl text-shadow-lg text-shadow-green-700 font-bold mb-4">
        Hi saya {portfolioData.name} <br />
        <span className="text-slate-300 text-xl xl:text-2xl font-google-sans p-1">
          saya seorang {portfolioData.title} based di Indonesia
        </span>
      </h1>
      <p className="text-xs bg-white/20 rounded-xl backdrop-blur-md lg:backdrop-blur-none lg:bg-transparent lg:text-sm text-slate-300 leading-loose font-google-sans p-2 text-shadow-md text-shadow-green-700 mb-6">
        Saya adalah seorang web developer yang bersemangat dalam mengembangkan
        dan mendesain UI/UX serta menyempuranakan performa web agar lebih
        efisien serta mudah digunakan oleh siapapun.
      </p>
      <ListContacts />
    </div>
  );
}
