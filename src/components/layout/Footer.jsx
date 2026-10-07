import SocialLinks from "@/components/layout/SocialLinks";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-border-strong bg-chrome">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Robert J. Wang.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
