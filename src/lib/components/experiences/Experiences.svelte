<script lang="ts">
  import Section from "$lib/components/Section.svelte";

  import Job from "./Job.svelte";
  import jobs from "$lib/data/jobs.json";
</script>

<Section title="Experiences">
  <div class="grid grid-cols-1 gap-16 xl:grid-cols-2">
    {#each jobs as job (job.slug)}
      <Job {job} />
    {/each}
  </div>
</Section>
