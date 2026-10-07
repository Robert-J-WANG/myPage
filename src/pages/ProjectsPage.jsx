import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

import BackToTop from "@/components/projects/BackToTop";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilters from "@/components/projects/ProjectFilters";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { projects } from "@/data/projects";
import { filterProjects, getProjectTags } from "@/lib/portfolio";
import useScrollPosition from "@/hooks/useScrollPosition";
import useWindowSize from "@/hooks/useWindowSize";

const projectTags = getProjectTags(projects);

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");
  const visibleProjects = filterProjects(projects, activeTag);
  const scrollPosition = useScrollPosition();
  const windowSize = useWindowSize();

  return (
    <div className="relative min-h-[calc(100vh-64px)] w-full pb-16">
      <header className="mx-auto w-full max-w-6xl px-6 pt-16 sm:px-8 sm:pt-20 lg:pt-24">
        <SectionEyebrow>Projects</SectionEyebrow>
        <h1 className="mt-4 text-heading font-bold text-content">
          More projects and frontend experiments.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-7 text-content">
          Browse the full collection or filter it by the technologies used.
        </p>
      </header>

      <section
        aria-label="Filter projects"
        className="mx-auto mt-10 w-full max-w-6xl px-6 sm:px-8"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
          <div className="inline-flex h-9 shrink-0 items-center gap-2 text-sm font-bold text-muted">
            <SlidersHorizontal aria-hidden="true" className="size-4" />
            <span>Filter</span>
          </div>
          <ProjectFilters
            tags={projectTags}
            activeTag={activeTag}
            onTagChange={setActiveTag}
          />
        </div>
      </section>

      <section
        aria-label="Project results"
        className="relative mt-10 w-full bg-section py-12 sm:py-16"
      >
        <div aria-hidden="true" className="absolute inset-x-0 top-0 flex justify-center">
          <span className="h-px w-1/3 max-w-xs bg-gradient-to-l from-eyebrow/60 to-transparent" />
          <span className="h-px w-1/3 max-w-xs bg-gradient-to-r from-eyebrow/60 to-transparent" />
        </div>

        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 flex justify-center">
          <span className="h-px w-1/3 max-w-xs bg-gradient-to-l from-eyebrow/60 to-transparent" />
          <span className="h-px w-1/3 max-w-xs bg-gradient-to-r from-eyebrow/60 to-transparent" />
        </div>


        {visibleProjects.length < 1 ? (
          <p className="px-6 text-center text-base text-muted">
            No projects match this filter.
          </p>
        ) : (
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 sm:px-8 min-[68rem]:grid-cols-[repeat(2,480px)] min-[68rem]:justify-center min-[68rem]:gap-10">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      {scrollPosition.scrollY > windowSize.height / 2 && <BackToTop />}
    </div>
  );
}
