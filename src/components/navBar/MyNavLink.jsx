import { Link, useLocation } from "react-router";

import { scrollToSection } from "@/lib/scrollToSection";

export default function MyNavLink({ to, children, mobile = false, onNavigate }) {
  const location = useLocation();
  const [pathname, section] = to.split("#");
  const targetHash = section ? `#${section}` : "";
  const isActive =
    location.pathname === pathname &&
    (location.hash === targetHash || (section === "about" && !location.hash));

  const handleClick = (event) => {
    onNavigate?.();

    if (
      section &&
      location.pathname === pathname &&
      location.hash === targetHash
    ) {
      event.preventDefault();
      scrollToSection(section);
    }
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={`block rounded-lg font-bold transition-colors hover:bg-surface hover:text-accent ${
        mobile ? "px-3 py-2 text-base" : "px-2 py-2 text-base"
      } ${isActive ? "text-accent" : "text-content"}`}
    >
      {children}
    </Link>
  );
}
