import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = this.props.user;
    this.handelSubmit = this.handelSubmit.bind(this);
    this.demoUser = this.demoUser.bind(this);
  }

  componentWillUnmount() {
  
    this.props.clearErrors();
  }


  handelSubmit(e){
    e.preventDefault();
    this.props.action(this.state).then( () =>this.props.history.push('/@me/dm'));
  }

  handelChange(field){
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  renderErrors() {
    let errorArray = new Array(3);
    
    this.props.errors.forEach((error,i) => {
      if (error.includes('Email')){
        errorArray[0] = error;
      } else if (error.includes('User name')){
        errorArray[1] = error;
      }else{
        errorArray[2] = error;
      };
      if (i+1 === this.props.errors.length){ // 
        errorArray.push('Invalid username/password combination');
      }
    });
    return errorArray;
  }
  
  demoUser(e) {
  
    e.preventDefault();
    const demouser ={
      email: 'demoUser1@demoUser.com',
      password: '1234567'
    };
    this.props.action(demouser).then(() => this.props.history.push('/@me/dm'));

  }

  render(){
    const errorArray = this.renderErrors();
    let error ='no-error';
    let inputerror = new Array(4);
    
    errorArray.forEach((element,i) => {
      switch (element){
        case 'Email can\'t be blank':
          inputerror[0] = 'input-error';
          return;
        case 'User name can\'t be blank':
          inputerror[1] = 'input-error';
          return;
        case 'Password is too short (minimum is 6 characters)':
          inputerror[2] = 'input-error';
          return;
        case 'Invalid username/password combination':
          inputerror[3] = 'input-error';
          return;
        default:
          inputerror.push("#");
          return;
      }
    });
    
 
    if (this.props.formType === 'Sign Up'){
      return(
        <div className='session-div'>
          <form className='session-form' id= {error}> 
            <h2>Create an account</h2>
              <label>
              <ul><li>Email {errorArray[0]}</li></ul>
              <input id={inputerror[0]} type="text" onChange={this.handelChange('email')} value={this.state.email} />
              </label>
              <label>
                <ul><li>Username {errorArray[1]}</li> </ul>
              <input id={inputerror[1]} type="text" onChange={this.handelChange('user_name')} value={this.state.user_name}/>
              </label>
              <label>
              <ul><li>Password {errorArray[2]}</li></ul>
              <input id={inputerror[2]} type="password" onChange={this.handelChange('password')} value={this.state.password} />
              </label>
              <label>
                <button className="continue-button" onClick={this.handelSubmit} >Continue</button>
            </label>
            <span><Link to={'/login'}>Already have an account?</Link></span>
          </form>
      </div>
    )
  }else{
    
      if (inputerror.includes('Invalid username/password combination')){
        error ='error'
      }
      return (
        <div className='session-div'>
          <form className='session-form' id={error}>
            <h3>Welcome back!</h3>
            <h1>We're so excited to see you again!</h1>
            <label>
              <ul><li>Email {errorArray[3]}</li></ul>
              <br></br>
              <input id={inputerror[3]} type="email" onChange={this.handelChange('email')} value={this.state.email} />
            </label>
            <label>
              <ul><li>Password {errorArray[3]}</li></ul>
              <br></br>
              <input id={inputerror[3]} type="password" onChange={this.handelChange('password')} value={this.state.password} />
            </label>
            <div>
              <button className="continue-button" onClick={this.handelSubmit} >Login</button>
              <button className="continue-button" onClick={this.demoUser} >Demo User</button>
            </div>
            <span>Need an account? <Link to={'/signup'}>Register</Link></span>
          </form>
        </div>
      )
      }
    }
  }

export default withRouter(SessionForm) 