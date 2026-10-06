import { useState } from "react";

export const useActiveTag = () => {
  const [activeTag, setActiveTag] = useState("All");

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  return { activeTag, handleTagClick };
};
