import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children, title }) => {
  return (
    <html>
      <head>
        <link href="dist/static/style.css" rel="stylesheet" />
          <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com"/>
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  )
})
