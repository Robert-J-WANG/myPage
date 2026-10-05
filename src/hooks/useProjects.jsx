import { projects } from "@/data/projects";
import { filterProjects } from "@/utils/portfolio";

export const useProjects = (activeTag) => filterProjects(projects, activeTag);
