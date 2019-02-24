import {
	SENDING_MESSAGE_ROOM,
	SEND_MESSAGE_ROOM_SUCCESS,
	SEND_MESSAGE_ROOM_FAILURE,
	RECEIVE_MESSAGE_ROOM
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	messages: [],
	sending: false,

	chatError: null
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SENDING_MESSAGE_ROOM: {
			return updateChat(state, { sending: true });
		}
		case SEND_MESSAGE_ROOM_SUCCESS: {
			const newMessages = addMessage(state.messages, payload.message);
			return updateChat(state, { sending: false, messages: newMessages });
		}
		case SEND_MESSAGE_ROOM_FAILURE: {
			return updateChat(state, { sending: false, chatError: payload.message });
		}
		case RECEIVE_MESSAGE_ROOM: {
			const newMessages = addMessage(state.messages, payload.message);
			return updateChat(state, { messages: newMessages });
		}
		default:
			return { ...state };
	}
};

export default reducer;
// selectors
export const selector = state => {};

// utility reducer functions
export const updateChat = (state, room) => {
	return _fp_assign(state, room);
};

export const addMessage = (messages, message) => {
	return messages.concat([message]);
};
