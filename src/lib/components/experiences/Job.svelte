<script lang="ts">
  import LinkIcon from "lucide-svelte/icons/link";
  import { differenceInCalendarMonths } from "date-fns";

  type Job = {
    company: string;
    logo: string;
    url: string;
    startDate: string;
    endDate: string | null;
    title: string;
    summary: string;
  };

  let { job }: { job: Job } = $props();

  const yearsCount = $derived(yearsDiff(job.startDate, job.endDate));
  const domain = $derived(urlDomain(job.url));

  function yearsDiff(startAt: string, endAt: string | null) {
    const startDate = new Date(startAt);
    const endDate = new Date(endAt || new Date());
    return Math.ceil(differenceInCalendarMonths(endDate, startDate) / 12);
  }

  function urlDomain(url: string) {
    const domain = new URL(url);

    return domain.hostname.startsWith("www")
      ? domain.hostname.substring(4)
      : domain.hostname;
  }
</script>

<div class="flex flex-row">
  <div class="mr-4 h-6 w-6 md:mr-5 md:h-8 md:w-8">
    {#if job.logo}
      <img src={`./images/${job.logo}`} alt={`${job.company}'s logo`} />
    {/if}
  </div>
  <div class="flex-1">
    <div class="mb-2 flex flex-row items-center">
      <h3
        class="mr-3 text-lg leading-none font-semibold text-gray-800 md:text-xl md:leading-none dark:text-gray-100"
      >
        {job.company}
      </h3>
      {#if job.endDate}
        <span
          class="rounded-full bg-gray-200 px-2 py-1 text-xs leading-none font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
        >
          {yearsCount} years
        </span>
      {:else}
        <span
          class="rounded-full bg-indigo-100 px-2 py-1 text-xs leading-none font-medium text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200"
        >
          {yearsCount} years
        </span>
      {/if}
    </div>
    <span class="block text-gray-800 dark:text-gray-200">{job.title}</span>
    <p class="my-4 text-gray-600 dark:text-gray-400">{job.summary}</p>
    <a
      href={job.url}
      title={`Visit ${job.company}'s website`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      class="text-sm text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-500"
    >
      <LinkIcon size="14" class="mr-1 inline-block" />
      {domain}
    </a>
  </div>
</div>
