import React from 'react';
import Nav1 from './Nav1';
import { Link } from 'react-router-dom';



class Main extends React.Component{

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }
  
  componentDidMount(){
    this.props.fetchServers();
    
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout().then(() => this.props.history.push('/@me'))
  }

  render() {
    debugger
    if (this.props.currentUser){
    return  (
      < div>
      < Nav1 servers={this.props.servers} />
      <nav className='user-nav'>
        <button onClick={this.handleLogout}>Logout</button>
      </nav>
      </div >
    ) 
    }
  }
}




export default Main 