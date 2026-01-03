// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://enawrem.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap(), partytown()],
  adapter: cloudflare()
});