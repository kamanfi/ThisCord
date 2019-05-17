export const fetchServers= () =>{
  return $.ajax({
    url: '/api/servers',
    method: 'GET'
  });
};

export const fetchServer = (id) => {
  return $.ajax({
    url: `/api/servers/${id}`,
    method: 'GET'
  });
};

export const createServer = (server) => {
  return $.ajax({
    url: `/api/servers/`,
    method: 'POST',
    data: { server }
  });
};

export const joinServer = (invite_code) => {
  
  return $.ajax({
    url: `/api/join`,
    method: 'GET',
    data: { invite_code }
  });
};

export const deleteServer = (id) => {
  return $.ajax({
    url: `/api/servers/${id}`,
    method: 'DELETE'
  });
}; 

export const fetchUsers = (id) => {
  return $.ajax({
    url: `/api/servers/users/${id}`,
    method: `GET`,
  })
}