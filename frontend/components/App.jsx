import React from 'react';
import Greetings from './splash/GreetingsContainer';
import SignUp from '../components/sessionForm/SignupFormContainer';
import Login from '../components/sessionForm/LoginFormContainer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/routeUtil';
const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path='/signup' component={SignUp} />
      <AuthRoute exact path='/login' component={Login} />
      <Route exact path='/' component={Greetings} />
    </Switch>
  </div>
);

export default App;