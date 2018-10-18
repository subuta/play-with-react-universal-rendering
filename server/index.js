import React from 'react'
import {
  renderToString,
  renderToStaticMarkup
} from 'react-dom/server'
import { Helmet } from 'react-helmet'

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

  // const helmet = Helmet.renderStatic()
  //
  // const head = (
  //   <>
  //     {helmet.title.toComponent()}
  //     {helmet.meta.toComponent()}
  //   </>
  // )

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
