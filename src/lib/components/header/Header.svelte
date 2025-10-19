<script lang="ts">
  import DarkModeButton from "./DarkModeButton.svelte";
  import mugshotSrc from "./mugshot.webp";
</script>

<header
  class="container mx-auto flex flex-row items-center justify-between px-8 py-5"
>
  <div class="mr-10 h-10 w-10 overflow-hidden rounded-full grayscale">
    <img src={mugshotSrc} alt="Close-up of Romain Guilloteau" />
  </div>
  <div>
    <DarkModeButton />
  </div>
</header>
