import { Hono } from 'hono'
import { googleAuth } from '@hono/oauth-providers/google'
import { csrf } from 'hono/csrf'
import { decode } from 'hono/jwt'
import type { Bindings } from '../bindings'
import type { User } from '../models/user'

const login = new Hono<{ Bindings: Bindings }>()

login.use(
  '/*',
  googleAuth({
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_secret: process.env.GOOGLE_CLIENT_SECRET,
    scope: ['openid', 'email', 'profile'],
  })
)

// app.use('/login/callback', csrf())

// Sign in with Google
login.get('/callback', async (c) => {
  console.log("c.req.query", c.req.query)
  const credential = c.req.query('credential')

  // c.req.parseBody()の戻り値の型が{ [key: string]: string | File | (string | File)[] }であるため文字列であることを明示的にチェックする
  if (typeof credential !== 'string') {
    return c.text('Invalid credential', 400)
  }

  const decodedToken = decode(credential)

  if (!decodedToken) {
    return c.text('Custom 401 Message', 401)
  }

  const user: User = {
    id: '',
    email: decodedToken.payload.email,
    name: decodedToken.payload.name,
    avatar: decodedToken.payload.picture,
  }

  // 新規ユーザーであればDBに登録
  try {
    const existingUser = c.env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(user.email).first()
    if (!existingUser) {
      c.env.DB.prepare('INSERT INTO users (email, name, avatar) VALUES (?, ?, ?)').bind(user.email, user.name, user.avatar).run()
    }
    // セッションにユーザー情報を保存
    // const session = await getSession(c.req)
    // session.set('user', { id: existingUser ? existingUser.id : user.id })
    return c.redirect('/posts')

  } catch (e) {
    return c.json({err: e}, 500)
  }
})

export default login