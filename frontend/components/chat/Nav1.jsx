import React from 'react';


class Nav1  extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(e){
    console.log("TESTING")
  }

  render(){
    
    const lis =this.props.servers.map(({ id}) =>{
 
      return ( <button className='server-icon' key={id} onClick={this.handleClick}> CLICK</button>)
    })

    return (
      <aside className='nav1-aside'>
      <ul>
        {lis}
      </ul>
      </aside>
    )
  }
}

export default Nav1;
