export function getProjectTags(projects) {
  return ["All", ...new Set(projects.flatMap((project) => project.tags.filter((tag) => tag !== "All")))];
}

export function filterProjects(projects, activeTag) {
  return projects.filter((project) => project.tags.includes(activeTag));
}
