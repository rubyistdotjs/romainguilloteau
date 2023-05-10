<script lang="ts">
  import { browser } from "$app/environment";
  import { SunIcon, MoonIcon } from "svelte-feather-icons";

  let darkMode = initialValue();

  function initialValue() {
    if (!browser) return true;

    return (
      localStorage.theme === "dark" ||
      (localStorage.theme === undefined &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  }

  function switchToLight() {
    darkMode = false;
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }

  function switchToDark() {
    darkMode = true;
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  }
</script>

{#if darkMode}
  <button
    type="button"
    title="Switch to light mode"
    class="text-gray-400 p-3 rounded-full transition-colors duration-150 ease-in-out hover:text-yellow-100 hover:bg-yellow-950"
    on:click={switchToLight}
  >
    <SunIcon size="20" />
  </button>
{:else}
  <button
    type="button"
    title="Switch to dark mode"
    class="text-gray-500 p-3 rounded-full transition-colors duration-150 ease-in-out hover:text-indigo-600 hover:bg-indigo-100"
    on:click={switchToDark}
  >
    <MoonIcon size="20" />
  </button>
{/if}
