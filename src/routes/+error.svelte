<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import Section from "$lib/components/Section.svelte";

  import { page } from "$app/stores";
</script>

<svelte:head>
  {#if $page.status === 404}
    <title>Page not found</title>
  {:else}
    <title>Oops</title>
  {/if}
  <meta name="robots" content="none" />
</svelte:head>

<Section>
  <h1
    class="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-none mb-8 lg:mb-12"
  >
    {#if $page.status === 404}
      Page not found
    {:else}
      Unexpected error
    {/if}
  </h1>
  <p class="md:text-lg text-gray-800 leading-relaxed mb-20">
    {#if $page.status === 404}
      The page you are looking for does not seem to exist (anymore?).
    {:else}
      Something horribly wrong happened, refreshing the page might help 🤷.
    {/if}
  </p>
  <Button href="/">Go to the home page</Button>
</Section>
