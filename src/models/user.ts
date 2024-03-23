import { GoogleUser } from '@hono/oauth-providers/google'

export type User = {
  id: string
  name: string
  email: string
  picture: string
}

export const createUser = async (db: D1Database, user: Partial<GoogleUser>) => {
  const id = crypto.randomUUID()
  const { success } = await db
    .prepare('INSERT INTO users (id, email, name, avatar) VALUES (?, ?, ?, ?)')
    .bind(id, user.name, user.email, user.picture)
    .run()
  const new_user = success
  return new_user
}

export const findAllUsers = async (db: D1Database) => {
  const { results } = await db.prepare(`SELECT * FROM users ORDER BY created_at DESC`).all<User>()
  const users = results
  return users
}

export const findUserById = async (db: D1Database, id: string) => {
  const user = await db.prepare(`SELECT * FROM users WHERE id = ?`).bind(id).first<User>()
  return user
}