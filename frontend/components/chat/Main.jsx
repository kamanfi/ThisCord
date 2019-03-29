import React from 'react';
import { Link } from 'react-router-dom';



class Main extends React.Component{

  constructor(props){
    super(props);

  }
  
  componentDidMount(){
  }

  render() {
    if (this.props.currentUser != null){
    return  (
      < div >
        <li>{this.props.currentUser.user_name}</li>

        <button onClick={this.props.logout}>
          <span><Link to={'/'}>Logout</Link></span>
        </button>
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