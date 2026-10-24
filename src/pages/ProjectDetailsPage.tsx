import { ArrowLeft, Code2, ExternalLink } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";

import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { projects } from "@/data/projects";
import { formatProjectTag } from "@/lib/portfolio";

const primaryLinkClass =
  "inline-flex h-11 w-fit items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-bold text-page transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";
const secondaryLinkClass =
  "inline-flex h-11 w-fit items-center justify-center gap-2 rounded-lg border border-border-strong bg-surface px-5 text-sm font-bold text-content transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent";

export default function ProjectDetailsPage() {
  const { projectSlug } = useParams<{ projectSlug: string }>();
  const project = projects.find(
    (candidate) => candidate.slug === projectSlug,
  );

  if (!project) {
    return <Navigate replace to="/projects" />;
  }

  const visibleTags = project.tags.filter((tag) => tag !== "All");
  const details = project.details;

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

          <div className="flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={primaryLinkClass}
            >
              {details ? "Live site" : "Live demo"}
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>

            {project.repositoryUrl && (
              <a
                href={project.repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className={secondaryLinkClass}
              >
                <Code2 aria-hidden="true" className="size-4" />
                GitHub
              </a>
            )}
          </div>
        </header>

        <figure className="mx-auto mt-10 w-full overflow-hidden rounded-xl border border-border-strong bg-surface p-2 sm:p-3 md:w-4/5">
          <img
            src={project.image}
            alt={`${project.title} interface preview`}
            className="aspect-video w-full rounded-lg object-cover object-top"
            decoding="async"
          />
        </figure>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center lg:gap-14">
          <section>
            <SectionEyebrow>Overview</SectionEyebrow>
            <h2 className="mt-6 text-subheading font-bold text-content">
              About this project
            </h2>

            {details ? (
              <div className="mt-5 max-w-3xl space-y-4">
                {details.overview.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-7 text-content">
                    {paragraph}
                  </p>
                ))}
              </div>
            ) : (
              <p className="mt-5 max-w-3xl text-base leading-7 text-content">
                {project.summary}
              </p>
            )}
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
                  {formatProjectTag(tag)}
                </li>
              ))}
            </ul>
          </aside>
        </div>

        {details && (
          <>
            <section className="mt-16 sm:mt-20">
              <SectionEyebrow>Highlights</SectionEyebrow>
              <h2 className="mt-6 text-subheading font-bold text-content">
                Core product and engineering work
              </h2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {details.highlights.map((highlight) => (
                  <article
                    key={highlight.title}
                    className="border-l-2 border-accent bg-section px-5 py-4"
                  >
                    <h3 className="text-base font-bold text-content">
                      {highlight.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-content">
                      {highlight.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="mt-16 sm:mt-20">
              <SectionEyebrow>Interface</SectionEyebrow>
              <h2 className="mt-6 text-subheading font-bold text-content">
                Marketplace and management interfaces
              </h2>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {details.screenshots.map((screenshot) => (
                  <figure
                    key={screenshot.src}
                    className="overflow-hidden rounded-xl border border-border-strong bg-surface p-2"
                  >
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="aspect-[4/3] w-full rounded-lg object-cover object-top"
                      loading="lazy"
                      decoding="async"
                    />
                  </figure>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </article>
  );
}

