import * as TextChannelUtil from '../util/textChannelApiUtil';

export const RECEIVE_TEXT_CHANNELS = 'RECEIVE_TEXT_CHANNELS';
export const RECEIVE_TEXT_CHANNEL = 'RECEIVE_TEXT_CHANNEL';
export const DELETE_TEXT_CHANNEL = 'DELETE_TEXT_CHANNEL';

export const receive_text_channels = (text_channels) => {
  return {
    type: RECEIVE_TEXT_CHANNELS,
    text_channels
  };
};

export const receive_text_channel = (text_channel) => {
  return {
    type: RECEIVE_TEXT_CHANNEL,
    text_channel
  };
};

export const remove_text_channel = (id) => {
  return {
    type: DELETE_TEXT_CHANNEL,
    text_channelsId: id
  };
};


export const fetchTextChannels = (id) => dispatch => {
  return TextChannelUtil.fetchTextChannels(id).then((text_channel) => dispatch(receive_text_channels(text_channel)));
};


export const createTextChannel = (text_channel) => dispatch => {
  return TextChannelUtil.createTextChannel(text_channel).then((text_channel) => dispatch(receive_text_channel(text_channel)));
};

export const deleteTextChannel = (id) => dispatch => {
  return TextChannelUtil.deleteTextChannel(id).then((id) => dispatch(remove_text_channel(id)));
};