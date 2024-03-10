import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('users index'))
app.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.text('Get app: ' + id)
})
app.post('/', (c) => c.text('Create app'))
app.put('/', (c) => c.text('Update app'))
app.delete('/', (c) => c.text('DELETE app'))

export default app
