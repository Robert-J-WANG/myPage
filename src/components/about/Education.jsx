import React from "react";
import { educationEntries } from "@/data/site";
import Timeline from "./TimeLine";

export default function Education() {
  return <Timeline data={educationEntries} />;
}
