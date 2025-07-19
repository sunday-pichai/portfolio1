import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://sunday-pichai.github.io/portfolio1/",
  integrations: [tailwind(), icon()],
});
