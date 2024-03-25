import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import pagesBuild from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'

export default defineConfig(async ({ command }) => {
  if (command === 'build') {
    return {
      plugins: [pagesBuild()]
    }
  }
  return {
    plugins: [
      devServer({
        entry: 'src/index.tsx',
        env: process.env,
        adapter,
      }),
      pagesBuild({
        entry: 'src/index.tsx',
      }),
    ]
  }
})