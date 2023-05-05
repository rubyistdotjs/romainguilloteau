<script lang="ts">
  import Section from "./Section.svelte";

  export let shelves: any;

  function shelfTitle(name: string) {
    return name === "currently-reading"
      ? "Reading"
      : name === "to-read"
      ? "Wishlist"
      : "Read";
  }

  function titleWithoutSubtitle(title: string) {
    return title.split(":")[0];
  }
</script>

<Section title="Library">
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-14">
    {#each shelves as shelf}
      <div>
        <h3 class="text-gray-500 font-medium leading-none mb-8">
          {shelfTitle(shelf.shelf)}
        </h3>

        {#each shelf.books as book}
          <a
            href={book.link}
            class="block mb-4 p-2 rounded-lg hover:bg-gray-100"
            rel="noopener noreferrer"
          >
            <div class="flex flex-row">
              <div class="w-12 h-full mr-3 flex-shrink-0">
                <img
                  src={book.cover_url}
                  alt={`Cover of the book "${titleWithoutSubtitle(
                    book.title,
                  )}"`}
                  class="w-full h-auto rounded"
                />
              </div>
              <div>
                <h4
                  class="text-gray-900 font-semibold leading-snug  line-clamp-1"
                >
                  {titleWithoutSubtitle(book.title)}
                </h4>
                <span class="text-gray-500">{book.author}</span>
              </div>
            </div>
          </a>
        {/each}
      </div>
    {/each}
  </div>
</Section>
