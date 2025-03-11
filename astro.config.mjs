import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://diegogarciavega.github.io',
  base: '/PortfolioDGV',
  integrations: [tailwind()]
});