import GlobalStyle from './styles/globalStyles'
import Reset from './styles/reset'
import Navbar from './components/Navbar'
import Window from './components/Window'

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Window maxWidth="800px" />
      <Navbar />
    </>
  )
}

export default App
