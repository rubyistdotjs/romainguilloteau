<script lang="ts">
  export let title: string | null = null;
</script>

<section class="container mx-auto px-8 my-20 md:my-32">
  {#if title}
    <h2 class="text-2xl md:text-4xl text-gray-900 font-semibold mb-12 md:mb-20">
      {title}
    </h2>
  {/if}
  <slot />
</section>
