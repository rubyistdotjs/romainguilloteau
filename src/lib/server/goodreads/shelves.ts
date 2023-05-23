import { PUBLIC_GOODREADS_USER_ID } from "$env/static/public";

import { retrieve } from "./api";

type GoodreadsShelves = {
  shelves: {
    user_shelf: Shelf[];
  };
};

export type Shelf = {
  id: number;
  name: string;
  book_count: number;
  sort: string | null;
  order: string;
  per_page: number | null;
};

export const retrieveShelves = async () => {
  const res = await retrieve<GoodreadsShelves>("shelf/list.xml", {
    user_id: PUBLIC_GOODREADS_USER_ID,
  });

  return res.shelves.user_shelf;
};

export default retrieveShelves;
