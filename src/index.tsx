import { Hono } from 'hono'
import { renderer } from './renderer'
import staticPage from './controller/staticPages'
import post from './controller/posts'
import user from './controller/users'
import login from './controller/googleAuth'
import type { Bindings } from './bindings'

const app = new Hono<{ Bindings: Bindings }>()

app.get('/*', renderer)

app.get('/', (c) => {
  return c.redirect('/top')
})

app.route('/', staticPage)
app.route('/login', login)
app.route('/users', user)
app.route('/posts', post)

export default app