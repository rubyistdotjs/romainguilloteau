import { PUBLIC_GOODREADS_SHELVES } from "$env/static/public";
import retrieveShelves from "$lib/server/goodreads/shelves";
import retrieveShelfBooks from "$lib/server/goodreads/books";

import type { PageServerLoad } from "./$types";
import type { Shelf } from "$lib/server/goodreads/shelves";

export const load = (async () => {
  const shelves = await retrieveShelves();
  const filteredShelves = PUBLIC_GOODREADS_SHELVES.split(",")
    .map((name) => shelves.find((shelf) => shelf.name === name))
    .filter((shelf) => shelf !== undefined) as Shelf[];

  const shelvesWithBooks = await Promise.all(
    filteredShelves.map(async (shelf) => {
      const books = await retrieveShelfBooks({ shelf: shelf.name });
      return { shelfName: shelf.name, booksCount: shelf.book_count, books };
    }),
  );

  return { shelves: shelvesWithBooks };
}) satisfies PageServerLoad;
