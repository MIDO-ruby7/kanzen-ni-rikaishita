import { Hono } from 'hono'
import { googleAuth } from '@hono/oauth-providers/google'
import type { Bindings } from '../bindings'

const login = new Hono<{ Bindings: Bindings }>()

login.use(
  '/*',
  googleAuth({
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    scope: ['openid', 'email', 'profile'],
  })
)

// Sign in with Google
login.get('/callback', async (c) => {
  const token = c.get('token')
  const user = c.get('user-google')
  console.log('user', user)
  console.log('token', token)
  console.log('c.env.DB', c.env.DB)
  console.log('c.env.DB.prepare', c.env.DB.prepare)

  if (user) {
    const existingUser = await c.env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(user.email).all()
    console.log('existingUser', existingUser)
    console.log('!existingUser', !existingUser)
      if (existingUser.results.length === 0) {
        const uuid = crypto.randomUUID()
        await c.env.DB.prepare('INSERT INTO users (id, email, name, avatar) VALUES (?, ?, ?, ?)').bind(uuid, user.email, user.name, user.picture).run()
        return c.json({ message: 'User created', user: { id: uuid, email: user.email, name: user.name, avatar: user.picture } })
      }
      return c.redirect('/posts')
  } else {
    return c.json({ error: 'User information not available' }, 400)
  }
})

export default login