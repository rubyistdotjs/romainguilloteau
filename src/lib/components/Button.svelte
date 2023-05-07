<script lang="ts">
  export let href: string;
  export let title: string | null = null;
</script>

<a
  {href}
  {title}
  class="text-gray-700 p-3 shadow-sm rounded-full transition-colors duration-150 ease-in-out border border-gray-200 hover:border-indigo-400 hover:text-indigo-600 hover:shadow"
>
  <slot />
</a>
