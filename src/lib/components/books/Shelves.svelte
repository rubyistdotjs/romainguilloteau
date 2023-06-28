<script lang="ts">
  import { PUBLIC_GOODREADS_USER_ID } from "$env/static/public";

  import Section from "../Section.svelte";
  import Shelf from "./Shelf.svelte";
  import type { Shelf as ShelfType } from "./books.type";

  export let shelves: ShelfType[];
</script>

<Section title="Book shelves">
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-14">
    {#each shelves as shelf}
      <Shelf {...shelf} />
    {/each}
  </div>
  <p class="text-sm text-gray-500 dark:text-gray-400 mt-16">
    Data retrieved using the Goodreads API,
    <a
      href={`https://www.goodreads.com/user/show/${PUBLIC_GOODREADS_USER_ID}`}
      target="_blank"
      rel="noopener noreferrer"
      class="underline underline-offset-2 hover:text-indigo-600 dark:hover:text-indigo-500"
    >
      visit my profile
    </a>
    to see more.
  </p>
</Section>
