import { projectsData } from "@/data/portfolio";
import { getProjectTags } from "@/utils/portfolio";

export const useTags = () => getProjectTags(projectsData.cardData);
