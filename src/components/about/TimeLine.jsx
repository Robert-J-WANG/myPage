import React from "react";

export default function Timeline({ data }) {
  return (
    <div className="flex items-center justify-center w-full h-full ">
      <ul className="flex flex-col items-start justify-around lg:w-[876px] xl:ßw-[1024px] h-full min-h-[calc(100vh-192px)]  ">
        {data.map((item) => (
          <li key={item.id} className="relative ml-24 border-mainColor">
            {/* Left Section */}
            <p className="absolute items-center w-12 p-2 text-sm text-center rounded-xl top-2 -left-24 bg-subBgColor">
              {item.year}
            </p>

            {/* Right Section */}
            <div className="relative w-full h-full pl-12 border-l-4 border-subBdColor ">
              {/* Cross line with circles */}
              <span className="absolute -left-0.5 top-0 mt-1 ">
                {/* Big circle */}
                <span className="absolute z-10 inline-block w-6 h-6 border-4 rounded-full -left-3 top-6 border-mainColor "></span>
                {/* Small circle */}
                <span className="absolute inline-block w-4 h-4 rounded-full -left-2 top-7 z-11 bg-bgColor "></span>
                {/* X-line */}
                <span className="absolute -left-10 top-6 -z-10 mt-2.5 h-1 w-20 rounded-full bg-subBdColor "></span>
              </span>

              {/* Text Content */}
              <h5 className="w-full sm:text-lg md:text-xl lg:text-2xl text-mainColor">
                {item.title}
              </h5>
              <p className="w-full text-sm sm:text-base md:text-lg lg:text-xl text-subColor">
                {item.school}
              </p>

              {/* Content List */}
              <ul className="w-full text-sm sm:text-base mg:text-lg lg:text-xl text-textColor">
                {item.content.map((li, index) => (
                  <li key={index}>{li}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
