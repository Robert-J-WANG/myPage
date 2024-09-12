import React, { useState } from "react";
import SectionLayout from "@/Layout/SectionLayout";
import SectionHeader from "../widgets/SectionHeader";
import SectionPagination from "../widgets/SectionPagination";
import { aboutMenuData } from "../../server/data";
import AboutMe from "../about/AboutMe";
import MySkill from "../about/MySkill";
import Education from "../about/Education";
import Experience from "../about/Experience";

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
        <AboutMe />
      </div>
      <div className="flex-shrink-0 w-full h-full">
        <MySkill />
      </div>
      <div className="flex-shrink-0 w-full h-full">
        <Education />
      </div>
      <div className="flex-shrink-0 w-full h-full">
        <Experience />
      </div>
    </div>
  );

  const footerContent = (
    <SectionPagination
      count={aboutMenuData.length}
      handlePage={(e, v) => setPage(v)}
    />
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
