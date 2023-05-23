export type Book = {
  title: string;
  author: string;
  coverUrl: string;
};

export type Shelf = {
  shelfName: string;
  booksCount: number;
  books: Book[];
};
