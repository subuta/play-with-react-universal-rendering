import '@babel/register'
import '@babel/polyfill'

import React from 'react'
import {
  renderToString,
  renderToStaticMarkup
} from 'react-dom/server'
import path from 'path'

import Koa from 'koa'
import serve from 'koa-static'

import Document from '../components/Document'
import App from '../components/App'

const port = parseInt(process.env.PORT, 10) || 3000
const app = new Koa()

// Try PUBLIC_DIR first
app.use(serve(path.resolve(__dirname, '../public')))

app.use(ctx => {
  // Render app as String
  const app = renderToString(
    <App />
  )

  // Render as index.html(with Server-side rendered app)
  ctx.body = renderToStaticMarkup(
    <Document
      main={<div id='app' dangerouslySetInnerHTML={{ __html: app }} />}
    />
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
