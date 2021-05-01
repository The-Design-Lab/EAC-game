import GlobalStyle from './styles/globalStyles'
import Reset from './styles/reset'
// Components
import Navbar from './components/Navbar'
import Window from './components/Window'
// Contexts
import { PlayerProvider } from './contexts/PlayerContext'

function App() {
  return (
    <>
      <PlayerProvider>
        <Reset />
        <GlobalStyle />
        <Window />
        <Navbar />
      </PlayerProvider>
    </>
  )
}

export default App
