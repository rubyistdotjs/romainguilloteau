import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({ preserve: ["ld+json"] })],
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "default-src": ["none"],
        "base-uri": ["self"],
        "connect-src": ["self", "https://s.abla.io/api/collect"],
        "font-src": ["https://fonts.gstatic.com/"],
        "img-src": ["self", "data:", "https://*.gr-assets.com/"],
        "style-src": ["self"],
        "script-src": [
          "self",
          "sha256-+TaXqbaR7/hcKtLGLM1esquzVwTrvPtpUKNMXIiO58M=",
          "https://s.abla.io/abla.js",
        ],
      },
    },
  },
};

export default config;
