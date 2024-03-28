import { Hono } from 'hono'
import type { Post } from '../models/post'
import { Index } from '../views/posts/index'

const post = new Hono()

const posts: Post[] = [
  { id: '1', title: 'Hono速い', body: 'Let us eat breakfast' },
  { id: '2', title: 'Bun速い', body: 'Let us eat Lunch' },
  { id: '3', title: 'Vite速い', body: 'Let us eat Dinner' },
  { id: '4', title: 'HTMX炎上すな', body: 'Let us drink Beer' },
  { id: '5', title: 'Cloudflare Pages is 何者....', body: '昼からビールを飲みます' },
  { id: '6', title: '結局CSSが一番むずい', body: '昼からビールを飲みます' },
  { id: '7', title: 'アプリ作るのめちゃくちゃ楽しかったあああああああ祭開催＆運営ほんとに有難うございます。', body: '昼からビールを飲みます' },
  { id: '8', title: '審査員の皆さんも、参加者の皆さんもお疲れ様です！', body: '昼からビールを飲みます' },
  { id: '9', title: 'Honoで開発するのめちゃ楽しいので引き続き作ろうと思います', body: '昼からビールを飲みます' },
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