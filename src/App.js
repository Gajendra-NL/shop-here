import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const Hats = () => (
  <div>
    <h1>Hats PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
