<script lang="ts">
  import DarkModeButton from "./DarkModeButton.svelte";
  import mugshotSrc from "./mugshot.webp";
</script>

<header
  class="container mx-auto px-8 py-5 flex flex-row justify-between items-center"
>
  <div class="w-10 h-10 mr-10 rounded-full grayscale overflow-hidden">
    <img src={mugshotSrc} alt="Close-up photo of Romain Guilloteau" />
  </div>
  <div>
    <DarkModeButton />
  </div>
</header>
