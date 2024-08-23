import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/utils/ remark-reading-time.mjs";
import remarkMath from "remark-math";
import rehypeKatex from 'rehype-katex'


// https://astro.build/config
export default defineConfig({
  site: "https://joaoamarinho.github.io",
  integrations: [
    sitemap(),
    robotsTxt(),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          // Katex plugin options
        }
      ]
    ]
  },
  vite: {
    assetsInclude: "**/*.riv",
  },
});
