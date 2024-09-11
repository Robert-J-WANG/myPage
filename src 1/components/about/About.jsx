import React, { useState } from "react";
import AboutBody from "./AboutBody";
import MySkill from "./MySkill";
import MyService from "./MyService";
import SectionLayout from "@/Layout/SectionLayout";
import SectionHeader from "../widgets/SectionHeader";
import SectionPagination from "../widgets/SectionPagination";
import { aboutMenuData } from "../../data";

export default function About() {
  const [page, setPage] = useState(1);
  const headerContent = aboutMenuData.find((item) => item.id === page)
    ?.title ? (
    <SectionHeader
      title={aboutMenuData.find((item) => item.id === page)?.title}
    />
  ) : null;

  const mainContent = (
    <div
      className="flex items-center w-full h-full transition-transform ease-in-out duration-1500"
      style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
    >
      <div className="flex-shrink-0 w-full h-full">
        <AboutBody />
      </div>
      <div className="flex-shrink-0 w-full h-full">
        <MySkill />
      </div>
      <div className="flex-shrink-0 w-full h-full">
        <MyService />
      </div>
    </div>
  );

  const footerContent = (
    <SectionPagination count={3} handlePage={(e, v) => setPage(v)} />
  );

  return (
    <SectionLayout
      id="about"
      headerContent={headerContent}
      mainContent={mainContent}
      footerContent={footerContent}
    />
  );
}
