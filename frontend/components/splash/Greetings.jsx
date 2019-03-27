
import React from 'react';
import { Link } from 'react-router-dom';
import SignUpForm from '../sessionForm/SignupFormContainer';
class Greeting extends React.Component {


  componentDidMount() {
    

  }

  render() {
    
    if (this.props.currentUser != null) {
      return (
        <div>
          <li>{this.props.currentUser.user_name}</li>
          <button onClick={this.props.logout}>logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={'/signup'}>Sign up</Link>
          <br></br>
          <Link to={'/login'}>Log in</Link>
        </div>
      )
    }
  }
}

export default Greeting;