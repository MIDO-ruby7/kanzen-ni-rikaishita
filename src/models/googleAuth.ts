import Hono from 'hono'
import { setCookie, getCookie } from 'hono/cookie'

export type Session = {
  c: Hono.Context
  userId: string
  maxAge: number
}

export function setUserIdCookieForSession(session: Session) {
  setCookie(session.c, 'userId', session.userId, {
    httpOnly: true,
    secure: true,
    sameSite: 'Lax',
    maxAge: session.maxAge,
  })
}