import Jogo from "./components/Jogo";
import CardProvider from "./context/cardProvider";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <CardProvider>
      <GlobalStyle />
      <Jogo />
    </CardProvider>
  );
}

export default App;
