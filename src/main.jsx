import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './pages/App'
import { AppProvider } from './context'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.render(
  <AppProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppProvider>,
  document.getElementById('root')
)
