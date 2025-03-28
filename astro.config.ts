import { defineConfig } from "astro/config"

import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import {
  transformerMetaHighlight,
  transformerNotationDiff,
} from '@shikijs/transformers'
import rehypeKatex from 'rehype-katex'
import rehypeExternalLinks from 'rehype-external-links'
import rehypePrettyCode from 'rehype-pretty-code'
// import remarkEmoji from 'remark-emoji'
// import remarkMath from 'remark-math'
import remarkToc from 'remark-toc'
import sectionize from '@hbsnow/rehype-sectionize'
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";
import remarkLinkCard from 'remark-link-card-plus';

import icon from 'astro-icon'
// import nodejs from '@astrojs/node';
import pagefind from "astro-pagefind";



// https://astro.build/config
export default defineConfig({
  site: 'https://daygency.ir',
  vite: {
    server: {
      allowedHosts: ['daygency.liara.run', 'daygency.ir', 'localhost'],
    },
    preview: {
      allowedHosts: ['daygency.liara.run', 'daygency.ir', 'localhost'],
    },
  },
  image: {
    // Example: Allow remote image optimization from a single domain
    // service: passthroughImageService(), 
    domains: ['daygency.liara.run', 'daygency.ir', 'gravatar.com', 'files.daynetcafe.ir'],
  },
  // output: "static",
  // adapter: nodejs({
  //   mode: 'standalone',
  // }),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    react(),
    icon(),
    pagefind()
  ],

  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer', 'noopener'],
        },
      ],
      rehypeHeadingIds,
      rehypeAstroRelativeMarkdownLinks,
      rehypeKatex,
      sectionize,
      [
        rehypePrettyCode,
        {
          theme: {
            light: 'github-light-high-contrast',
            dark: 'github-dark-high-contrast',
          },
          transformers: [
            transformerNotationDiff(),
            transformerMetaHighlight(),
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 1000,
            }),
          ],
        },
      ],
    ],
    remarkPlugins: [
      [
        remarkLinkCard, {
          cache: true,
          shortenUrl: true,
          thumbnailPosition: "left",
        },
      ],
      remarkToc, 
      // remarkMath, 
      // remarkEmoji
    ],
  },

  server: {
    port: 1234,
    host: true,
  },

  devToolbar: {
    enabled: false,
  },
  
})