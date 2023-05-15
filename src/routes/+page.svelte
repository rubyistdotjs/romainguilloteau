<script lang="ts">
  import { MetaTags, JsonLd } from "svelte-meta-tags";
  import Hero from "$lib/components/Hero.svelte";
  import Experiences from "$lib/components/experiences/Experiences.svelte";
  import Stacks from "$lib/components/Stacks.svelte";
  import Shelves from "$lib/components/books/Shelves.svelte";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<MetaTags
  title="Romain Guilloteau - Senior Full Stack Engineer"
  description="I'm a software engineer with more than a decade of professional experience, specialized in Ruby, Go and JavaScript, currently based in Lille France."
  canonical="https://romainguilloteau.dev"
  openGraph={{
    url: "https://romainguilloteau.dev",
    type: "profile",
    profile: { firstName: "Romain", lastName: "Guilloteau" },
    images: [
      {
        url: "https://romainguilloteau.dev/avatar.jpg",
        width: 920,
        height: 920,
        alt: "Close-up photo of Romain Guilloteau",
      },
    ],
  }}
  twitter={{
    site: "@rubyistdotjs",
    cardType: "summary",
    title: "Romain Guilloteau",
    description:
      "Senior software engineer specialized in Ruby, Go and JavaScript.",
    image: "https://romainguilloteau.dev/avatar.jpg",
    imageAlt: "Close-up photo of Romain Guilloteau",
  }}
/>

<JsonLd
  schema={{
    "@type": "Person",
    name: "Romain Guilloteau",
    givenName: "Romain",
    familyName: "Guilloteau",
    image: "https://romainguilloteau.dev/avatar.jpg",
    jobTitle: "Senior Full Stack Engineer",
    description: "Software engineer specialized in Ruby, Go and JavaScript.",
    gender: "Male",
    nationality: "FR",
    address: {
      "@type": "PostalAddress",
      addressCountry: "FR",
      addressLocality: "Lille",
      postalCode: "59000",
    },
    url: "https://romainguilloteau.dev",
    sameAs: [
      "https://www.linkedin.com/in/romainguilloteau",
      "https://github.com/rubyistdotjs",
      "https://twitter.com/rubyistdotjs",
    ],
  }}
/>

<Hero />
<Experiences />
<Stacks />
<Shelves shelves={data.shelves} />
