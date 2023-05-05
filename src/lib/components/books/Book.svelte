<script lang="ts">
  export let title: string;
  export let author: string;
  export let coverUrl: string;
  export let link: string;

  $: shortTitle = shortenTitle(title);

  function shortenTitle(name: string) {
    return title.split(":")[0];
  }
</script>

<a
  href={link}
  class="block mb-4 p-2 rounded-lg hover:bg-gray-100"
  rel="noopener noreferrer"
>
  <div class="flex flex-row">
    <div class="w-12 h-full mr-3 flex-shrink-0">
      <img
        src={coverUrl}
        alt={`Cover of the book "${shortTitle}"`}
        class="w-full h-auto rounded"
      />
    </div>
    <div>
      <h4 class="text-gray-900 font-semibold leading-snug line-clamp-1">
        {shortTitle}
      </h4>
      <span class="text-gray-500">{author}</span>
    </div>
  </div>
</a>
