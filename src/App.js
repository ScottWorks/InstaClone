import React, { Component } from 'react';
import Header from './components/Header';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get('/api/users').then((response) => {
      const { data } = response;
      this.setState({ users: data });
    });
  }

  render() {
    const { users } = this.state;

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact
            path="/"
            render={() => <ProfileListContainer users={users} />}
          />
          <Route path={'/users/:username'} component={ProfileContainer} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
