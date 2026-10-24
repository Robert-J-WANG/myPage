import type { Project } from "@/data/projects";

const PROJECT_TAG_LABELS: Record<string, string> = {
  "react-hooks": "React Hooks",
  "React-router": "React Router",
  Tailwind: "Tailwind CSS",
};

export function formatProjectTag(tag: string) {
  return PROJECT_TAG_LABELS[tag] ?? tag;
}

export function getProjectTags(projects: Project[]) {
  const tags = projects.flatMap((project) =>
    project.tags.filter((tag) => tag !== "All"),
  );

  return ["All", ...new Set(tags)];
}

export function filterProjects(projects: Project[], activeTag: string) {
  return projects.filter((project) => project.tags.includes(activeTag));
}
