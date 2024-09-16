import { useState } from "react";

export const useActiveTag = () => {
  const [activeTag, setActiveTag] = useState("All");

  /**
   * 处理 tag 点击事件
   * @param {*} e
   */
  const handleTagClick = (e) => {
    const clickedTag = e.target.getAttribute("data-tag");

    // 直接将 clickedTag 传递给 setActiveTag
    setActiveTag(clickedTag);
  };

  return { activeTag, handleTagClick };
};
