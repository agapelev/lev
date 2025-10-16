// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
// ❌ Удалить лишний import image внутри объекта
// ✅ Если хочешь использовать @astrojs/image, импортируй его здесь:
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  theme: 'public/css/theme.css',
  integrations: [mdx(), sitemap(), image()],
                            adapter: cloudflare({
                              platformProxy: {
                                enabled: true,
                              },
                            }),
});
