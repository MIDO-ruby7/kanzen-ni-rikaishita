import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import build from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'


export default defineConfig( async () => {
  return {
    plugins: [
      devServer({
        entry: 'src/index.tsx',
        adapter,
      }),
      build({
        entry: 'src/index.tsx',
      }),
    ],
  }
})