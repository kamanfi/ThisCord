import React from 'react';
import Greetings from './splash/GreetingsContainer';
import SignUp from '../components/sessionForm/SignupFormContainer';
import Login from '../components/sessionForm/LoginFormContainer';
import Main from '../components/chat/MainContainer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../util/routeUtil';
const App = () => (
  <div>
    <Switch>
      <ProtectedRoute exact path='/@me' component={Main} />
      <AuthRoute exact path='/signup' component={SignUp} />
      <AuthRoute exact path='/login' component={Login} />
      <AuthRoute exact path='/' component={Greetings} />
    </Switch>
  </div>
);

export default App;