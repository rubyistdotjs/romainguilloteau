<script lang="ts">
  import SunIcon from "svelte-feather-icons/src/icons/SunIcon.svelte";
  import MoonIcon from "svelte-feather-icons/src/icons/MoonIcon.svelte";
  import { themeDark, toggleTheme } from "$lib/stores/theme";
</script>

<button
  type="button"
  title={$themeDark ? "Switch to light mode" : "Switch to dark mode"}
  class={`btn btn-sm ${$themeDark ? "btn-indigo" : "btn-yellow"}`}
  on:click={toggleTheme}
>
  {#if $themeDark}
    <MoonIcon size="20" />
  {:else}
    <SunIcon size="20" />
  {/if}
</button>
