import React from 'react';
import CreateServerForm from './CreateServerModal'

class Nav1  extends React.Component{

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.createFromModal = this.createFromModal.bind(this);
    this.state={
      servermodal: 'hide-server-modal'
    };
  }


  handleClick(e){
    e.stopPropagation();
    console.log("TESTING");
  }

  showModal(){
    this.setState({ servermodal: 'show-server-modal'});
  }

  hideModal() {
    this.setState({ servermodal: 'hide-server-modal' });
  }

  createFromModal(){
    
  }

  render(){
    
    const lis =this.props.servers.map(({id, img_url}) =>{
     
      return (<li className='server-icon' key={id} onClick={this.handleClick}> <span>BB</span> </li>)
    })  
    
    return (
      <aside className='nav1-aside'>
        <span className='home-icon'> 
          <img src="assets/nav1/homeicon2.png" alt=""/>
        </span>
        <hr/>
        <ul>
        {lis}
        </ul>
        <span className='add-server' onClick={this.showModal}><p>+</p></span>

        <div className={this.state.servermodal} onClick={this.hideModal}>
          <span className='server-modal-background' onClick={this.handleClick}>
            <h1>OH, ANOTHER SERVER HUH?</h1>
            <div className='action-holder'>
            <span className='create-server'>
            <h1>CREATE</h1>
              <p>Create a new server and <br></br>
              invite your friends. it's free!</p>
              <img src="assets/nav1/create_action_icon.png" alt=""/>
                <div className='create-action' onClick={this.createFromModal}>Create a server</div>
            </span>
              <span className='join-server'>
                <h1>JOIN</h1>
                <p>Enter an instant invite and <br></br>
                  your friend's server</p>
                <img src="assets/nav1/join_action_icon.png" alt="" />
                <div className='join-action'>Join a server</div>
            </span>
            </div>

          </span>
        </div>
      </aside>
    )
  }
}

export default Nav1;
