import * as ServerUtil from '../util/serverApiUtil';
import {fetchDirectMessage} from '../actions/directMessageAction'

export const RECEIVE_SERVERS = 'RECEIVE_SERVERS';
export const RECEIVE_SERVER = 'RECEIVE_SERVER';
export const DELETE_SERVER = 'DELETE_SERVER';

export const receive_servers = (servers) => {
  return {
    type: RECEIVE_SERVERS,
    servers
  };
};

export const receive_server = (server) => {
  return {
    type: RECEIVE_SERVER,
    server
  };
};

export const remove_server = (id) => {
  return {
    type: DELETE_SERVER,
    serverId: id
  };
};


export const fetchServers= () => dispatch => {
  return ServerUtil.fetchServers().then((servers) => dispatch(receive_servers(servers)));
};

export const fetchServer = (id) => dispatch => {
  return ServerUtil.fetchServer(id).then((server) => dispatch(receive_server(server)));
};

export const createServer = (server) => dispatch => {
  
  if (server.dm == true ){
    return ServerUtil.createServer(server).then((DMserver) => dispatch(fetchDirectMessage(DMserver)));
  }else{
    return ServerUtil.createServer(server).then((server) => dispatch(receive_server(server)));
  }
};

export const joinServer = (inviteCode) => dispatch => {
  return ServerUtil.joinServer(inviteCode).then((server) => dispatch(receive_server(server)));
};
export const deleteServer = (id) => dispatch => {
  return ServerUtil.deleteServer(id).then((id) => dispatch(remove_server(id)));
};
