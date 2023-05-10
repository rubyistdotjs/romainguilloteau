import adapter from "@sveltejs/adapter-netlify";
import sveltePreprocess from "svelte-preprocess";
import { preprocess } from "svelte/compiler";

/**
 * @typedef {import("svelte/types/compiler/preprocess").PreprocessorGroup} PreprocessorGroup
 * @param {PreprocessorGroup[]} preprocessors
 * @returns {PreprocessorGroup[]}
 */
function sequence(preprocessors) {
  return preprocessors.map((preprocessor) => ({
    markup({ content, filename }) {
      return preprocess(content, preprocessor, { filename });
    },
  }));
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sequence([sveltePreprocess({ preserve: ["ld+json"] })]),

  kit: {
    adapter: adapter(),
  },
};

export default config;
