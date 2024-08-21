import React from "react";
import CardList from "../widgets/CardList";

export default function WorksContent({ data, page }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <ul className="flex items-center justify-start w-full h-full">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-center flex-shrink-0 h-full p-5 transition-transform duration-500 ease-in-out sm:px-1 lg:px-2 xl:px-5 basis-full sm:basis-1/2 lg:basis-1/3 group"
            style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
          >
            <CardList {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
