import type { PageLoad } from "./$types";

export const load = (async ({ fetch }) => {
  const res = await fetch("/.netlify/functions/books");
  const books = await res.json();
  return { books };
}) satisfies PageLoad;

export const prerender = true;
