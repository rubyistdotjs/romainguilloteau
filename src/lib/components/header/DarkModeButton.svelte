<script lang="ts">
  import { SunIcon, MoonIcon } from "lucide-svelte";
  import { themeDark, toggleTheme } from "$lib/stores/theme";
</script>

<button
  type="button"
  title={`Switch to ${$themeDark ? "light" : "dark"} mode`}
  class={`btn btn-sm ${$themeDark ? "btn-indigo" : "btn-yellow"}`}
  on:click={toggleTheme}
>
  {#if $themeDark}
    <MoonIcon size="20" />
  {:else}
    <SunIcon size="20" />
  {/if}
</button>
