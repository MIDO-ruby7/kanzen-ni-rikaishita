import { Hono } from 'hono'
import { Top } from '../views/static/top'
import type { Bindings } from '../bindings'

const staticPage = new Hono<{ Bindings: Bindings }>()

staticPage .get('/top', (c) => {
  return c.render(
    <Top googleClientId={process.env.GOOGLE_CLIENT_ID as string} />,
    {
      title: 'top',
    }
  )
})

export default staticPage