export const createDirectMessage = (direct_message) => {
    return $.ajax({
        url: `/api/direct_messages`,
        method: POST,
        data: { direct_message }
    });
};

export const fetchDirectMessages = (server_id) => {
    return $.ajax({
        url: `/api/direct_messages/`,
        method: GET,
        data: { server_id }
    });
};