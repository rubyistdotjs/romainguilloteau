<script lang="ts">
  let {
    title,
    author,
    coverUrl,
  }: { title: string; author: string; coverUrl: string } = $props();

  const shortTitle = $derived(title.split(":")[0]);
</script>

<div class="mb-6 flex flex-row">
  <div class="mr-3 h-full w-12 shrink-0">
    <img
      src={coverUrl}
      alt={`Cover of the book "${shortTitle}"`}
      class="h-auto w-full rounded"
      loading="lazy"
    />
  </div>
  <div>
    <h4
      class="line-clamp-1 leading-snug font-semibold text-gray-800 dark:text-gray-100"
    >
      {shortTitle}
    </h4>
    <span class="text-gray-600 dark:text-gray-400">{author}</span>
  </div>
</div>
