import { Hono } from 'hono'
import { Top } from '../pages/static/top'

const app = new Hono()

app.get('/top', (c) => {
  return c.render(<Top />)
})

export default app