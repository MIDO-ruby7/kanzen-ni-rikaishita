import 'dotenv/config'
import { Hono } from 'hono'
import { renderer } from './renderer'
import staticPages from './controller/staticPages'
import posts from './controller/posts'
import users from './controller/users'
import type { Bindings } from './bindings'

const app = new Hono<{ Bindings: Bindings }>()

app.get('/*', renderer)

app.route('/', staticPages)
app.route('/posts', posts)
app.route('/users', users)

export default app