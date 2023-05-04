<script lang="ts">
  export let href: string;
  export let title: string;
</script>

<a
  {href}
  {title}
  class="text-gray-700 mr-4 p-3 shadow-sm rounded-full transition-colors duration-150 ease-in-out border border-gray-200 hover:bg-gray-200 hover:text-gray-900 hover:shadow"
>
  <slot />
</a>
