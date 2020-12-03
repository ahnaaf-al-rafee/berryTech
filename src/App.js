import React from "react";

import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SHOP_DATA from "./pages/shop/shop_data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
