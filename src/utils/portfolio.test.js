import { describe, expect, it } from "vitest";

import { projects } from "@/data/projects";
import { filterProjects, getProjectTags } from "./portfolio";

const sampleProjects = [
  { id: 1, tags: ["All", "React", "Tailwind"] },
  { id: 2, tags: ["All", "JavaScript"] },
  { id: 3, tags: ["All", "React"] },
];

describe("portfolio helpers", () => {
  it("derives unique project tags in first-use order", () => {
    expect(getProjectTags(sampleProjects)).toEqual(["All", "React", "Tailwind", "JavaScript"]);
  });

  it("filters projects by the active tag", () => {
    expect(filterProjects(sampleProjects, "React").map((project) => project.id)).toEqual([1, 3]);
    expect(filterProjects(sampleProjects, "All")).toHaveLength(3);
  });

  it("keeps every published project link as an HTTPS URL", () => {
    expect(projects).toHaveLength(13);
    expect(projects.every((project) => project.tags.includes("All"))).toBe(true);
    expect(projects.every((project) => /^https:\/\//.test(project.url))).toBe(true);
  });
});
