import React from "react";
import { socialLinksData } from "../../data";

export default function SocialLinks() {
  return (
    //   {/* bottom links */}
    <ul className="flex items-center justify-center gap-10">
      {socialLinksData.map((item) => (
        <li key={item.id} className="">
          <a
            href={item.anchor}
            className="relative inline-block w-10 h-10 overflow-hidden text-lg leading-none text-center align-middle border border-opacity-50 rounded group border-subBdColor text-body"
          >
            <span className="relative top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-500 transform translate-y-0 rounded front bg-bgColor group-hover:-translate-y-full">
              <img src={item.icon1} alt="" className="w-10" />
            </span>

            <span className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-500 translate-y-full rounded back bg-mainColor group-hover:translate-y-0">
              <img src={item.icon2} alt="" className="w-10" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
