<script lang="ts">
  import Section from "$lib/components/Section.svelte";

  import Job from "./Job.svelte";
  import jobs from "$lib/data/jobs.json";
</script>

<Section title="Experiences">
  <div class="grid grid-cols-1 xl:grid-cols-2 gap-16">
    {#each jobs as job}
      <Job {job} />
    {/each}
  </div>
</Section>
