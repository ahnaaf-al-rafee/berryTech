import { Container } from "@material-ui/core";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <HomePage />
      </Container>
    </div>
  );
}

export default App;
