import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  site: 'https://cvalenzuela1989.github.io',
  base: '/mi.github.io/',
  trailingSlash: 'ignore', // 👈 Añade esto
  integrations: [
    react(),
    sitemap(),
    tailwind()
  ],
  vite: {
    plugins: [
      svgr({
        exportAsDefault: true,
        svgrOptions: {
          icon: true,
          svgo: true
        }
      })
    ]
  },
  build: {
    format: 'directory',
  }
});