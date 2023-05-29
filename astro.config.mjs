import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import mdx from "@astrojs/mdx";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
    mdx({
      drafts: true,
      remarkPlugins: [
        remarkGfm,
        remarkToc,
        [
          remarkCollapse,
          {
            test: "Table of contents",
          },
        ],
      ],
      rehypePlugins: [rehypeCodeTitles],
      shikiConfig: {
        theme: "one-dark-pro",
        wrap: true,
      },
    }),
  ],
  markdown: {
    drafts: true,
    rehypePlugins: [rehypeCodeTitles],
    remarkPlugins: [
      remarkGfm,
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
