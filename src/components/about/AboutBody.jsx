import React from "react";
import { infoData } from "../../data";

export default function AboutBody() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 md:gap-6 lg:gap-8 md:flex-row">
      {/* left part */}
      <div className="flex items-center justify-center w-full h-full md:justify-end basis-1/2">
        <div className="relative flex items-center justify-center w-[240px] h-[240px] overflow-hidden md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-xl">
          <span className="absolute w-[600px] h-[600px] bg-gradient-to-br from-mainColor to-black animate-spin-slow"></span>

          <div className="z-10 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-lg bg-[url('./assets/about-image2.jpg')] bg-cover"></div>
        </div>
      </div>

      {/* right part */}
      <div className="flex flex-col items-center justify-center w-full gap-4 md:gap-8 lg:gap-12 basis-1/2 md:items-start">
        {/* top title*/}
        <div className="text-xl md:text-2xl lg:text-3xl">
          <span className="inline-block ">Hi, I am&nbsp;</span>
          <span className="inline-block text-mainColor"> Robert</span>
        </div>
        {/* middle list */}
        <ul className="flex flex-col justify-center w-2/3 gap-2 md:w-full ">
          {infoData.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-start gap-2 italic md:text-lg lg:text-xl text-ellipsis"
            >
              {/* dot */}
              <span className="inline-block w-2 h-2 rounded-full bg-mainColor"></span>
              {/* text */}
              <span className="inline-block font-medium text-subColor">
                {item.title}
              </span>
              <span className="inline-block text-subColor2">{item.value}</span>
            </li>
          ))}
        </ul>
        {/* bottom link */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center justify-center py-1 text-sm uppercase duration-500 border rounded w-44 sm:text-base text-mainColor bg-mainColor20 border-mainColor hover:bg-mainColor hover:text-bgColor "
        >
          <span>Download Resume</span>
        </a>
      </div>
    </div>
  );
}
