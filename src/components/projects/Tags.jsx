import React from "react";
import { useTags } from "../../hooks/useTags";

export default function Tags({ activeTag, handleTagClick }) {
  // 用于渲染所以tags
  const tags = useTags();
  return (
    <div className="flex flex-wrap items-center justify-start gap-3">
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
            onClick={(e) => {
              handleTagClick(e);
            }}
          >
            {tag}
          </p>
        ))}
    </div>
  );
}
