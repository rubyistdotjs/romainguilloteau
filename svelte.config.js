import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess({ preserve: ["ld+json"] }),
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "default-src": ["none"],
        "script-src": [
          "self",
          "sha256-+TaXqbaR7/hcKtLGLM1esquzVwTrvPtpUKNMXIiO58M=",
        ],
      },
    },
  },
};

export default config;
