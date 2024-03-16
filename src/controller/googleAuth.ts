import { Hono } from 'hono'
import { googleAuth } from '@hono/oauth-providers/google'
import type { Bindings } from '../bindings'

const app = new Hono<{ Bindings: Bindings }>()

app.use(
  '/google',
  googleAuth({
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    scope: ['openid', 'email', 'profile'],
  })
)

// Sign in with Google
app.get('/google', async (c) => {
  const token = c.get('token')
  const user = c.get('user-google')

  if (!(token && user)) {
    return c.text('Custom 401 Message', 401)
  }

  // 新規ユーザーであればDBに登録
  try {
    const existingUser = c.env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(user.email).first()
    if (!existingUser) {
      c.env.DB.prepare('INSERT INTO users (email, name, avatar) VALUES (?, ?, ?)').bind(user.email, user.name, user.picture).run()
    }
    c.json({ token, user })
  } catch (e) {
    return c.json({err: e}, 500)
  }
})

export default app