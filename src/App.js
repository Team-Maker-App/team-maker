import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  isMobile
} from "react-device-detect";

// Components

import CreateTeam from "./screens/CreateTeam";
import Home from "./screens/Home";
import ListTeam from "./screens/ListTeam";
import HomeDesktop from "./screens/HomeDesktop/HomeDesktop";

function App() {
  return (
    <Router>
      <div className="w-full bg-primaryDark">
        <div className={`${!isMobile ? '' : 'container'} mx-auto`}>
          {!isMobile ? <Route path="/" exact component={HomeDesktop}/> : <Route path="/" exact component={Home} />}
          <Route path="/create" exact component={CreateTeam} />
          <Route path="/list" component={ListTeam} />
          {/* <TeamFilter /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
