import { Link } from "react-router";

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-12rem)] w-full flex-col items-center justify-center gap-5 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-mainColor">404</p>
      <h1 className="text-3xl font-bold text-textColor sm:text-4xl">Page not found</h1>
      <Link className="rounded border border-mainColor px-4 py-2 text-mainColor transition hover:bg-mainColor hover:text-bgColor" to="/home">
        Return home
      </Link>
    </section>
  );
}
