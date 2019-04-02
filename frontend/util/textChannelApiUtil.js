export const createTextChannel =  (text_channel) => {
  return $.ajax({
    url: '/api/text_channels',
    method: 'POST',
    data: { text_channel }
  });
};

export const fetchTextChannels = (server_id) => {
  return $.ajax({
    url: '/api/text_channels',
    method: 'GET',
    data: { server_id }
  });
};

export const deleteTextChannel = (id) => {
  return $.ajax({
    url: ` /api/text_channels/${id}`,
    method: 'DELETE'
  });
};

