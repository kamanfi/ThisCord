import React from 'react';
import ServerModal from './serverModal/ServerModal';
import Modal from '../modals/Modal';
import {openModal} from '../../actions/modal_actions';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import DefaultModal from './serverModal/DefaultModal';
import { selectsServer } from '../../actions/current_server_actions';
import {NavLink} from 'react-router-dom';

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
  
  selectServer({ id, invite_code, server_name}){
    dispatch(selectsServer({ id, invite_code, server_name}));
    this.props.fetchTextChannels(id).then(
      (what) => this.props.history.push(`/@me/${id}/${(Object.values(what.text_channels)[0].id)}`)
      );
  }

  home(){
    debugger
    this.props.history.push(`/@me/dm/`);
  }

  render(){
    

    const lis = this.props.servers.map(({ id, invite_code, server_name}) =>{
      return (<li className='server-icon' key={id} tabIndex="3" onClick={() => this.selectServer({ id, invite_code, server_name })}> <span>{server_name.slice(0,2)}</span> </li>)
    })  

    return (
      <aside className='nav1-aside'>
       <NavLink to={`/@me/dm`} className='home-icon'> 
          <img src={window.homeicon2} alt=""/>
          </NavLink>
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
