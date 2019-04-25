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
                    return(
             <div className='dm'>
            <div>
                {this.props.dmServers[0].id}
            </div>
                < UserNav />
            </div>
        )
        }
        }


        


}

export default DirectMessages