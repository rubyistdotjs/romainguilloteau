<script lang="ts">
  import { GithubIcon, LinkedinIcon } from "svelte-feather-icons";

  import Section from "./Section.svelte";
  import Button from "./Button.svelte";
  import ButtonGroup from "./ButtonGroup.svelte";
</script>

<Section>
  <div class="xl:w-10/12 2xl:w-8/12">
    <h1
      class="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-50 mb-8 lg:mb-12"
    >
      Romain Guilloteau
      <span class="block text-indigo-600 dark:text-indigo-500 mt-2">
        Senior Full Stack Engineer
      </span>
    </h1>
    <p
      class="md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12"
    >
      I've spent more than a decade working at startups and small businesses.
      <br />
      From Social media to job hunting, from neobank to maritime logistics and from
      sole developer to lead engineer in a fast growing company. My experiences varied
      wildly and allowed me to discover every facet of the technical and human side
      of the trade.
    </p>
    <ButtonGroup>
      <Button
        href="https://github.com/rubyistdotjs"
        title="Visit my Github profile"
      >
        <GithubIcon size="20" />
      </Button>
      <Button
        href="https://www.linkedin.com/in/romainguilloteau/"
        title="Visit my LinkedIn profile"
      >
        <LinkedinIcon size="20" />
      </Button>
    </ButtonGroup>
  </div>
</Section>
