import { BrowserRouter as Router, Route } from "react-router-dom";

// Screens
import CreateTeam from "./screens/CreateTeam";
import ListTeam from "./screens/ListTeam";
import Home from "./screens/Home";
import Match from "./screens/Match";

// Components
import Modal from "./components/Modal";

function App() {
  return (
    <Router>
      <div className="w-full bg-primaryDark">
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={CreateTeam} />
        <Route path="/list" exact component={ListTeam} />
        <Route path="/match/:id" exact component={Match} />
      </div>
      <Modal />
    </Router>
  );
}

export default App;
