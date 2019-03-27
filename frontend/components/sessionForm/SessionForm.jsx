import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = this.props.user;
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handelSubmit(e){
    e.preventDefault();
    this.props.action(this.state);
  }

  handelChange(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){

    if (this.props.formType === 'Sign Up'){
      return(
        <div className='session-div'>
          <form className='session-form'> 
            <h2>Create an account</h2>
            {this.renderErrors()}
              <label>
                Email
                <br></br>
                <input type="text" onChange={this.handelChange('email')} value={this.state.email} />
              </label>
              <label>
                Username
                <br></br>
                <input type="text" onChange={this.handelChange('user_name')} value={this.state.user_name}/>
              </label>
              <label>
                Password
                <br></br>
                <input type="password" onChange={this.handelChange('password')} value={this.state.password} />
              </label>
              <label>
                <button className="continue-button" onClick={this.handelSubmit} >Login</button>
            </label>
            <span><Link to={'/login'}>Already have an account?</Link></span>
          </form>
      </div>
    )
  }else{
      return (
        <div className='session-div'>
          <form className='session-form' id="log-in">
          {this.renderErrors()}
            <h3>Welcome back!</h3>
            <h1>We're so excited to see you again!</h1>
            <label>
              Email
              <br></br>
              <input type="text" onChange={this.handelChange('email')} value={this.state.email} />
            </label>
            <label>
              Password
              <br></br>
              <input type="password" onChange={this.handelChange('password')} value={this.state.password} />
            </label>
            <button className="continue-button" onClick={this.handelSubmit} >Continue</button>
            <span>Need an account? <Link to={'/signup'}>Register</Link></span>
          </form>
        </div>
      )
      }
    }
  }

export default SessionForm 