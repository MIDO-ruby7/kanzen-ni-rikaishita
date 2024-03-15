import build from '@hono/vite-cloudflare-pages'
import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'
import { getPlatformProxy } from 'wrangler'


export default defineConfig(async ({ command }) => {
  if (command === 'build') {
    return {
      plugins: [build()],
      optimizeDeps: {
        entries: [],
      },
    }
  }
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
    ],
  }
})