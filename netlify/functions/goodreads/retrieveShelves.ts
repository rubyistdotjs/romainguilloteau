import { retrieve } from "./api";

const { GOODREADS_USER_ID } = process.env;

interface GoodreadsShelves {
  shelves: {
    user_shelf: Shelf[];
  };
}

export interface Shelf {
  id: number;
  name: string;
  book_count: number;
  sort: string | null;
  order: string;
  per_page: number | null;
}

export const retrieveShelves = async () => {
  const res = await retrieve<GoodreadsShelves>("shelf/list.xml", {
    params: { user_id: GOODREADS_USER_ID },
  });

  return res.shelves.user_shelf;
};

export default retrieveShelves;
