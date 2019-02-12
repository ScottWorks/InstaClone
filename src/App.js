import React from 'react';
import Header from './components/Header';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
// import axios from 'axios';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ProfileListContainer} />
        <Route path={'/users/:username'} component={ProfileContainer} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
