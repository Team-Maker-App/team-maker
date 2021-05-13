import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";

// Screens
import CreateTeam from "./screens/CreateTeam";
import ListTeam from "./screens/ListTeam";
import Home from "./screens/Home";
import Match from "./screens/Match";
import Login from "./screens/Login";

// Components
import Modal from "./components/Modal";
import { useLocalStorage } from "./hooks/useLocalStorage";
import userStore from "./store/userStore";
import { useEffect } from "react";

function App() {
  const { singInUser } = userStore();
  const [UID] = useLocalStorage("uid");

  useEffect(() => {
    if (UID) singInUser({ uid: UID });
  }, [UID, singInUser]);

  return (
    <Router>
      <div className="w-full bg-primaryDark">
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/create" exact component={CreateTeam} />
        <PrivateRoute path="/list" exact component={ListTeam} />
        <PrivateRoute path="/match/:id" exact component={Match} />
      </div>
      <Modal />
    </Router>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [UID] = useLocalStorage("uid");

  return (
    <Route
      {...rest}
      render={(props) =>
        UID ? <Component {...props} /> : <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
      }
    />
  );
};

export default App;
