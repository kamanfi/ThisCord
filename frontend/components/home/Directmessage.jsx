import React from 'react';
import UserNav from '../chat/UserNavContainer';
import { NavLink } from 'react-router-dom';

class DirectMessages extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

    }


    render() {
        if (this.props.dmServers[0] == undefined) {
            return (
                <div className='dm'>
                    <div className="innerDm">
                    <span className='dmTitle'>DIRECT MESSAGES</span>
                    </div>
                    < UserNav />
                </div>
            )
        } else {
            this.props.location.pathname.includes("/420/")
            let dmList = this.props.dmServers.map((dm) => {
                let receiver = this.props.currentUser.user_name == dm.sender_name ? dm.receiver_name : dm.sender_name
                return (
                    <NavLink to={`/@me/dm/${dm.text_channel_id}/Direct Message`} className={(this.props.location.pathname.includes(dm.text_channel_id) ? "dmContainerSelected": "dmContainer" )} key={dm.id}>
                        <div className='user-micon'></div>
                        <div className='dmLink'>{receiver}</div>
                    </NavLink>
                )
            })
            
            return (
                <div className='dm'>
            <div className="innerDm">
                 <span className='dmTitle'>DIRECT MESSAGES</span>
                        {dmList}
                    </div>
                    < UserNav />
                </div>
            )
        }
    }





}

export default (DirectMessages)

