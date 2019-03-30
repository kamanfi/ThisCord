import React from 'react';


class Nav1  extends React.Component{




  render(){
    
    const lis =this.props.servers.map((server) =>{
      return <li key ={server.id}>{server.server_name}</li>
    })

    return (
      <div className="nav1-div">
        {lis}
      </div>
    )
  }
}

export default Nav1;