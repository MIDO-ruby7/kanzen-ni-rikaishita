import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.get('*', renderer)

app.get('/', (c) => {
  return c.render(<h1 class="text-red-500">Hello!</h1>)
})

export default app
