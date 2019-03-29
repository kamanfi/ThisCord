import React from 'react';
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
    if (this.props.currentUser != null){
    return  (
      < div >
        <li>{this.props.currentUser.user_name}</li>

        <button onClick={this.handleLogout}>Logout</button>
      </div >
    ) 
  }else {
      return (
      <>
      </>
      )
    }
}
     
}



export default Main 