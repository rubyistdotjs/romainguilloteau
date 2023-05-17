import { writable, derived } from "svelte/store";
import { browser } from "$app/environment";

export type Theme = "dark" | "light";

export const theme = writable<Theme>(browser ? localStorage.theme : "light");
export const themeDark = derived(theme, ($theme) => $theme === "dark");

export function toggleTheme() {
  theme.update((currentTheme) => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    localStorage.theme = newTheme;

    newTheme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");

    return newTheme;
  });
}
