import { ArrowUp } from "lucide-react";

export default function GoTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      className="fixed right-4 bottom-[33.333%] z-30 inline-flex size-11 items-center justify-center rounded-full border border-border-strong bg-control text-accent shadow-sm transition-colors hover:bg-accent hover:text-page sm:right-6"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowUp aria-hidden="true" className="size-5" />
    </button>
  );
}
