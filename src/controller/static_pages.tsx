import { Hono } from 'hono'
import { Top } from '../views/static/top'

const app = new Hono()

app.get('/top', (c) => {
  return c.render(
    <Top />,
    {
      title: 'top',
    }
  )
})

export default app