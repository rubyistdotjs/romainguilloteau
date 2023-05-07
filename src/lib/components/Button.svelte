<script lang="ts">
  export let href: string;
  export let title: string | null = null;
</script>

<a
  {href}
  {title}
  class="text-gray-700 dark:text-gray-300 p-3 shadow-sm rounded-full transition-colors duration-150 ease-in-out border border-gray-200 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 hover:shadow"
>
  <slot />
</a>
