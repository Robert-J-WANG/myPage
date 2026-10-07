import { Code2 } from "lucide-react";

import aboutMe from "@/assets/profile/about-me.webp";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { skillGroups } from "@/data/site";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full py-12 scroll-mt-16 bg-section sm:py-16"
    >
      <div className="w-full max-w-6xl px-6 mx-auto sm:px-8">
        <header className="max-w-4xl">
          <SectionEyebrow>Skills</SectionEyebrow>
          <h2 className="mt-4 font-bold text-heading text-content">
            Tools I use to build practical web experiences.
          </h2>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="grid items-center h-full mt-4 ">
            <div className="relative max-w-lg mb-3 mr-3 lg:max-w-none">
              <span
                aria-hidden="true"
                className="absolute border pointer-events-none -bottom-3 -right-3 size-full rounded-xl border-accent"
              />
              <figure className="relative w-full p-2 overflow-hidden border rounded-xl border-border-strong bg-surface">
                <img
                  src={aboutMe}
                  alt="Illustration of Robert working on a laptop"
                  className="aspect-[3/2] w-full rounded-lg object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>

          <div className="space-y-7">
            <p className="mt-5 text-base leading-7 text-content">
              Technologies I have used across my studies, work experience,
              and personal projects.
            </p>
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="flex items-center gap-2 font-bold text-accent">
                  <Code2 aria-hidden="true" className="size-4" />
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-2 mt-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border-strong bg-surface px-3 py-0.5 text-sm  leading-5 text-content transition-colors hover:border-accent/60 hover:text-accent"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
