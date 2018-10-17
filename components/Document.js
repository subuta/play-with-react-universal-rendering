import React from 'react'

// Will be rendered as index.html.
export default ({ main }) => {
  return (
    <html>
      <head />
      <body>
        {main}
        <script src='/client.bundle.js' />
      </body>
    </html>
  )
}
