import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import build from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'
import { getPlatformProxy } from 'wrangler'

export default defineConfig( async () => {
  const { env, dispose } = await getPlatformProxy()
  return {
    plugins: [
      devServer({
        entry: 'src/index.tsx',
        adapter: {
          env,
          onServerClose: dispose,
        },
      }),
      build(),
    ],
  }
})