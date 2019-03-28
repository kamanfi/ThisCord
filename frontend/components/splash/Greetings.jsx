
import React from 'react';
import { Link } from 'react-router-dom';
// import SignUpForm from '../sessionForm/SignupFormContainer';
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
        <div className='splash-div'>
        <article>
          <h2>It's time to ditch Skype and TeamSpeak.</h2>
          <p>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.</p>
          <p>Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life. </p>
        <aside>
          <span>
             <Link to={'/signup'}>Sign up</Link>
          </span>
          <span>
            <Link to={'/login'}>Log in</Link>
          </span>
        </aside>
          
        </article>
         
          
        </div>
      )
    }
  }
}

export default Greeting;