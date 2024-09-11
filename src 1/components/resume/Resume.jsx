import React, { useState } from "react";
import SchoolIcon from "@mui/icons-material/School";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { resumeData } from "../../data";
import SectionLayout from "@/Layout/SectionLayout";
import SectionHeader from "../widgets/SectionHeader";
import SectionPagination from "../widgets/SectionPagination";
import Timeline from "./TimeLine";

export default function Resume() {
  const [page, setPage] = useState(1);

  const headerContent = (
    <div
      className="flex w-full h-full transition-transform ease-in-out duration-1500"
      style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
    >
      {resumeData.map((item, index) => (
        <div key={index} className="flex-shrink-0 w-full h-full">
          <SectionHeader title={item.name} />
        </div>
      ))}
    </div>
  );

  const mainContent = (
    <div
      className="flex w-full h-full transition-transform ease-in-out duration-1500"
      style={{ transform: `translateX(-${(page - 1) * 100}%)` }}
    >
      {resumeData.map((item, index) => (
        <div key={index} className="flex-shrink-0 w-full h-full">
          <Timeline data={item.data} />
        </div>
      ))}
    </div>
  );

  const footerContent = (
    <SectionPagination
      count={resumeData.length}
      handlePage={(e, v) => setPage(v)}
    />
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
