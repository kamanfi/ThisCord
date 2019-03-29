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

export const deleteServer = (id) => {
  return $.ajax({
    url: `/api/servers/${id}`,
    method: 'DELETE'
  });
};