import React from 'react';

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
      <div>
      {this.renderErrors()}

        <form onSubmit={this.handelSubmit}> 
          <label>Email
          <input type="text" onChange={this.handelChange('email')} value={this.state.email} />
          </label>
          <label>Password
          <input type="password" onChange={this.handelChange('password')} value={this.state.password} />
          </label>
          <label>Username
          <input type="text" onChange={this.handelChange('user_name')} value={this.state.user_name}/>
          </label>
          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    )
  }else{
      return (
        <div>
          {this.renderErrors()}

          <form onSubmit={this.handelSubmit}>
            <label>Email
          <input type="text" onChange={this.handelChange('email')} value={this.state.email} />
            </label>
            <label>Password
          <input type="password" onChange={this.handelChange('password')} value={this.state.password} />
            </label>
            <input type="submit" value={this.props.formType} />
          </form>
        </div>
      )
      }
    }
  }

export default SessionForm 