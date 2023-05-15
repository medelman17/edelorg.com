import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import partytown from '@astrojs/partytown'
import compress from 'astro-compress'
import prefetch from '@astrojs/prefetch'
import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  site: 'https://edelorg.com',
  integrations: [
    react(),
    sitemap(),
    mdx(),
    tailwind(),
    partytown(),
    compress(),
    prefetch()
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
})
