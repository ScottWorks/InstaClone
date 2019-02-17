import React from 'react';
import Header from './components/Header';
import ProfileListContainer from './containers/ProfileListContainer';
import ProfileContainer from './containers/ProfileContainer';
import Error404 from './components/Error404';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={ProfileListContainer} />
        <Route path={'/users/:username'} component={StyledProfileContainer} />
        <Route component={StyledError404} />
      </Switch>
    </div>
  );
}

const StyledProfileContainer = styled(ProfileContainer)`
  padding: 110px 0px;
`;

const StyledError404 = styled(Error404)`
  padding: 110px 0px;
`;

export default App;
