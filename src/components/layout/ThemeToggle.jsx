import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import {
  applyTheme,
  getDocumentTheme,
  persistTheme,
} from "@/app/theme/theme";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getDocumentTheme);
  const nextTheme = theme === "light" ? "dark" : "light";

  function toggleTheme() {
    applyTheme(nextTheme);
    persistTheme(nextTheme);
    setTheme(nextTheme);
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={`Switch to ${nextTheme} theme`}
      aria-label={`Switch to ${nextTheme} theme`}
    >
      {theme === "light" ? (
        <Moon className="size-5" aria-hidden="true" />
      ) : (
        <Sun className="size-5" aria-hidden="true" />
      )}
    </Button>
  );
}
