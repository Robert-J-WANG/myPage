import { Eye } from "lucide-react";
import { Link } from "react-router";

export default function ProjectCard({ project }) {
  return (
    <article className="mx-auto">
      <Link
        to={`/projects/${project.id}`}
        aria-label={`View ${project.title} details`}
        className="group grid aspect-[4/3] w-full max-w-[480px] grid-rows-[2fr_1fr] overflow-hidden rounded-t-xl border border-border-strong bg-surface focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:h-[390px] sm:w-[520px] sm:max-w-none min-[68rem]:h-[360px] min-[68rem]:w-[480px]"
      >
        <div className="relative min-h-0 overflow-hidden border-b border-border-strong bg-page">
          <img
            src={project.img}
            alt={`${project.title} interface preview`}
            className="size-full object-cover transition-[filter,opacity] duration-500 group-hover:blur group-hover:opacity-20 group-focus-visible:blur group-focus-visible:opacity-20"
            loading="lazy"
            decoding="async"
          />

          <div className="absolute top-0 z-20 flex size-full items-center justify-center rounded bg-surface transition-transform duration-500 -left-full group-hover:translate-x-full group-focus-visible:translate-x-full">
            <span className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-accent bg-control px-4 text-sm font-bold text-accent">
              <Eye aria-hidden="true" className="size-4" />
              View details
            </span>
          </div>
        </div>

        <div className="flex min-h-0 flex-col justify-center px-5 py-4">
          <h3 className="text-base font-bold text-content">{project.title}</h3>
          <p className="mt-2 min-h-12 line-clamp-2 text-sm leading-6 text-content">
            {project.description}
          </p>
        </div>
      </Link>
    </article>
  );
}
