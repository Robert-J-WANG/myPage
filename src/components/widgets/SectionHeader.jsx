import React from "react";

export default function SectionHeader({ title }) {
  return (
    <div className="flex flex-col items-center justify-end gap-2 ">
      {/* text */}
      <h1 className="px-2 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-mainColor to-textColor">
        {title}
      </h1>
      {/* bar */}
      <span className="relative inline-block w-full h-[6px] overflow-hidden rounded bg-mainColor20">
        <span className="absolute top-0 left-0 inline-block w-2 h-full rounded-full bg-mainColor animate-leftToRight"></span>
      </span>
    </div>
  );
}
