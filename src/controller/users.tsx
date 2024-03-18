import { Hono } from 'hono'

const user = new Hono()

user.get('/', (c) => c.text('users index'))
user.get('/:id', (c) => {
  const id = c.req.param('id')
  return c.text('Get user: ' + id)
})
user.put('/', (c) => c.text('Update user'))
user.delete('/', (c) => c.text('DELETE user'))

export default user
