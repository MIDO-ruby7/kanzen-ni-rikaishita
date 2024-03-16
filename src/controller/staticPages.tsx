import { Hono } from 'hono'
import { Top } from '../views/static/top'
import type { Bindings } from '../bindings'

const app = new Hono<{ Bindings: Bindings }>()


app.get('/top', (c) => {
  return c.render(
    <Top googleClientId={process.env.GOOGLE_CLIENT_ID as string} />,
    {
      title: 'top',
    }
  )
})

export default app