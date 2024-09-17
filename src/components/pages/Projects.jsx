import CardList from "@/components/projects/CardList";
import { useProjects } from "@/hooks/useProjects";
import GoTop from "@/components/projects/GoTop";
import useScrollPosition from "@/hooks/useScrollPosition";
import useWindowSize from "@/hooks/useWindowSize";
import { useActiveTag } from "@/hooks/useActiveTag";
import Tags from "@/components/projects/Tags";

export default function Projects() {
  // 维护当前激活的标签
  const { activeTag, handleTagClick } = useActiveTag();

  // 根据当前activeTag获取不同的projects数据
  const projects = useProjects(activeTag);

  // 获取滚动条的位置和浏览器窗口的大小，来显示GoTop组件
  const scrollPosition = useScrollPosition();
  const windowSize = useWindowSize();

  return (
    <div className="relative flex flex-col items-center justify-start w-full h-full min-h-[calc(100vh-64px)]">
      {/* tag */}
      <div className="flex mt-10 items-center justify-center mx-5 2xl:max-w-[1280px] border-[0.5px] border-borderColor rounded-xl py-2 px-5">
        <Tags activeTag={activeTag} handleTagClick={handleTagClick} />
      </div>

      {/* content */}
      {projects.length < 1 ? (
        <p className="pt-10 text-lg text-textBlue">
          Currently under development...
        </p>
      ) : (
        <div className="grid my-10 gap-14 xl:gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <CardList key={project.id} {...project} />
          ))}
        </div>
      )}

      {/* go to top button */}
      <div className="fixed right-2 bottom-1/4">
        {scrollPosition.scrollY > windowSize.height / 2 && <GoTop />}
      </div>
    </div>
  );
}
