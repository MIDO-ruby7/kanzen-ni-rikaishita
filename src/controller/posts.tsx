import { Hono } from 'hono'
import type { Post } from '../models/post'
import { Index } from '../pages/posts/index'

const app = new Hono()

const posts: Post[] = [
  { id: '1', title: 'Good Morning', body: 'Let us eat breakfast' },
  { id: '2', title: 'Good Afternoon', body: 'Let us eat Lunch' },
  { id: '3', title: 'Good Evening', body: 'Let us eat Dinner' },
  { id: '4', title: 'Good Night', body: 'Let us drink Beer' },
  { id: '5', title: 'こんにちは', body: '昼からビールを飲みます' }
]

const getPosts = () => posts

const getPost = (id: string) => {
  return posts.find((post) => post.id == id)
}

// index
app.get('/', (c) => {
  const posts = getPosts()
  return c.render(<Index posts={posts} />)
})

app.get('/:id', (c) => {
  const id = c.req.param('id')
  const post = getPost(id)
  return c.html(<h1>post show</h1>)
})

app.post('/', (c) => c.text('Create post')) // POST /post
app.put('/:id/edit', (c) => c.text('Update post')) // PUT /post
app.delete('/:id', (c) => c.text('DELETE post')) // DELETE /post

export default app