<script lang="ts">
  import Section from "$lib/components/Section.svelte";

  import stacks from "$lib/data/stacks.json";
</script>

<Section title="Stack">
  {#each stacks as stack}
    <div class="border-l border-gray-100 dark:border-gray-900 pl-6 mb-16">
      <div class="grid grid-cols-1 md:grid-cols-4">
        <h3
          class="text-gray-800 dark:text-gray-100 text-sm font-medium leading-none mb-8"
        >
          {stack.name}
        </h3>
        <ul class="md:col-span-3 space-y-8">
          {#each stack.entries as entry}
            <li>
              <h4
                class="font-semibold leading-none text-gray-800 dark:text-gray-100 mb-2"
              >
                {entry.name}
              </h4>
              <p class=" text-gray-600 dark:text-gray-400">{entry.comment}</p>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  {/each}
</Section>
