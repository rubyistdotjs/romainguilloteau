import { Handler } from "@netlify/functions";

import retrieveShelves, { Shelf } from "../goodreads/retrieveShelves";
import retrieveShelfBooks from "../goodreads/retrieveShelfBooks";

const { GOODREADS_SHELVES } = process.env;

export const handler: Handler = async function (event) {
  if (event.httpMethod !== "GET") return { statusCode: 404, body: "" };
  if (GOODREADS_SHELVES === undefined) return { statusCode: 500, body: "" };

  const shelves = await retrieveShelves();
  const filteredShelves = GOODREADS_SHELVES.split(",")
    .map((name) => shelves.find((shelf) => shelf.name === name))
    .filter((shelf) => shelf !== undefined) as Shelf[];

  const shelvesWithBooks = await Promise.all(
    filteredShelves.map(async (shelf) => {
      const books = await retrieveShelfBooks({ shelf: shelf.name });
      return { shelfName: shelf.name, booksCount: shelf.book_count, books };
    }),
  );

  return {
    statusCode: 200,
    body: JSON.stringify(shelvesWithBooks),
  };
};
