import React from "react";
import worksLink from "@/assets/worksLink.svg";
import { useAOSAnimation } from "../../hooks/useAOSAnimation";

// eslint-disable-next-line no-unused-vars
export default function CardList({ id, img, title, description, url }) {
  useAOSAnimation(1500);
  return (
    <div
      className="flex flex-col items-start justify-center w-[380px] h-[380px] gap-3 p-5 duration-500 border rounded-xl bg-subBgColor border-subBdColor group group-hover:-translate-y-2"
      data-aos="zoom-in"
    >
      <div className="relative w-full h-full overflow-hidden basis-5/6">
        <img
          className="absolute top-0 left-0 w-full h-full duration-500 group-hover:blur group-hover:opacity-20"
          src={img}
          alt=""
        />

        <div className="absolute top-0 z-20 flex items-center justify-center w-full h-full duration-500 rounded -left-full bg-subBgColor group-hover:translate-x-full">
          <a href={url} target="_blank" rel="noreferrer">
            <img
              className="w-8 h-8 rounded cursor-pointer bg-mainColor"
              src={worksLink}
              alt=""
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-start w-full h-full basis-1/6 justify-evenly">
        <h2 className="text-xl ">{title}</h2>
        <p className=" text-subColor">{description}</p>
      </div>
    </div>
  );
}
