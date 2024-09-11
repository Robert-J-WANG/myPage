import React from "react";
import { resumeData } from "../../data";
import Timeline from "./TimeLine";

export default function Experience() {
  const ExpData = resumeData.find((item) => item.name === "Experience");
  // console.log(EduData.data);
  return <Timeline data={ExpData.data} />;
}
