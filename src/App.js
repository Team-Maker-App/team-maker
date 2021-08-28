import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components

import CreateTeam from "./screens/CreateTeam";
import ListTeam from "./screens/ListTeam";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <div className="app">
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={CreateTeam} />
        <Route path="/list" component={ListTeam} />
      </div>
    </Router>
  );
}

export default App;
