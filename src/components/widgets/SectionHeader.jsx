import React from "react";

export default function SectionHeader({ title }) {
  return (
    <div className="flex flex-col items-center w-full h-full justify-evenly">
      {/* bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400  */}
      <h1 className="text-xl font-black text-transparent uppercase sm:text-2xl lg:text-3xl xl:text-4xl bg-clip-text bg-gradient-to-r from-textColor to-mainColor">
        {" "}
        {title}{" "}
      </h1>
      <span className="inline-block w-32 h-1.5 bg-mainColor20 rounded relative overflow-hidden">
        <span className="absolute top-0 left-0 inline-block w-2 h-full rounded-full bg-mainColor animate-leftToRight"></span>
      </span>
    </div>
  );
}
