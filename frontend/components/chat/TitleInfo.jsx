import React from 'react';
import { withRouter } from 'react-router-dom';

const TitleInfo = (props) =>{


    return(
        <div>
            {props.serverName}
        </div>
    )
}

export default withRouter(withRouter(TitleInfo))