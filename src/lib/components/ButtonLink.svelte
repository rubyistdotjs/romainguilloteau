<script lang="ts">
  let { href, title = null }: { href: string; title: string | null } = $props();
</script>

<a
  {href}
  {title}
  target={href.startsWith("http") ? "_blank" : null}
  class="btn btn-md btn-indigo"
>
  <slot />
</a>
