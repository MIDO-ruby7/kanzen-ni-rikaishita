import { Hono } from 'hono'
import { renderer } from './renderer'
import posts from './controller/posts'
import users from './controller/users'

const app = new Hono()

app.get('*', renderer)

app.route('/posts', posts)
app.route('/users', users)

export default app