import CreateTeam from "./screens/CreateTeam";
import ListTeam from "./screens/ListTeam/ListTeam";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="w-full bg-primaryDark">
        <div className="container mx-auto h-screen">
          <Route path="/" exact component={CreateTeam} />
          <Route path="/list" component={ListTeam} />
          {/* <TeamFilter /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
