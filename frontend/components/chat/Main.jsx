import React from 'react';
import Nav1 from './Nav1';
import UserNav from './UserNav';
import { Link } from 'react-router-dom';



class Main extends React.Component{

  constructor(props){
    super(props);
    
  }
  
  componentDidMount(){
    this.props.fetchServers();
    
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