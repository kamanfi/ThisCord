import React from 'react';
import Nav1 from './Nav1';
import UserNav from './UserNav';
import Home from '../home/Home'
import DirectMessage from '../home/Directmessage'
import {selectsServer }from '../../actions/current_server_actions';
import { Link } from 'react-router-dom';
import ChatBox from './ChatBox';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute,ProtectedRoute } from '../../util/routeUtil';


class Main extends React.Component{

  constructor(props){
    super(props);
    
  }
  
  componentDidMount(){
    this.props.fetchServers();
  }


  render() {
    if (this.props.servers)
    return  (
      <>
      < div className='mainh'>
        < Nav1 servers={this.props.servers} fetchTextChannels={this.props.fetchTextChannels}/>
      </div >
        <ProtectedRoute exact path='/@me/dm' component={DirectMessage} />
        <ProtectedRoute exact path='/@me/dm' component={Home} />
        </>
      
    ) 
    
  }
}



export default Main 