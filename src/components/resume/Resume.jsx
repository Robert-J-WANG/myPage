import React, { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import SectionLayout from "@/Layout/SectionLayout";
import SectionHeader from "../widgets/SectionHeader";
import SectionPagination from "../widgets/SectionPagination";

export default function Resume() {
  const [page, setPage] = useState(1);

  const headerContent = <SectionHeader title="my resume" />;

  const mainContent = (
    <div
      className="flex w-full h-full transition-transform ease-in-out duration-1500"
      style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
    >
      <div className="flex-shrink-0 w-full h-full">
        <Education />
      </div>
      <div className="flex-shrink-0 w-full h-full">
        <Experience />
      </div>
    </div>
  );

  const footerContent = (
    <SectionPagination count={2} handlePage={(e, v) => setPage(v)} />
  );

  return (
    <SectionLayout
      id="resume"
      headerContent={headerContent}
      mainContent={mainContent}
      footerContent={footerContent}
    />
  );
}
