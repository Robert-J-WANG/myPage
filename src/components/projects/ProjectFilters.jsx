import { formatProjectTag } from "@/lib/portfolio";

export default function ProjectFilters({ tags, activeTag, onTagChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <button
          type="button"
          className={`rounded-md border px-3 py-1.5 text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            tag === activeTag
              ? "border-accent bg-accent text-page"
              : "border-border-strong bg-control text-content hover:border-accent/60 hover:text-accent"
          }`}
          key={tag}
          onClick={() => onTagChange(tag)}
        >
          {formatProjectTag(tag)}
        </button>
      ))}
    </div>
  );
}
