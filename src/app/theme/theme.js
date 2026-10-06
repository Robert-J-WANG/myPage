export const THEME_STORAGE_KEY = "portfolio-theme";

const isTheme = (value) => value === "light" || value === "dark";

export function getInitialTheme() {
  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (isTheme(storedTheme)) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getDocumentTheme() {
  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
}

export function applyTheme(theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
}

export function persistTheme(theme) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
}

export function initialiseTheme() {
  const theme = getInitialTheme();
  applyTheme(theme);

  return theme;
}
