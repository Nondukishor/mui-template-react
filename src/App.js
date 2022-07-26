import theme from './theme'
import {ThemeProvider, CssBaseline} from '@mui/material'
import {BrowserRouter} from 'react-router-dom'
import MainRoute from './routes/MainRoute'
import LayoutContextProvider from './Context/LayoutContext'
function App() {
  return (
    <LayoutContextProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MainRoute />
        </ThemeProvider>
      </BrowserRouter>
    </LayoutContextProvider>
  )
}

export default App
