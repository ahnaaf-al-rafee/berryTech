import { Container } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Container>
          <Route exact path="/" component={HomePage} />
        </Container>
      </Switch>
    </div>
  );
}

export default App;
