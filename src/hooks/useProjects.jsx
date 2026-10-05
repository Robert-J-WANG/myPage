import { projectsData } from "@/data/portfolio";
import { filterProjects } from "@/utils/portfolio";

export const useProjects = (activeTag) => filterProjects(projectsData.cardData, activeTag);
