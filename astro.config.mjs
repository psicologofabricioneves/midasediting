// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Road Rage",
      cssVariable: "--font-grunge",
      fallbacks: ["system-ui"]
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      fallbacks: ["monospace"],
      weights: [400, 600, 700],
      styles: ["normal"],
    }],
  vite: {
    plugins: [tailwindcss()]
  },

  // /works está em stand-by: sem links e fora do sitemap até ser ativada
  integrations: [sitemap({ filter: (page) => !page.includes("/works") })],
  site: "https://midasediting.com"
});