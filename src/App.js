import GlobalStyle from './styles/globalStyles'
import Reset from './styles/reset'
import Navbar from './components/Navbar'
import { ThemeProvider } from 'styled-components'

const baseTheme = {
  color: 'green',
  backgroundColor: 'white',
}

function App() {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <Reset />
        <GlobalStyle />
        <Navbar />
      </ThemeProvider>
    </>
  )
}

export default App
