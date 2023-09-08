import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess({ preserve: ["ld+json"] }),
  kit: {
    adapter: adapter(),
    csp: {
      directives: {
        "default-src": ["none"],
        "base-uri": ["self"],
        "connect-src": ["self"],
        "font-src": ["self"],
        "img-src": ["self", "data:", "https://*.gr-assets.com/"],
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
