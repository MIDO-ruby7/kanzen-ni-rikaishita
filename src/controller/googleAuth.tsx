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
login.get('/callback', (c) => {
  const token = c.get('token')
  const grantedScopes = c.get('granted-scopes')
  const user = c.get('user-google')

  if (user) {
    try {
      const existingUser = c.env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(user.email).first()
      if (!existingUser) {
        c.env.DB.prepare('INSERT INTO users (email, name, avatar) VALUES (?, ?, ?)').bind(user.email, user.name, user.picture).run()
      }
      return c.redirect('/posts')
    } catch (e) {
      return c.json({ err: e }, 500)
    }
  } else {
    return c.json({ error: 'User information not available' }, 400)
  }
})
export default login