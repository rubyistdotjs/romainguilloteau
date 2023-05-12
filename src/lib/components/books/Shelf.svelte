<script lang="ts">
  import { PUBLIC_GOODREADS_USER_ID } from "$env/static/public";
  import ExternalLinkIcon from "svelte-feather-icons/src/icons/ExternalLinkIcon.svelte";
  import Book from "./Book.svelte";

  export let shelfName: string;
  export let booksCount: string;
  export let books: [any];

  $: title = shelfTitle(shelfName);
  $: booksOverflow = computeBooksOverflow(booksCount, books.length);
  $: url = shelfUrl(shelfName);

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

  function shelfUrl(name: string) {
    return `https://www.goodreads.com/review/list/${PUBLIC_GOODREADS_USER_ID}?shelf=${name}&per_page=100`;
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
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block text-gray-500 dark:text-gray-400 text-sm hover:text-indigo-600 dark:hover:text-indigo-500 mt-3"
    >
      ... and {booksOverflow} more
      <ExternalLinkIcon size="13" class="inline-block align-middle ml-1" />
    </a>
  {/if}
</div>
