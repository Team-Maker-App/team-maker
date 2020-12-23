import { BrowserRouter as Router, Route } from "react-router-dom";

// Components

import CreateTeam from "./screens/CreateTeam";
import Home from "./screens/Home";
import ListTeam from "./screens/ListTeam";

function App() {
  return (
    <Router>
      <div className="w-full bg-primaryDark">
        <div className="container mx-auto">
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={CreateTeam} />
          <Route path="/list" component={ListTeam} />
          {/* <TeamFilter /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
