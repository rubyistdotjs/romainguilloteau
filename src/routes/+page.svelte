<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Experiences from "$lib/components/experiences/Experiences.svelte";
  import Stacks from "$lib/components/Stacks.svelte";
  import Books from "$lib/components/Books.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Romain Guilloteau - Senior Full Stack Developer</title>
  <meta
    name="description"
    content="I'm a Senior Full Stack Developer with more than a decade of professional experience, currently working at BuyCo in Lille, France."
  />
  <meta property="og:url" content="https://www.romainguilloteau.dev" />
  <meta property="og:type" content="profile" />
  <meta property="profile:first_name" content="Romain" />
  <meta property="profile:last_name" content="Guilloteau" />
  <meta
    property="og:image"
    content="https://www.romainguilloteau.dev/avatar.jpg"
  />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="920" />
  <meta property="og:image:height" content="920" />
  <meta property="og:image:user_generated" content="false" />
  <link rel="canonical" href="https://www.romainguilloteau.dev" />
</svelte:head>

<Hero />
<Experiences />
<Stacks />
<Books books={data.books} />
