import React from 'react';
import { withRouter } from 'react-router-dom';

const TitleInfo = (props) =>{

    
    return(
        <div className ="titleInfoBox">
            <span># {props.name}</span>
        </div>
    )
}

export default TitleInfo