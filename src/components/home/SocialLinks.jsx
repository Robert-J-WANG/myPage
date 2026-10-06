import { socialLinks } from "@/data/site";

function LinkedInIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31ZM5.34 7.43A2.07 2.07 0 1 1 5.34 3.3a2.07 2.07 0 0 1 0 4.13ZM3.56 20.45h3.57V9H3.56v11.45Z" />
    </svg>
  );
}

function GitHubIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 .55A11.46 11.46 0 0 0 8.37 22.9c.58.1.79-.25.79-.56v-2.16c-3.22.7-3.9-1.38-3.9-1.38-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.27-1.28-5.27-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.16 1.18A10.96 10.96 0 0 1 12 5.04c.98 0 1.96.13 2.88.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.82 1.19 3.08 0 4.43-2.7 5.4-5.28 5.69.41.35.78 1.04.78 2.1v3.12c0 .31.21.67.8.56A11.46 11.46 0 0 0 12 .55Z" />
    </svg>
  );
}

const iconByTitle = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
};

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-3">
      {socialLinks.map((item) => {
        const Icon = iconByTitle[item.title];

        return (
          <li key={item.id}>
            <a
              href={item.anchor}
              target="_blank"
              rel="noreferrer"
              aria-label={item.title}
              className="inline-flex items-center justify-center transition-colors border rounded-lg size-10 border-border-strong bg-control text-accent hover:bg-accent hover:text-page"
            >
              <Icon className="size-5" />
              <span className="sr-only">{item.title}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
