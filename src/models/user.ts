export type User = {
  id: string
  name: string
  email: string
  avatar: string
}

// export const createArticle = async (db: D1Database, user: Pick<User, 'name' | 'email' | 'avatar'>) => {
//   const id = crypto.randomUUID()
//   const { results } = await db
//     .prepare('INSERT INTO users (id, email, name, avatar) VALUES (?, ?, ?, ?)')
//     .bind(id, user.name, user.email, user.picture)
//     .run()
//   const users = results
// }