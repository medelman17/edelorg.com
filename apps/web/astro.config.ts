import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import compress from 'astro-compress';
import prefetch from '@astrojs/prefetch';

// https://astro.build/config
export default defineConfig({
	site: 'https://edelorg.com',
	markdown: {
		shikiConfig: {
			theme: 'material-theme-palenight',
		},
	},
	integrations: [react(), mdx(), tailwind()],
	output: 'server',
	adapter: vercel(),
});
