import React from 'react';
import Greetings from './splash/GreetingsContainer';
import SignUp from '../components/sessionForm/SignupFormContainer';
import Login from '../components/sessionForm/LoginFormContainer';
import { Route, Switch } from 'react-router-dom';
const App = () => (
  <div>
      <Route path='/' component={Greetings} />
    <Switch>
      <Route path='/signup' component={SignUp} />
      <Route path='/login' component={Login} />
    </Switch>
  </div>
);

export default App;