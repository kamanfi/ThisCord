import React from 'react';


class Nav1  extends React.Component{




  render(){
    
    const lis =this.props.servers.map((server) =>{
      return <li>{server.server_name}</li>
    })

    return (
      <div>
        {lis}
      </div>
    )
  }
}