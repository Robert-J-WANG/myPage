import { useState, useEffect } from "react";
import { projectsData } from "../server/data";

export const useTags = () => {
  // 标签列表数据
  const [tags, setTags] = useState([]);
  useEffect(() => {
    setTags(projectsData.tagsData);
  }, []);
  return tags;
};
