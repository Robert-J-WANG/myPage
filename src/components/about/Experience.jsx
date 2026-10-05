import React from "react";
import { experienceEntries } from "@/data/site";
import Timeline from "./TimeLine";

export default function Experience() {
  return <Timeline data={experienceEntries} />;
}
