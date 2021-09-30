import { Route, Switch } from "react-router";

import CreateTeam from "./screens/CreateTeam";
import ListTeam from "./screens/ListTeam";
import Home from "./screens/Home";
import Match from "screens/Match";

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/create" exact component={CreateTeam} />
      <Route path="/list" component={ListTeam} />
      <Route path="/match/:id" component={Match} />
    </Switch>
  );
};

export default MainRouter;
