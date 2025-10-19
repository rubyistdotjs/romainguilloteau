<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";

  import ButtonLink from "$lib/components/ButtonLink.svelte";
  import Section from "$lib/components/Section.svelte";

  import { page } from "$app/stores";
</script>

<MetaTags
  title={$page.status === 404 ? "Page not found" : "Oops"}
  robots="noindex"
/>

<Section>
  <h1
    class="mb-8 text-3xl font-bold text-gray-900 md:text-5xl lg:mb-12 lg:text-6xl dark:text-gray-50"
  >
    {#if $page.status === 404}
      Page not found
    {:else}
      Unexpected error
    {/if}
  </h1>
  <p class="mb-20 leading-relaxed text-gray-800 md:text-lg dark:text-gray-300">
    {#if $page.status === 404}
      The page you are looking for does not seem to exist (anymore?).
    {:else}
      Something horribly wrong happened, refreshing the page might help 🤷.
    {/if}
  </p>
  <ButtonLink href="/">Go to the home page</ButtonLink>
</Section>
