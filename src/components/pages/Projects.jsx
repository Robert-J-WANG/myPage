import React, { useState } from "react";
import CardList from "../widgets/CardList";
import { useTags } from "../../hooks/useTags";
import { useProjects } from "../../hooks/useProjects";
import GoTop from "../widgets/GoTop";

export default function Projects() {
  // 标签列表数据
  const tags = useTags();
  // 当前激活的标签
  const [activeTag, setActiveTag] = useState("All");
  // projects 数据
  const projects = useProjects(activeTag);

  /**
   * 处理tag点击事件的回调
   * @param {*} e
   */
  const handleTagClick = (e) => {
    const clickedTag = e.target.getAttribute("data-tag");
    setActiveTag(clickedTag);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full">
      {/* tag */}
      <div className="flex mt-10 items-center justify-start mx-5 2xl:max-w-[1280px] flex-wrap gap-3 border-[0.5px] border-borderColor rounded-xl py-2 px-5">
        {tags &&
          tags.map((tag, i) => (
            <p
              data-tag={tag}
              className={`px-2 hover:cursor-pointer py-1 rounded-md ${
                tag === activeTag
                  ? "bg-subBgColor text-mainColor"
                  : "bg-transparent"
              }`}
              key={i}
              onClick={handleTagClick}
            >
              {tag}
            </p>
          ))}
      </div>

      {/* content */}
      {projects.length < 1 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid my-10 gap-14 xl:gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <CardList key={project.id} {...project} />
          ))}
        </div>
      )}

      {/* go to top button */}
      <div className="fixed right-2 bottom-1/4">
        <GoTop />
      </div>
    </div>
  );
}
