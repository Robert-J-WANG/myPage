import React from "react";

export default function SectionHeader({ title }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-2">
      <h1 className="text-lg font-black text-transparent uppercase sm:text-xl lg:text-2xl xl:text-3xl bg-clip-text bg-gradient-to-r from-subColor to-mainColor">
        {title}
      </h1>
      <span className="relative inline-block w-28 sm:w-36  lg:w-40 xl:w-44 h-[6px] overflow-hidden rounded bg-mainColor20">
        <span className="absolute top-0 left-0 inline-block w-2 h-full rounded-full bg-mainColor animate-leftToRight"></span>
      </span>
    </div>
  );
}
