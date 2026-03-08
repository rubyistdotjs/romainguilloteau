import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess({ preserve: ["ld+json"] }),
    {
      name: "strip-announcer",
      markup: ({ content: code }) => {
        code = code.replace(
          /<div id="svelte-announcer" [\s\S]*?<\/div>/,
          "{null}",
        );
        return { code };
      },
    },
  ],
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "default-src": ["none"],
        "base-uri": ["self"],
        "connect-src": ["self"],
        "font-src": ["self"],
        "form-action": ["none"],
        "img-src": [
          "self",
          "data:",
          "https://i.gr-assets.com/",
          "https://s.gr-assets.com/",
        ],
        "style-src": ["self"],
        "script-src": [
          "self",
          "sha256-+TaXqbaR7/hcKtLGLM1esquzVwTrvPtpUKNMXIiO58M=",
        ],
      },
    },
  },
};

export default config;
