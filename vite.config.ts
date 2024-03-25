import devServer from '@hono/vite-dev-server'
import adapter from '@hono/vite-dev-server/cloudflare'
import pagesBuild from '@hono/vite-cloudflare-pages'
import { defineConfig } from 'vite'
import { getPlatformProxy } from 'wrangler'

export default defineConfig(async ({ command }) => {
  if (command === 'build') {
    return {
      plugins: [pagesBuild()]
    }
  } else {
    const { env, dispose } = await getPlatformProxy();
    return {
      plugins: [
        devServer({
          entry: 'src/index.tsx',
          env,
          adapter,
          plugins: [
            {
              onServerClose: dispose
            }
          ]
        }),
        pagesBuild({
          entry: 'src/index.tsx',
        }),
      ]
    }
  }
})