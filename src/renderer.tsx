import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <link href="dist/static/style.css" rel="stylesheet" />
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  )
})
