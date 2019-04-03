import React from 'react';
import Nav1 from './Nav1';
import UserNav from './UserNav';
import {selectsServer }from '../../actions/current_server_actions'
import { Link } from 'react-router-dom';



class Main extends React.Component{

  constructor(props){
    super(props);
    
  }
  
  componentDidMount(){
    
    
    this.props.fetchServers().then((info) => {

      if (Object.values(info.servers).length > 1){
      const id =Object.values(info.servers)[0].id;
      const invite_code = Object.values(info.servers)[0].invite_code;
      const server_name = Object.values(info.servers)[0].server_name;
      dispatch(selectsServer({ id, invite_code, server_name }));
      this.props.fetchTextChannels(id).then(this.props.history.push(`/@me/${id}`));
      }else
        this.props.fetchServers();
    });
    
  }


  render() {
 
    return  (
      < div>
        < Nav1 servers={this.props.servers} fetchTextChannels={this.props.fetchTextChannels}/>
        < UserNav username={this.props.currentUser[0]} logout={this.props.logout} />

      </div >
    ) 
    
  }
}




export default Main 