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

  export let job: Job;

  $: yearsCount = yearsDiff(job.startDate, job.endDate);
  $: domain = urlDomain(job.url);

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
  <div class="w-6 h-6 mr-4 md:w-8 md:h-8 md:mr-5">
    {#if job.logo}
      <img src={`./images/${job.logo}`} alt={`${job.company}'s logo`} />
    {/if}
  </div>
  <div class="flex-1">
    <div class="flex flex-row items-center mb-2">
      <h3
        class="text-gray-800 dark:text-gray-100 text-lg md:text-xl font-semibold leading-none md:leading-none mr-3"
      >
        {job.company}
      </h3>
      {#if job.endDate}
        <span
          class="text-xs font-medium leading-none bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full px-2 py-1"
        >
          {yearsCount} years
        </span>
      {:else}
        <span
          class="text-xs font-medium leading-none bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 rounded-full px-2 py-1"
        >
          {yearsCount} years
        </span>
      {/if}
    </div>
    <span class="block text-gray-800 dark:text-gray-200">{job.title}</span>
    <p class="text-gray-600 dark:text-gray-400 my-4">{job.summary}</p>
    <a
      href={job.url}
      title={`Visit ${job.company}'s website`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      class="text-gray-500 dark:text-gray-400 text-sm hover:text-indigo-600 dark:hover:text-indigo-500"
    >
      <LinkIcon size="14" class="inline-block mr-1" />
      {domain}
    </a>
  </div>
</div>
