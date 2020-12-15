import TeamFilter from "./components/TeamFilter";
import ListTeam from './screens/ListTeam/ListTeam';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="w-full bg-primaryDark">
        <div className="container mx-auto h-screen">
          <Route path='/' exact component={TeamFilter}/>
          <Route path='/list' exact component={ListTeam}/>
          {/* <TeamFilter /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
