import React from "react";
import "./MySkill.scss";
import { skillData, languageData } from "../../server/data";

export default function MySkill() {
  const topItems = skillData.map((item) => (
    <li key={item.id}>
      <div className="relative flex flex-col items-center h-full p-2 border justify-evenly rounded-xl border-subBdColor bg-subBgColor">
        {/* circle */}
        <div className="relative inline-block lg:mb-2 text-mainColor">
          <svg
            className="w-full h-full circle"
            width="120"
            height="120"
            viewBox="0 0 120 120"
          >
            <circle
              className="circlebg"
              cx="60"
              cy="60"
              r="54"
              pathLength="1"
              strokeLinecap="round"
              strokeWidth="8"
            ></circle>
            <circle
              cx="60"
              cy="60"
              r="54"
              strokeLinecap="round"
              strokeWidth="8"
              opacity="1"
              pathLength="1"
              strokeDashoffset="0px"
              strokeDasharray={item.stroke}
            ></circle>
          </svg>
          <span className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 lg:text-xl left-1/2 top-1/2 ">
            {item.percent}
          </span>
        </div>
        {/* text */}
        <h5 className="text-sm text-center lg:text-base">{item.title}</h5>
      </div>
    </li>
  ));
  const bottomItems = languageData.map((item) => (
    <li key={item.id} className="flex flex-col justify-center gap-2 ">
      <h5 className="text-sm lg:text-base">
        {item.title} -{" "}
        <span className="text-mainColor">( {`${item.value} %`} )</span>
      </h5>
      <progress value={item.value} max="100" className=" progress"></progress>
    </li>
  ));
  return (
    <div className="flex flex-col w-full h-full gap-5 mx-auto my-skill-container md:w-5/6 xl:w-4/5 ">
      {/* top part */}
      <ul className="grid w-full grid-cols-4 gap-3 md:gap-6 basis-1/3">
        {topItems}
      </ul>

      {/* bottom part */}
      <ul className="grid w-full grid-cols-2 gap-3 md:gap-6 basis-2/3 ">
        {bottomItems}
      </ul>
    </div>
  );
}
