<script lang="ts">
  export let title: string | null = null;
</script>

<section
  class="container mx-auto px-8 pt-20 first-of-type:pt-12 last-of-type:pb-20 md:pt-32 first-of-type:md:pt-20 last-of-type:md:pb-32"
>
  {#if title}
    <h2
      class="text-2xl md:text-4xl text-gray-900 dark:text-gray-50 font-semibold mb-12 md:mb-20"
    >
      {title}
    </h2>
  {/if}
  <slot />
</section>
