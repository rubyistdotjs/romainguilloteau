<script lang="ts">
  import Section from "$lib/components/Section.svelte";

  import stacks from "$lib/data/stacks.json";
</script>

<Section title="Stacks">
  <div class="">
    {#each stacks as stack}
      <div class="border-l border-gray-100 pl-6">
        <div class="grid grid-cols-1 md:grid-cols-4 mb-14">
          <h3 class="text-gray-500 text-sm font-medium leading-none mb-8">
            {stack.name}
          </h3>
          <ul class="md:col-span-3 space-y-4">
            {#each stack.entries as entry}
              <li>
                <h4 class="font-semibold text-gray-800 mb-1">
                  {entry.name}
                </h4>
                <p class="text-gray-500">{entry.comment}</p>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/each}
  </div>
</Section>
