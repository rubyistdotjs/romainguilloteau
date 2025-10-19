<script lang="ts">
  import Section from "$lib/components/Section.svelte";

  import stacks from "$lib/data/stacks.json";
</script>

<Section title="Stack">
  {#each stacks as stack}
    <div class="mb-16 border-l border-gray-100 pl-6 dark:border-gray-900">
      <div class="grid grid-cols-1 md:grid-cols-4">
        <h3
          class="mb-8 text-sm leading-none font-medium text-gray-800 dark:text-gray-100"
        >
          {stack.name}
        </h3>
        <ul class="space-y-8 md:col-span-3">
          {#each stack.entries as entry}
            <li>
              <h4
                class="mb-2 leading-none font-semibold text-gray-800 dark:text-gray-100"
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
