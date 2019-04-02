import React from 'react';
import DefaultModal from './DefaultModal';
import CreateServerModal from './CreateServerModal';

class ServerModal extends React.Component {
  constructor(props){
    super(props);
    this.state={
      modal: DefaultModal
    };
  }
  
  componentWillUnmount(){
    
    this.setState({ modal: DefaultModal });
  }

  componentDidMount(){
    this.setState({ modal: DefaultModal });
  }

  render(){

    const createServer = () => {
      this.setState({ modal: CreateServerModal });
    };

    const joinServer = () => {
      this.setState({ modal: JoinServerModal });
    };
    
    const defaultState =() =>{
      this.setState({ modal: DefaultModal });
    };
    return(
      <>
        < this.state.modal createServer={createServer} joinServer={joinServer} back={defaultState}/>
      </>
    )

  }
  
}


export default ServerModal;