import React from 'react';
import Greetings from './splash/GreetingsContainer';
import SignUp from '../components/sessionForm/SignupFormContainer';
import Login from '../components/sessionForm/LoginFormContainer';
import Main from '../components/chat/MainContainer';
import Nav2 from '../components/chat/Nav2';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../util/routeUtil';
import ChatBox from '../components/chat/ChatBox';

const App = () => (
  <div>
    
    <Switch>
      <AuthRoute exact path='/signup' component={SignUp} />
      <AuthRoute exact path='/login' component={Login} />
      <AuthRoute exact path='/' component={Greetings} />
    </Switch>
      <ProtectedRoute exact path='/@me/:serverId/:messageId' component={ChatBox}/>
      <ProtectedRoute exact path='/@me/:serverId' component={Nav2} />
      <ProtectedRoute exact path='/@me' component={Main} />

      
  </div>
);

export default App;