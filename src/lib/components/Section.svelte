<script lang="ts">
  let { title = null }: { title: string | null } = $props();
</script>

<section
  class="container mx-auto px-8 pt-20 first-of-type:pt-12 last-of-type:pb-20 md:pt-32 first-of-type:md:pt-20 last-of-type:md:pb-32"
>
  {#if title}
    <h2
      class="mb-12 text-2xl font-semibold text-gray-900 md:mb-20 md:text-4xl dark:text-gray-50"
    >
      {title}
    </h2>
  {/if}
  <slot />
</section>
