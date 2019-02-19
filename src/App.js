import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';
import Error404 from './components/Error404';
import Error500 from './components/Error500';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ProfileListContainer} />
        <Route path={'/users/:username'} component={ProfileContainer} />
        <Route path="/404" component={Error404} />
        <Route path="/500" component={Error500} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
