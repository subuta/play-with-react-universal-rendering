import React from 'react'

// Will be rendered as index.html.
export default ({ main, head }) => {
  return (
    <html>
      <head>
        {head}
      </head>
      <body>
        {main}
        <script src='/client.bundle.js' />
      </body>
    </html>
  )
}
