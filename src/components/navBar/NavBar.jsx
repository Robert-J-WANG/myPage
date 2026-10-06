import { useState } from "react";
import { Link } from "react-router";
import { Mail, MenuIcon, X } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { contactLink } from "@/data/site";
import Menu from "./Menu";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 gap-4">
        <Link
          to="/home"
          aria-label="Robert — home"
          className="inline-flex items-center group"
        >
          <span className="flex size-9 items-center justify-end rounded-lg border border-border-strong bg-gradient-to-br from-surface to-accent-soft pr-0.5 text-xl font-bold text-accent transition-colors group-hover:border-accent/60">
            R
          </span>
          <span className="-ml-px text-xl font-bold transition-colors text-content group-hover:text-accent">
            obert<span className="text-accent">.</span>
          </span>
        </Link>

        <div className="hidden md:block">
          <Menu />
        </div>

        <div className="flex items-center gap-2">
          <a
            href={contactLink}
            className="items-center justify-center hidden h-10 gap-2 px-4 text-base font-bold transition-colors border rounded-lg border-border-strong bg-chrome text-content hover:bg-surface hover:text-accent md:inline-flex"
          >
            Get in touch
            <Mail aria-hidden="true" className="size-4" />
          </a>
          <ThemeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMenuOpen ? (
              <X className="size-6" aria-hidden="true" />
            ) : (
              <MenuIcon className="size-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-navigation"
          className="py-3 border-t border-border-strong md:hidden"
        >
          <Menu mobile onNavigate={() => setIsMenuOpen(false)} />
          <a
            href={contactLink}
            className="inline-flex items-center justify-center w-full h-10 gap-2 px-4 mt-2 text-base font-bold transition-colors border rounded-lg border-border-strong bg-chrome text-content hover:bg-surface hover:text-accent"
            onClick={() => setIsMenuOpen(false)}
          >
            Get in touch
            <Mail aria-hidden="true" className="size-4" />
          </a>
        </div>
      )}
    </nav>
  );
}
