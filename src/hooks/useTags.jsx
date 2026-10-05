import { projects } from "@/data/projects";
import { getProjectTags } from "@/utils/portfolio";

export const useTags = () => getProjectTags(projects);
