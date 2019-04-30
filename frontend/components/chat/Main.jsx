import React from 'react';
import Nav1 from './Nav1';
import UserNav from './UserNav';
import Home from '../home/Home'
import DirectMessage from '../home/DirectMessageContainer'
import { selectsServer } from '../../actions/current_server_actions';
import { Link } from 'react-router-dom';
import ChatBox from './ChatBox';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/routeUtil';


class Main extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.fetchServers()
    this.props.fetchDirectMessages()
  }



  
  render() {
    if (this.props.servers && this.props.dmServers)
      return (
        <React.Fragment>
          < div className='mainh'>
            < Nav1 servers={this.props.servers} fetchTextChannels={this.props.fetchTextChannels} selectsServer={this.props.selectsServer} />
          </div >
          <ProtectedRoute exact path='/@me/dm/' component={DirectMessage} />
          <Switch>
            <ProtectedRoute exact path='/@me/dm/' component={Home} />
            <ProtectedRoute exact path='/@me/dm/:channelId' component={ChatBox} />
          </Switch>
        </React.Fragment>

      )

  }
}



export default Main 