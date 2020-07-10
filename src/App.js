import React from "react";
import "./App.css";

import {ReactComponent as Logo} from "./assets/eaglerocketry-icon.svg"

import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <Logo /> EagleRocketry
        </a>
      </nav>
    );
  }
}

export default App;
