<script lang="ts">
  import { PUBLIC_ABLA_WEBSITE_ID } from "$env/static/public";
  import Header from "$lib/components/header/Header.svelte";

  import "../app.css";
</script>

<svelte:head>
  {#if PUBLIC_ABLA_WEBSITE_ID}
    <script
      async
      defer
      data-website-id={PUBLIC_ABLA_WEBSITE_ID}
      src="https://tableau.abla.io/abla.js"
    ></script>
  {/if}
</svelte:head>

<main>
  <Header />
  <slot />
</main>
