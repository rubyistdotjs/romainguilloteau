<script lang="ts">
  import Book from "./Book.svelte";
  import type { Book as BookType } from "./books.type";

  let {
    shelfName,
    booksCount,
    books,
  }: { shelfName: string; booksCount: number; books: BookType[] } = $props();

  const title = $derived(shelfTitle(shelfName));
  const booksOverflow = $derived(booksCount - books.length);

  function shelfTitle(name: string) {
    return name === "currently-reading"
      ? "Reading"
      : name === "to-read"
        ? "Wishlist"
        : "Read";
  }
</script>

<div>
  <h3 class="mb-8 leading-none font-medium text-gray-500 dark:text-gray-400">
    {title}
  </h3>

  {#each books as book}
    <Book title={book.title} author={book.author} coverUrl={book.coverUrl} />
  {/each}

  {#if booksOverflow > 0}
    <span class="text-sm text-gray-500 dark:text-gray-400"
      >... and {booksOverflow} more</span
    >
  {/if}
</div>
