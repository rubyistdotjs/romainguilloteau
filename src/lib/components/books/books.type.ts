export type Book = {
  title: string;
  author: string;
  coverUrl: string;
};

export type Shelf = {
  shelfName: string;
  booksCount: string;
  books: Book[];
};
