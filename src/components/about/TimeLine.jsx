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
                
                {/* X-line */}
                <span className="absolute -left-10 top-6 mt-2.5 h-1 w-20 rounded-full bg-subBdColor "></span>

                {/* Small circle */}
                <span className="absolute inline-block w-4 h-4 rounded-full -left-2 top-7 bg-bgColor "></span>
              </span>

              {/* Text Content */}
              <h5 className="w-full text-sm lg:text-base text-mainColor">
                {item.title}
              </h5>
              <p className="w-full text-sm lg:text-base text-subColor">
                {item.school}
              </p>

              {/* Content List */}
              <ul className="w-full text-sm lg:text-base text-textColor">
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
