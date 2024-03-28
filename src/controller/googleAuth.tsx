import { Hono } from 'hono'
import { googleAuth } from '@hono/oauth-providers/google'
import type { Bindings } from '../bindings'
import type { Session } from '../models/googleAuth'
import { createUser } from '../models/user'
import { setUserIdCookieForSession } from '../models/googleAuth'

const login = new Hono<{ Bindings: Bindings }>()

login.use(
  '/*',
  googleAuth({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
    scope: ['openid', 'email', 'profile'],
  })
)

// Sign in with Google
login.get('/callback', async (c) => {
  const token = c.get('token')
  const user = c.get('user-google')
  console.log('Token:', token)
  console.log('User:', user)

  if (user) {
    // ユーザーが存在しない場合は新規作成
    const existingUser = await c.env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(user.email).all()
    if (existingUser.results.length === 0) {

      // ユーザー情報をDBに保存
      const newUserId = await createUser(c.env.DB, user)

      // クッキーにユーザー情報を保存
      const session: Session = {
        c: c,
        userId: newUserId.id,
        maxAge: 60 * 60 * 24 * 90, // 90日間有効
      };

      setUserIdCookieForSession(session)

      return c.redirect('/posts') // FIXME:初回の画面遷移をユーザー名変更画面に
    } else {

      const session: Session = {
        c: c,
        userId: existingUser.results[0].id as string,
        maxAge: 60 * 60 * 24 * 90, // 90日間有効
      };
      setUserIdCookieForSession(session)

      return c.redirect('/posts')
    }
  } else {
    return c.json({ error: 'User information not available' }, 400)
  }
})

export default login