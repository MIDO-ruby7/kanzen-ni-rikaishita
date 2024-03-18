import 'dotenv/config'
import { Hono } from 'hono'
import { renderer } from './renderer'
import staticPage from './controller/staticPages'
import post from './controller/posts'
import user from './controller/users'
import login from './controller/googleAuth'
import type { Bindings } from './bindings'

const app = new Hono<{ Bindings: Bindings }>()

app.get('/*', renderer)

app.route('/', staticPage)
app.route('/login', login)
app.route('/posts', post)
app.route('/users', user)

export default app