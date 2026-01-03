// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // TO DO : change to my site's URL
  site: 'https://mon-portfolio.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()],
  adapter: cloudflare()
});