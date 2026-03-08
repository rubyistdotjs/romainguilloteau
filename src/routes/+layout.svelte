<script lang="ts">
  import Header from "$lib/components/header/Header.svelte";
  import type { Snippet } from "svelte";

  import "../app.css";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<main>
  <Header />
  {@render children()}
</main>
