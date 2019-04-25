export const createDirectMessage = (direct_message) => {
    return $.ajax({
        url: `/api/direct_messages`,
        method: POST,
        data: { direct_message }
    });
};

export const fetchDirectMessages = () => {
    return $.ajax({
        url: `/api/direct_messages/`,
        method: 'GET',
    });
};

export const fetchDirectMessage = (id) => {
    return $.ajax({
        url: `/api/direct_messages/${id}`,
        method: 'GET',
        data: { id}
    });
};