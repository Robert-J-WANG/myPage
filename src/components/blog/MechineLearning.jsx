import React, { useState } from "react";
import { reactFrontEndData } from "../../data";
import CardList from "../widgets/CardList";
import SectionPagination from "../widgets/SectionPagination";

export default function MechineLearning() {
  const [page, setPage] = useState(1);
  const handlePage = (event, value) => {
    setPage(value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <ul
        className="flex items-center justify-start w-full transition-transform duration-500 ease-in-out basis-31/40"
        style={{ transform: `translateX(-${((page - 1) * 100) / 3}%)` }}
      >
        {reactFrontEndData.map((data) => (
          <li
            key={data.id}
            className="flex items-center justify-center flex-shrink-0 h-full px-5 basis-1/3 group"
          >
            <CardList {...data} />
          </li>
        ))}
      </ul>
      <footer className="flex items-center justify-center w-full basis-9/40">
        <SectionPagination
          count={reactFrontEndData.length}
          handlePage={handlePage}
        />
      </footer>
    </div>
  );
}
