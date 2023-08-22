import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthProvider } from './hooks/auth'
import {ThemeProvider} from 'styled-components'
import  GlobalStyleS  from './styles/global'
import theme from './styles/theme'

import {Routes} from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyleS/>
    <AuthProvider>
      <Routes/>
    </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
