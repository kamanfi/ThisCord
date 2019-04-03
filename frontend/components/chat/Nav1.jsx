import React from 'react';
import ServerModal from './serverModal/ServerModal';
import Modal from '../modals/Modal';
import {openModal} from '../../actions/modal_actions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import DefaultModal from './serverModal/DefaultModal';
import { selectsServer } from '../../actions/current_server_actions';


class Nav1  extends React.Component{

  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.state={
      servermodal: 'hide-server-modal',
      modal: ServerModal
    };
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.history.push('/');
  }

  selectServer(id){
    debugger
    dispatch(selectsServer(id));
    this.props.fetchTextChannels(id).then(this.props.history.push(`/@me/${id}`));
  }

  render(){
    
    const lis =this.props.servers.map(({server_id, img_url}) =>{
      return (<li className='server-icon' key={server_id} onClick={() => this.selectServer(server_id)}> <span>BB</span> </li>)
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
        <span className='add-server' onClick={() => dispatch(openModal('option'))}><p>+</p></span>
            < Modal />
       </aside>
    )
  }
}


export default withRouter(Nav1);
