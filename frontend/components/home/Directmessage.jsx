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
                        {}
                    </div>
                    < UserNav />
                </div>
            )
        } else {
            
            let dmList = this.props.dmServers.map((dm) => {
                let receiver = this.props.currentUser.user_name == dm.sender_name ? dm.receiver_name : dm.sender_name
                return (
                    <NavLink to={`/@me/dm/${dm.text_channel_id}/Direct Message`} className="dmContainer">
                        <div className='user-micon'></div>
                        <div className='dmLink'>{receiver}</div>
                    </NavLink>
                )
            })

            return (
                <div className='dm'>
                    DirectMessages
            <div className="innerDm">
                        {dmList}
                    </div>
                    < UserNav />
                </div>
            )
        }
    }





}

export default DirectMessages