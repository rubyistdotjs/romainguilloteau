import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({ preserve: ["ld+json"] })],
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "default-src": ["self"],
        "script-src": [
          "self",
          "sha256-+TaXqbaR7/hcKtLGLM1esquzVwTrvPtpUKNMXIiO58M=",
          "https://tableau.abla.io/abla.js",
        ],
        "img-src": ["self", "data:", "https://*.gr-assets.com/"],
        "font-src": ["https://fonts.gstatic.com/"],
        "frame-ancestors": ["none"],
      },
    },
  },
};

export default config;
