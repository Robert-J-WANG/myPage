import React from "react";
import { infoData } from "../../data";

export default function AboutBody() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-5 lg:gap-10 2xl:gap-16 md:flex-row">
      {/* left part */}
      <div className="flex items-center justify-center w-full h-full md:justify-end basis-1/2">
        <div className="relative flex items-center justify-center w-4/5 h-full overflow-hidden sm:w-3/5 md:w-full xl:w-11/12 2xl:w-4/5 md:h-3/5 lg:h-5/6 rounded-xl">
          <span className="absolute w-[800px] h-[800px] bg-gradient-to-br from-mainColor to-bgColor animate-spin-slow"></span>

          <div className="z-10 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-lg bg-[url('./assets/about-image.jpg')] bg-cover"></div>
        </div>
      </div>

      {/* right part */}
      <div className="flex flex-col items-center justify-center w-full gap-2 sm:gap-3 md:gap-8 basis-1/2 md:items-start">
        <div className="text-xl md:text-2xl lg:text-3xl">
          <span className="inline-block ">Hi, I am&nbsp;</span>
          <span className="inline-block text-mainColor"> Robert J Wang</span>
        </div>

        <ul className="flex flex-col gap-1 w-ful sm:gap-3 ">
          {infoData.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-start gap-2 text-sm md:text-base lg:text-lg"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-mainColor"></span>
              <span className=" inline-block min-w-[80px] font-medium text-subColor ">
                {item.title}
              </span>
              <span className="inline-block text-subColor2">{item.value}</span>
            </li>
          ))}
        </ul>
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
