import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  isMobile,
} from 'react-device-detect';

// Components

import CreateTeam from './screens/CreateTeam';
import ListTeam from './screens/ListTeam';
import HomeDesktop from './screens/HomeDesktop/HomeDesktop';
import Presentation from './screens/Presentation';
import Step2 from './screens/Presentation/step2';
import Step3 from './screens/Presentation/step3';

function App() {
  return (
    <Router>
      <div className="w-full bg-primaryDark">
        <div className={`${!isMobile ? '' : 'container'} mx-auto`}>
          {!isMobile ? <Route path="/" exact component={HomeDesktop} /> : <Route path="/" exact component={Presentation} />}
          <Route path="/create" exact component={CreateTeam} />
          <Route path="/list" component={ListTeam} />
          <Route path="/step2" component={Step2} />
          <Route path="/step3" component={Step3} />
          {/* <TeamFilter /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
