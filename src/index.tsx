import { Hono } from 'hono'
import { renderer } from './renderer'
import static_pages from './controller/static_pages'
import posts from './controller/posts'
import users from './controller/users'

const app = new Hono()

app.get('*', renderer)

app.route('/', static_pages)
app.route('/posts', posts)
app.route('/users', users)

export default app