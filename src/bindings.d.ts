export type Bindings = {
  USERNAME: string
  PASSWORD: string
  BLOG_EXAMPLE: KVNamespace
  DB: D1Database
  GOOGLE_CLIENT_ID: string
}

declare global {
  function getMiniflareBindings(): Bindings
}