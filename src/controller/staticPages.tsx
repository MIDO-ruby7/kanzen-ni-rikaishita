import { Hono } from 'hono'
import { Top } from '../views/static/top'
import type { Bindings } from '../bindings'
import { getPlatformProxy } from "wrangler";

const { env } = await getPlatformProxy();

const staticPage = new Hono<{ Bindings: Bindings }>()

staticPage .get('/top', (c) => {
  return c.render(
    <Top googleClientId={env.VITE_GOOGLE_CLIENT_ID as string} />,
    {
      title: 'top',
    }
  )
})

export default staticPage