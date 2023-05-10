<script lang="ts">
  import DarkModeButton from "$lib/components/DarkModeButton.svelte";

  import "../app.css";
</script>

<main>
  <div class="container mx-auto px-8 pt-4 text-right">
    <DarkModeButton />
  </div>
  <slot />
</main>
