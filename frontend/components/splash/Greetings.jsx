
import React from 'react';
import { Link } from 'react-router-dom';
// import SignUpForm from '../sessionForm/SignupFormContainer';
import Main from '../chat/Main';
import { AuthRoute, ProtectedRoute } from '../../util/routeUtil';
import { Route, Switch } from 'react-router-dom';
class Greeting extends React.Component {

  componentDidMount() {
    this.props.clearErrors();
  }

  images(){
 
    // # window.laptop = "<%= image_url('splash2/laptop.gif')%>"
  }
  render() {
    return (
      <div className='splash-div'>

        <header className='upper-right-header'>
          <div>
            <nav>
                 <img src={window.logo} alt=""    /> 
                <p>THISCODE</p>
            </nav>
       
          <a href="https://github.com/kamanfi/ThisCord">Github</a>
          </div>  
          <div className='upper-left-header'><Link to={'/login'}>Login</Link></div>
          </header>

    
        <div className='signup'>     
             <Link to={'/signup'}>Sign Up Now</Link>
          </div>
   
        <article>
          <h2>It's time to ditch Skype and TeamSpeak.</h2>
          <p>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.</p>
          <p>Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life. </p>
        <aside>

          <span className='middle'>
            <Link to={'/login'}>TRY THIS-CODE</Link>
          </span>
        </aside>
          
        </article>
          
        </div>
      )
  }
}

export default Greeting;