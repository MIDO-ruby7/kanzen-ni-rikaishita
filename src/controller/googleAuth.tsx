import { Hono } from 'hono'
import { googleAuth } from '@hono/oauth-providers/google'
import type { Bindings } from '../bindings'
import type { Session } from '../models/googleAuth'
import { setUserIdCookieForSession } from '../models/googleAuth'
import { getPlatformProxy } from "wrangler";

const { env } = await getPlatformProxy();

const login = new Hono<{ Bindings: Bindings }>()

login.use(
  '/*',
  googleAuth({
    client_id: env.GOOGLE_CLIENT_ID as string,
    client_secret: env.GOOGLE_CLIENT_SECRET as string,
    scope: ['openid', 'email', 'profile'],
  })
)

// Sign in with Google
login.get('/callback', async (c) => {
  const token = c.get('token')
  const user = c.get('user-google')

  if (user) {
    // ユーザーが存在しない場合は新規作成
    const existingUser = await c.env.DB.prepare('SELECT * FROM users WHERE email = ?').bind(user.email).all()
    if (existingUser.results.length === 0) {
      const uuid = crypto.randomUUID()
      await c.env.DB.prepare('INSERT INTO users (id, email, name, avatar) VALUES (?, ?, ?, ?)').bind(uuid, user.email, user.name, user.picture).run()

      // クッキーにユーザー情報を保存
      const session: Session = {
        c: c,
        userId: uuid,
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