<script lang="ts">
  export let title: string;
  export let author: string;
  export let coverUrl: string;

  $: shortTitle = shortenTitle(title);

  function shortenTitle(name: string) {
    return title.split(":")[0];
  }
</script>

<div class="flex flex-row mb-6">
  <div class="w-12 h-full mr-3 flex-shrink-0">
    <img
      src={coverUrl}
      alt={`Cover of the book "${shortTitle}"`}
      class="w-full h-auto rounded"
    />
  </div>
  <div>
    <h4
      class="text-gray-900 dark:text-gray-50 font-semibold leading-snug line-clamp-1"
    >
      {shortTitle}
    </h4>
    <span class="text-gray-500 dark:text-gray-400">{author}</span>
  </div>
</div>
