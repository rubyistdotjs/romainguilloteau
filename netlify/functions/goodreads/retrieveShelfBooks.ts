import { retrieve } from "./api";

const { GOODREADS_USER_ID } = process.env;

interface GoodreadsReviews {
  reviews: {
    review: GoodreadsReview | GoodreadsReview[];
  };
}

interface GoodreadsReview {
  id: number;
  book: GoodreadsBook;
  rating: number;
  started_at: Date;
  read_at: Date;
}

interface GoodreadsBook {
  id: number;
  title: string;
  title_without_series: string;
  description: string;
  image_url: string;
  small_image_url: string;
  large_image_url: string;
  link: string;
  num_pages: number;
  format: string;
  authors: {
    author: GoodreadsAuthor | GoodreadsAuthor[];
  };
}

interface GoodreadsAuthor {
  id: number;
  name: string;
  image: string;
  small_image_url: string;
  link: string;
}

export interface ShelfBook {
  id: number;
  coverUrl: string;
  title: string;
  author: string;
  link: string;
}

const formatBook = (review: GoodreadsReview): ShelfBook => {
  const { book } = review;
  const author = Array.isArray(book.authors.author)
    ? book.authors.author[0]
    : book.authors.author;

  return {
    id: book.id,
    coverUrl: book.image_url,
    title: book.title_without_series,
    author: author.name,
    link: book.link,
  };
};

export const retrieveShelfBooks = async ({
  shelf,
  sort = "date_read",
  order = "d",
  per_page = 6,
  page = 1,
}: {
  shelf: string;
  sort?: string;
  order?: string;
  per_page?: number;
  page?: number;
}) => {
  const res = await retrieve<GoodreadsReviews>("review/list", {
    params: {
      v: "2",
      shelf,
      sort,
      order,
      page,
      per_page,
      id: GOODREADS_USER_ID,
    },
  });

  const { review } = res.reviews;
  const reviews = Array.isArray(review) ? review : [review];
  return reviews.map((r) => formatBook(r));
};

export default retrieveShelfBooks;
