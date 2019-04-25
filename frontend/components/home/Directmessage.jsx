import React from 'react';
import UserNav from '../chat/UserNavContainer';

class DirectMessages extends React.Component{
   
  constructor(props){
    super(props);
    
  }

  componentDidMount(){
      this.props.fetchDirectMessages();
  }


    render(){
        if(this.props.dmServers[0] == undefined){
            return(
                <div className='dm'>
               <div>
                   {}
               </div>
                   < UserNav />
               </div>
           )
        }else{
            let dmList = this.props.dmServers.map((dm) =>{
                return <div className ='user-micon'></div> 
            })
                    return(
             <div className='dm'>
            <div>
                {dmList}
            </div>
                < UserNav />
            </div>
        )
        }
        }


        


}

export default DirectMessages