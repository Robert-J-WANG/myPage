import { useEffect, useState } from "react";
import { projectsData } from "../server/data";

export const useProjects = (activeTag) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const activeProjects = projectsData.cardData.filter((item) => {
      return item.tags.includes(activeTag);
    });
    setProjects(activeProjects);
  }, [activeTag]);

  return projects;
};
