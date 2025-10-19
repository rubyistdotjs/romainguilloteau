export type Book = {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
};

export type Shelf = {
  id: number;
  name: string;
  booksCount: number;
  books: Book[];
};
