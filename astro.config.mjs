// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Bodoni Moda",
      cssVariable: "--font-midas-display",
      fallbacks: ["Georgia", "serif"],
      weights: [400],
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "Instrument Sans",
      cssVariable: "--font-midas-body",
      fallbacks: ["system-ui", "sans-serif"],
      weights: [400, 600],
      styles: ["normal"],
    },
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono",
      cssVariable: "--font-midas-mono",
      fallbacks: ["monospace"],
      weights: [400],
      styles: ["normal"],
    }],
  vite: {
    plugins: [tailwindcss()]
  },

  // /works está em stand-by: sem links e fora do sitemap até ser ativada
  integrations: [sitemap({ filter: (page) => !page.includes("/works") })],
  site: "https://midasediting.com"
});
