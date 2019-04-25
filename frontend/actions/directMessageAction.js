import * as directMessageApiUtil from '../util/directMessageApiUtil';

export const RECEIVE_DIRECT_MESSAGES = 'RECEIVE_DIRECT_MESSAGES';
export const RECEIVE_DIRECT_MESSAGE = 'RECEIVE_DIRECT_MESSAGE';



export const receive_directMessages = (directMessages) => {
    return {
      type: RECEIVE_DIRECT_MESSAGES,
      directMessages
    };
  };
  
  export const receive_directMessage = (directMessage) => {
    return {
      type: RECEIVE_DIRECT_MESSAGE,
      directMessage
    };
  };


  export const fetchDirectMessages = () => dispatch => {
    return directMessageApiUtil.fetchDirectMessages().then((directMessages) => dispatch(receive_directMessages(directMessages)));
  };
  export const fetchDirectMessage = (directMessage) => dispatch => {
    return directMessageApiUtil.fetchDirectMessage(directMessage.id).then((directMessage) => dispatch(receive_directMessages(directMessage)));
  };
  export const createDirectMessages = (directMessages) => dispatch => {
    return directMessageApiUtil.createDirectMessage(directMessages).then((directMessages) => dispatch(receive_directMessage(directMessages)));
  };

