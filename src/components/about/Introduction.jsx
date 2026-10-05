import React from "react";
import { infoData } from "@/data/portfolio";
import aboutMe from "@/assets/aboutMe.png"; // 动态加载图片


export default function Introduction() {

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full gap-6 md:gap-10 lg:gap-16 md:flex-row"
    >
      {/* left part */}
      <div className="flex items-center justify-center w-full h-full md:justify-end basis-1/2">
        <div className="relative flex items-center justify-center w-[368px] h-[260px]  md:w-[408px] md:h-[289px] lg:w-[450px] lg:h-[318px] overflow-hidden rounded-2xl">
          <span className="absolute w-[600px] h-[600px] bg-gradient-to-br from-mainColor to-black animate-spin-slow"></span>

          {/* 使用 require() 动态加载图片 */}
          <div
            className="z-10 w-[calc(100%-10px)] h-[calc(100%-10px)] rounded-xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${aboutMe})` }}
          ></div>
        </div>
      </div>

      {/* right part */}
      <div className="flex flex-col items-center justify-center w-[370px] md:w-full gap-4 md:gap-8 basis-1/2 md:items-start">
        {/* middle list */}
        <ul className="flex flex-col justify-center gap-1 md:gap-3">
          {infoData.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-start gap-1 md:gap-2"
            >
              {/* dots */}
              <span className="inline-block w-2 h-2 rounded-full bg-mainColor"></span>
              {/* text */}
              <span className="inline-block font-medium text-textColor">
                {item.title}
              </span>
              <span className="inline-block text-mainColor">{item.value}</span>
            </li>
          ))}
        </ul>
        {/* bottom link */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center justify-center duration-500 border rounded text-textColor bg-mainColor20 border-mainColor hover:bg-mainColor hover:text-bgColor "
        >
          <span className="px-2 py-1">Download Resume</span>
        </a>
      </div>
    </div>
  );
}
