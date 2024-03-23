import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import pagesBuild from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'
import { getPlatformProxy } from 'wrangler'

export default defineConfig(async ({ mode, command }) => {
  if (command === 'build') {
    return {
      plugins: [pagesBuild()]
    }
  }
  const { env, dispose } = await getPlatformProxy()
  return {
    plugins: [
      devServer({
        env,
        adapter,
        plugins: [
          {
            onServerClose: dispose
          }
        ]
      }),
      pagesBuild()
    ]
  }
})