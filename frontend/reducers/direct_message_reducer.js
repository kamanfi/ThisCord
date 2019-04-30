import {
    RECEIVE_DIRECT_MESSAGES,
    RECEIVE_DIRECT_MESSAGE,
    } from '../actions/directMessageAction';
    import { merge } from 'lodash';
    
    export const directMessagesReducer = (oldState={}, action) =>{
      Object.freeze(oldState);
      switch(action.type){
        case RECEIVE_DIRECT_MESSAGES:
          return merge({}, oldState, action.directMessages);
        case RECEIVE_DIRECT_MESSAGE:
        debugger
          return merge({}, oldState, {[action.directMessage.id]: action.directMessage} );
        default:
          return oldState;
      }
    }