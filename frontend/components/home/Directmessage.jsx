import React from 'react';
import UserNav from '../chat/UserNavContainer';
import {NavLink} from 'react-router-dom';
class DirectMessages extends React.Component{
   
  constructor(props){
    super(props);
    
  }

  componentDidMount(){

  }


    render(){
        if(this.props.dmServers[0] == undefined){
            return(
                <div className='dm'>
                 DirectMessages
               <div>
                   {}
               </div>
                   < UserNav />
               </div>
           )
        }
        {
            console.log(this.props.dmServers)
            let dmList = this.props.dmServers.map((dm) =>{
                debugger
                return (
                    <NavLink to={`/@me/dm/${dm.text_channel_id}/Direct Message`} className="dmContainer">
                    <div className ='user-micon'></div> 
                    <div className='dmLink'>{dm.receiver_name}</div>
                    </NavLink>
                )
            })
            
                    return(
             <div className='dm'>
                "DirectMessages"
            <div className= "innerDm">
                {dmList}
            </div>
       s         < UserNav />
            </div>
        )
        }
        }


        


}

export default DirectMessages