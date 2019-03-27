
import React from 'react';
import { Link } from 'react-router-dom';
class Greeting extends React.Component {


  componentDidMount() {
    

  }

  render() {
    debugger
    if (this.props.currentUser != null) {
      return (
        <div>
          {this.props.currentUser.username}
          <Link to={'/login'}>Logout</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={'/singup'}>Sign up</Link>
          <br></br>
          <Link to={'/login'}>Login</Link>
        </div>
      )
    }
  }
}

export default Greeting;