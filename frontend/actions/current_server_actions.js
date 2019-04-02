export const SELECT_SERVER = 'SELECT_SERVER';
export const UNSELECT_SERVER = 'UNSELECT_SERVER';

export const selectsServer = serverId => {
  return {
    type: SELECT_SERVER,
    serverId
  };
};

export const unselectServer = () => {
  return {
    type: UNSELECT_SERVER
  };
};