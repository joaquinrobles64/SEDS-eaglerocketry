import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import HomePage from "./pages/homepage/homepage.page";
import SponsorsPage from "./pages/sponsors/sponsors.page";
import TeamPage from "./pages/team/team.page";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sponsors" component={SponsorsPage} />
          <Route exact path="/team" component={TeamPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
