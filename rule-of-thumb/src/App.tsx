import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.scss';
import {Home} from "./components/home/Home";
import {ComingSoon} from "./components/coming-soon/ComingSoon";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/past-trials" component={ComingSoon} />
          <Route exact path="/how-it-works" component={ComingSoon} />
          <Route exact path="/login" component={ComingSoon} />
          <Route exact path="/tac" component={ComingSoon} />
          <Route exact path="/pp" component={ComingSoon} />
          <Route exact path="/cu" component={ComingSoon} />
      </Router>
    </div>
  );
};

export default App;
