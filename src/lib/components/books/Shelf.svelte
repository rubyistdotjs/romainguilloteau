<script lang="ts">
  import Book from "./Book.svelte";
  import type { Book as BookType } from "./books.type";

  export let shelfName: string;
  export let booksCount: number;
  export let books: BookType[];

  $: title = shelfTitle(shelfName);
  $: booksOverflow = booksCount - books.length;

  function shelfTitle(name: string) {
    return name === "currently-reading"
      ? "Reading"
      : name === "to-read"
        ? "Wishlist"
        : "Read";
  }
</script>

<div>
  <h3 class="text-gray-500 dark:text-gray-400 font-medium leading-none mb-8">
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
