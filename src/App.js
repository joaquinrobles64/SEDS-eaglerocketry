import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";

import HomePage from "./pages/homepage/homepage.page";
import SponsorsPage from "./pages/sponsors/sponsors.page";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sponsors" component={SponsorsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
