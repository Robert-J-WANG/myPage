import { MoveRight } from "lucide-react";
import { Link } from "react-router";

import ProjectCard from "@/components/projects/ProjectCard";
import SectionEyebrow from "@/components/widgets/SectionEyebrow";
import { featuredProjects } from "@/data/projects";

export default function FeaturedProjects({ showViewMore = true }) {
  return (
    <section
      id="projects"
      className="w-full max-w-6xl scroll-mt-16 px-6 py-12 sm:px-8 sm:py-16"
    >
      <header className="max-w-4xl">
        <SectionEyebrow>Featured projects</SectionEyebrow>
        <h2 className="mt-4 text-heading font-bold text-content">
          Selected work built around practical interfaces.
        </h2>
        <p className="mt-5 text-base leading-7 text-content">
          A selection of React and TypeScript projects focused on responsive
          design, routing, and client-side state.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 min-[68rem]:grid-cols-[repeat(2,480px)] min-[68rem]:justify-center min-[68rem]:gap-10">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {showViewMore && (
        <div className="mt-10 flex items-center justify-end gap-4">
          <span
            aria-hidden="true"
            className="h-px max-w-2xl flex-1 bg-gradient-to-l from-eyebrow/60 to-transparent"
          />
          <Link
            to="/projects"
            className="inline-flex h-11 shrink-0 items-center justify-center gap-2 px-2 text-sm font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:text-eyebrow"
          >
            View more projects
            <MoveRight aria-hidden="true" className="size-6" />
          </Link>
        </div>
      )}
    </section>
  );
}
