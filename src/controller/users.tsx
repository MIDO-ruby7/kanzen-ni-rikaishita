import { Hono } from 'hono'
import { Show } from '../views/users/show'

const user = new Hono()

user.get('/', (c) => c.text('users index'))

user.get('/show', (c) => {
  return c.render(<Show />,
  {
    title: 'user show',
  })
})

// user.put('/edit', (c) => {
//   return c.render()
// })

user.delete('/:id', (c) => c.text('DELETE user'))

export default user
