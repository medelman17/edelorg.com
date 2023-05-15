import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	site: "https://edelorg.com",
	integrations: [react(), sitemap(), mdx(), tailwind()],
	output: 'server',
	adapter: vercel()
});
