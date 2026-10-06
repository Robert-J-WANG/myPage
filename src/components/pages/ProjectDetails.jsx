import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";

import SectionEyebrow from "@/components/widgets/SectionEyebrow";
import { featuredProjects, projects } from "@/data/projects";

function displayTag(tag) {
  const labels = {
    "react-hooks": "React Hooks",
    "React-router": "React Router",
  };

  return labels[tag] ?? tag;
}

export default function ProjectDetails() {
  const { projectId } = useParams();
  const numericProjectId = Number(projectId);
  const project =
    featuredProjects.find(({ id }) => id === numericProjectId) ??
    projects.find(({ id }) => id === numericProjectId);

  if (!project) {
    return <Navigate replace to="/projects" />;
  }

  const visibleTags = project.tags.filter((tag) => tag !== "All");

  return (
    <article className="w-full pb-16 sm:pb-20">
      <div className="mx-auto w-full max-w-6xl px-6 pt-12 sm:px-8 sm:pt-16 lg:pt-20">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft aria-hidden="true" className="size-4" />
          Back to projects
        </Link>

        <header className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0 max-w-3xl">
            <SectionEyebrow>Project details</SectionEyebrow>
            <h1 className="mt-6 text-subheading font-bold text-content">
              {project.title}
            </h1>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-fit items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-bold text-page transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            Live demo
            <ExternalLink aria-hidden="true" className="size-4" />
          </a>
        </header>

        <figure className="mt-10 overflow-hidden rounded-xl border border-border-strong bg-surface p-2 sm:p-3">
          <img
            src={project.img}
            alt={`${project.title} interface preview`}
            className="aspect-video w-full rounded-lg object-cover"
            decoding="async"
          />
        </figure>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start lg:gap-14">
          <section>
            <SectionEyebrow>Overview</SectionEyebrow>
            <h2 className="mt-6 text-subheading font-bold text-content">
              About this project
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-content">
              {project.description}
            </p>
          </section>

          <aside className="rounded-xl border border-border-strong bg-surface p-5 sm:p-6">
            <h2 className="flex items-center gap-3 text-base font-bold text-content">
              <span className="inline-flex size-10 items-center justify-center rounded-lg border border-border-strong bg-control text-accent">
                <Code2 aria-hidden="true" className="size-5" />
              </span>
              Technologies
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {visibleTags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-border-strong bg-control px-2.5 py-1 text-sm font-semibold text-content"
                >
                  {displayTag(tag)}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </article>
  );
}
