const PROJECT_TAG_LABELS = {
  "react-hooks": "React Hooks",
  "React-router": "React Router",
  Tailwind: "Tailwind CSS",
};

export function formatProjectTag(tag) {
  return PROJECT_TAG_LABELS[tag] ?? tag;
}

export function getProjectTags(projects) {
  const tags = projects.flatMap((project) =>
    project.tags.filter((tag) => tag !== "All"),
  );

  return ["All", ...new Set(tags)];
}

export function filterProjects(projects, activeTag) {
  return projects.filter((project) => project.tags.includes(activeTag));
}
