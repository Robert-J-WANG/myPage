import React from "react";
import { infoData } from "../../server/data";
import aboutMe from "@/assets/aboutMe.png"; // 动态加载图片
import { useAOSAnimation } from "../../hooks/useAOSAnimation";

export default function Introduction() {
  useAOSAnimation(1500);
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-full gap-4 md:gap-8 lg:gap-12 md:flex-row"
      data-aos="fade-up"
    >
      {/* left part */}
      <div className="flex items-center justify-center w-full h-full md:justify-end basis-1/2">
        <div className="relative flex items-center justify-center w-[368px] h-[260px]  md:w-[408px] md:h-[289px] lg:w-[450px] lg:h-[318px] overflow-hidden rounded-2xl">
          <span className="absolute w-[600px] h-[600px] bg-gradient-to-br from-mainColor to-black animate-spin-slow"></span>

          {/* 使用 require() 动态加载图片 */}
          <div
            className="z-10 w-[calc(100%-16px)] h-[calc(100%-16px)] rounded-xl bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${aboutMe})` }}
          ></div>
        </div>
      </div>

      {/* right part */}
      <div className="flex flex-col items-center justify-center w-[370px] md:w-full gap-4 md:gap-8 basis-1/2 md:items-start">
        {/* top title*/}
        {/* <div className="hidden md:text-xl lg:text-2xl xl:text-3xl md:block">
          <span className="inline-block">Hi, I am&nbsp;</span>
          <span className="inline-block text-mainColor"> Robert</span>
        </div> */}
        {/* middle list */}
        <ul className="flex flex-col justify-center gap-1 md:gap-3">
          {infoData.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-start gap-1 text-lg md:gap-2 md:text-xl lg:text-2xl"
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
          <span className="px-2 py-1 md:text-xl ">Download Resume</span>
        </a>
      </div>
    </div>
  );
}
