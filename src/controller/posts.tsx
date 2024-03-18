import { Hono } from 'hono'
import type { Post } from '../models/post'
import { Index } from '../views/posts/index'

const post = new Hono()

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
post.get('/', (c) => {
  const posts = getPosts()
  return c.render(<Index posts={posts} />)
})

post.get('/:id', (c) => {
  const id = c.req.param('id')
  const post = getPost(id)
  return c.html(<h1>post show</h1>)
})

post.post('/', (c) => c.text('Create post')) // POST /post
post.put('/:id/edit', (c) => c.text('Update post')) // PUT /post
post.delete('/:id', (c) => c.text('DELETE post')) // DELETE /post

export default post