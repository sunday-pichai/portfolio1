import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://www.kamalesh.xyz/",
  integrations: [tailwind(), icon()],
});
