<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href: string;
    title?: string | null;
    children: Snippet;
  }

  let { href, title = null, children }: Props = $props();
</script>

<a
  {href}
  {title}
  target={href.startsWith("http") ? "_blank" : null}
  class="btn btn-md btn-indigo"
>
  {@render children()}
</a>
