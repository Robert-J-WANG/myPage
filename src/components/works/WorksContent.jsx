import React from "react";
import CardList from "../widgets/CardList";

export default function WorksContent({ data, page }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <ul className="flex items-center justify-start w-full h-full gap-10">
        {data.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-center h-full transition-transform duration-500 ease-in-out group"
            style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
          >
            <CardList {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
