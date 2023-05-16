<script lang="ts">
  import Book from "./Book.svelte";

  export let shelfName: string;
  export let booksCount: string;
  export let books: [any];

  $: title = shelfTitle(shelfName);
  $: booksOverflow = computeBooksOverflow(booksCount, books.length);

  function shelfTitle(name: string) {
    return name === "currently-reading"
      ? "Reading"
      : name === "to-read"
      ? "Wishlist"
      : "Read";
  }

  function computeBooksOverflow(total: string, displayed: number) {
    return parseInt(total, 10) - displayed;
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
    <span class="text-sm text-gray-500">... and {booksOverflow} more</span>
  {/if}
</div>
