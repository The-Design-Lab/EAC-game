import GlobalStyle from './styles/globalStyles'
import Reset from './styles/reset'
import GoalContextProvider from './contexts/GoalContext'
import Navbar from './components/Navbar'
import Window from './components/Window'

function App() {
  console.log(GoalContextProvider.checkedItems)
  return (
    <>
      <GoalContextProvider>
        <Reset />
        <GlobalStyle />
        <Window />
        <Navbar />
      </GoalContextProvider>
    </>
  )
}

export default App
