<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";

  import ButtonLink from "$lib/components/ButtonLink.svelte";
  import Section from "$lib/components/Section.svelte";

  import { page } from "$app/stores";
</script>

<MetaTags title={$page.status === 404 ? "Page not found" : "Oops"} noindex />

<Section>
  <h1
    class="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-8 lg:mb-12"
  >
    {#if $page.status === 404}
      Page not found
    {:else}
      Unexpected error
    {/if}
  </h1>
  <p class="md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed mb-20">
    {#if $page.status === 404}
      The page you are looking for does not seem to exist (anymore?).
    {:else}
      Something horribly wrong happened, refreshing the page might help 🤷.
    {/if}
  </p>
  <ButtonLink href="/">Go to the home page</ButtonLink>
</Section>
