import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-12rem)] w-full flex-col items-center justify-center gap-5 text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-accent">
        404
      </p>
      <h1 className="text-heading font-bold text-content">
        Page not found
      </h1>
      <Link
        className="rounded border border-accent px-4 py-2 text-sm font-bold text-accent transition hover:bg-accent hover:text-page"
        to="/home"
      >
        Return home
      </Link>
    </section>
  );
}
