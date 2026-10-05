import { describe, expect, it } from "vitest";

import { filterProjects, getProjectTags } from "./portfolio";

const projects = [
  { id: 1, tags: ["All", "React", "Tailwind"] },
  { id: 2, tags: ["All", "JavaScript"] },
  { id: 3, tags: ["All", "React"] },
];

describe("portfolio helpers", () => {
  it("derives unique project tags in first-use order", () => {
    expect(getProjectTags(projects)).toEqual(["All", "React", "Tailwind", "JavaScript"]);
  });

  it("filters projects by the active tag", () => {
    expect(filterProjects(projects, "React").map((project) => project.id)).toEqual([1, 3]);
    expect(filterProjects(projects, "All")).toHaveLength(3);
  });
});
