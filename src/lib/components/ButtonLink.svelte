<script lang="ts">
  export let href: string;
  export let title: string | null = null;
</script>

<a {href} {title} class="btn btn-md btn-indigo">
  <slot />
</a>
