export const SELECT_SERVER = 'SELECT_SERVER';
export const UNSELECT_SERVER = 'UNSELECT_SERVER';
export const RETURN_SERVER = 'RETURN_SERVER';
export const selectsServer = info => {
  return {
    type: SELECT_SERVER,
    info
  };
};

export const returnServer = () => {
  return {
    type: RETURN_SERVER,
  };
};

export const unselectServer = () => {
  return {
    type: UNSELECT_SERVER
  };
};