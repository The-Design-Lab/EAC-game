import GlobalStyle from "./styles/globalStyles";
import Reset from "./styles/reset";
// Components
import Window from "./components/Window";
// Contexts
import { PlayerProvider } from "./contexts/PlayerContext";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { FakePlayerProvider } from "./contexts/FakePlayerContext";

require("dotenv").config();
function App() {
  return (
    <>
      <PlayerProvider>
        <FakePlayerProvider>
          <Reset />
          <GlobalStyle />
          <Window />
        </FakePlayerProvider>
      </PlayerProvider>
    </>
  );
}

export default App;
