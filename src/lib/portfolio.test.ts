import { describe, expect, it } from "vitest";

import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { filterProjects, formatProjectTag, getProjectTags } from "./portfolio";

const sampleProjects: Project[] = [
  {
    slug: "react-tailwind",
    tags: ["All", "React", "Tailwind"],
    title: "React Tailwind",
    summary: "Sample project",
    image: "/sample.webp",
    liveUrl: "https://example.com/react-tailwind",
  },
  {
    slug: "javascript",
    tags: ["All", "JavaScript"],
    title: "JavaScript",
    summary: "Sample project",
    image: "/sample.webp",
    liveUrl: "https://example.com/javascript",
  },
  {
    slug: "react",
    tags: ["All", "React"],
    title: "React",
    summary: "Sample project",
    image: "/sample.webp",
    liveUrl: "https://example.com/react",
  },
];

describe("portfolio helpers", () => {
  it("derives unique project tags in first-use order", () => {
    expect(getProjectTags(sampleProjects)).toEqual([
      "All",
      "React",
      "Tailwind",
      "JavaScript",
    ]);
  });

  it("filters projects by the active tag", () => {
    expect(
      filterProjects(sampleProjects, "React").map((project) => project.slug),
    ).toEqual(["react-tailwind", "react"]);
    expect(filterProjects(sampleProjects, "All")).toHaveLength(3);
  });

  it("formats internal project tag names for display", () => {
    expect(formatProjectTag("react-hooks")).toBe("React Hooks");
    expect(formatProjectTag("Tailwind")).toBe("Tailwind CSS");
    expect(formatProjectTag("React")).toBe("React");
  });

  it("keeps project identifiers and links valid", () => {
    const slugs = projects.map((project) => project.slug);

    expect(projects).toHaveLength(14);
    expect(new Set(slugs)).toHaveLength(slugs.length);
    expect(
      slugs.every((slug) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)),
    ).toBe(true);
    expect(projects.every((project) => project.tags.includes("All"))).toBe(true);
    expect(projects.every((project) => /^https:\/\//.test(project.liveUrl))).toBe(
      true,
    );
    expect(
      projects.every(
        (project) =>
          !project.repositoryUrl ||
          /^https:\/\//.test(project.repositoryUrl),
      ),
    ).toBe(true);
  });

  it("keeps optional project case studies complete", () => {
    const detailedProjects = projects.filter((project) => project.details);

    expect(detailedProjects.length).toBeGreaterThan(0);

    detailedProjects.forEach((project) => {
      const details = project.details;

      expect(project.repositoryUrl).toMatch(/^https:\/\//);
      expect(details?.overview.length).toBeGreaterThan(0);
      expect(details?.highlights.length).toBeGreaterThan(0);
      expect(details?.screenshots.length).toBeGreaterThan(0);
      expect(
        details?.highlights.every(
          (highlight) => highlight.title && highlight.description,
        ),
      ).toBe(true);
      expect(
        details?.screenshots.every(
          (screenshot) => screenshot.src && screenshot.alt,
        ),
      ).toBe(true);
    });
  });
});
