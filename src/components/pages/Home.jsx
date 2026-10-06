import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router";

import Skills from "@/components/pages/Skills";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import TypewriterText from "@/components/home/TypewriterText";
import SectionEyebrow from "@/components/widgets/SectionEyebrow";
import { homeIntroduction } from "@/data/site";
import { useAOSAnimation } from "@/hooks/useAOSAnimation";
import { scrollToSection } from "@/lib/scrollToSection";
import avatar from "@/assets/profile/avatar.webp";

function Home() {
  useAOSAnimation(700);

  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 });
      return undefined;
    }

    const sectionId = hash.slice(1);
    const scrollTimer = window.setTimeout(() => {
      scrollToSection(sectionId);
    }, 0);

    return () => window.clearTimeout(scrollTimer);
  }, [hash]);

  return (
    <>
      <section
        id="about"
        className="flex w-full max-w-6xl scroll-mt-16 items-center px-6 py-12 sm:px-8 sm:py-16"
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div
            className="order-2 flex max-w-2xl flex-col items-start lg:order-1"
            data-aos="fade-up"
          >
            <div className="mb-4 w-full max-w-xl">
              <SectionEyebrow>About</SectionEyebrow>
            </div>
            <h1 className="min-h-[2.5em] text-heading font-bold text-content sm:min-h-[1.25em]">
              <span className="block sm:inline">Hi, I’m </span>
              <span className="block min-h-[1.25em] whitespace-nowrap text-accent sm:inline-block sm:min-w-[15ch]">
                <TypewriterText />
              </span>
            </h1>
            <div className="mt-6 max-w-xl space-y-3 text-base leading-8 text-content">
              {homeIntroduction.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/home#projects"
                onClick={(event) => {
                  if (hash === "#projects") {
                    event.preventDefault();
                    scrollToSection("projects");
                  }
                }}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-accent px-5 text-sm font-bold text-page transition-opacity hover:opacity-85"
              >
                View projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div
            className="order-1 flex justify-center lg:order-2 lg:justify-end"
            data-aos="zoom-in"
          >
            <div className="relative flex size-60 items-center justify-center overflow-hidden rounded-full sm:size-64 lg:size-72">
              <span
                aria-hidden="true"
                className="absolute size-[18rem] rounded-full bg-[conic-gradient(from_20deg,var(--theme-accent),var(--theme-decoration),var(--theme-accent-soft),var(--theme-accent))] animate-spin-slow sm:size-[20rem] lg:size-[22rem]"
              />
              <div
                className="z-10 size-56 rounded-full bg-border-strong bg-center bg-no-repeat sm:size-60 lg:size-68"
                style={{
                  backgroundImage: `url(${avatar})`,
                  backgroundSize: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <Skills />
      <FeaturedProjects />
    </>
  );
}

export default Home;
