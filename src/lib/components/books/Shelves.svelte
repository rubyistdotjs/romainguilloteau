<script lang="ts">
  import Section from "../Section.svelte";
  import Shelf from "./Shelf.svelte";

  export let shelves: any;
</script>

<Section title="Book shelves">
  <div class="grid grid-cols-1 xl:grid-cols-3 gap-14">
    {#each shelves as shelf}
      <Shelf {...shelf} />
    {/each}
  </div>
</Section>
