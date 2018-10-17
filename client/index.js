import React from 'react'
import ReactDOM from 'react-dom'

import App from '../components/App'

// For client-side rendering.
// ReactDOM.render(<App />, document.querySelector('#app'))

// For universal rendering.
ReactDOM.hydrate(<App />, document.querySelector('#app'))
