import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {ThemeProvider} from 'styled-components'
import  GlobalStyleS  from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyleS/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
