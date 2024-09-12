import React from "react";
import { resumeData } from "../../server/data";
import Timeline from "./TimeLine";

export default function Education() {
  const EduData = resumeData.find((item) => item.name === "Education");
  // console.log(EduData.data);
  return <Timeline data={EduData.data} />;
}
