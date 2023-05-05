<script lang="ts">
  import Hero from "$lib/components/Hero.svelte";
  import Experiences from "$lib/components/experiences/Experiences.svelte";
  import Stacks from "$lib/components/Stacks.svelte";
  import Shelves from "$lib/components/books/Shelves.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Romain Guilloteau - Senior Full Stack Engineer</title>
  <meta
    name="description"
    content="I'm a software engineer with more than a decade of professional experience, specialized in Ruby, Go and JavaScript, currently based in Lille France."
  />
  <meta property="og:url" content="https://romainguilloteau.dev" />
  <meta property="og:type" content="profile" />
  <meta property="profile:first_name" content="Romain" />
  <meta property="profile:last_name" content="Guilloteau" />
  <meta property="og:image" content="https://romainguilloteau.dev/avatar.jpg" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="920" />
  <meta property="og:image:height" content="920" />
  <meta property="og:image:user_generated" content="false" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Romain Guilloteau" />
  <meta
    name="twitter:description"
    content="Senior software engineer specialized in Ruby, Go and JavaScript."
  />
  <meta
    name="twitter:image"
    content="https://romainguilloteau.dev/avatar.jpg"
  />
  <link rel="canonical" href="https://romainguilloteau.dev" />
  <script type="application/ld+json">
    {
      "@context": "http://schema.org/",
      "@type": "Person",
      "name": "Romain Guilloteau",
      "givenName": "Romain",
      "familyName": "Guilloteau",
      "image": "https://romainguilloteau.dev/avatar.jpg",
      "jobTitle": "Senior Full Stack Engineer",
      "description": "Software engineer specialized in Ruby, Go and JavaScript.",
      "gender": "Male",
      "nationality": "FR",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR",
        "addressLocality": "Lille",
        "postalCode": "59000"
      },
      "url": "https://romainguilloteau.dev",
      "sameAs": [
        "https://www.linkedin.com/in/romainguilloteau",
        "https://github.com/rubyistdotjs"
      ]
    }
  </script>
</svelte:head>

<Hero />
<Experiences />
<Stacks />
<Shelves shelves={data.books} />
