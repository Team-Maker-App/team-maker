import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import MainRouter from "routes";

function App() {
  return (
    <Router>
      <div className="app">
        <MainRouter />
      </div>
    </Router>
  );
}

export default App;
