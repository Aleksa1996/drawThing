import {
	SENDING_MESSAGE_ROOM,
	SEND_MESSAGE_ROOM_SUCCESS,
	SEND_MESSAGE_ROOM_FAILURE,
	RECEIVE_MESSAGE_ROOM,
	CLEAR_CHAT_DATA,
	PLAYER_JOINED_ROOM,
	PLAYER_LEAVED_ROOM,
	PLAYER_KICKED,
	REPLACE_ADMIN_ROOM
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

import { v4 } from 'uuid';

const initialState = {
	// {id, text, player_id}
	messages: [],
	sending: false,
	//
	chatError: null,
	//
	emojis: [
		{ text: '@emoji:fa-smile-o', class: 'fa-smile-o' },
		{ text: '@emoji:fa-meh-o', class: 'fa-meh-o' },
		{ text: '@emoji:fa-frown-o', class: 'fa-frown-o' },
		{ text: '@emoji:fa-hand-peace-o', class: 'fa-hand-peace-o' },
		{ text: '@emoji:fa-thumbs-o-up', class: 'fa-thumbs-o-up' },
		{ text: '@emoji:fa-thumbs-o-down', class: 'fa-thumbs-o-down' },
		{ text: '@emoji:fa-heart-o', class: 'fa-heart-o' }
	]
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

		case PLAYER_JOINED_ROOM: {
			const newMessages = addMessage(
				state.messages,
				generatePlayerActionMessage(payload.player, ':player has joined room.')
			);
			return updateChat(state, { messages: newMessages });
		}

		case PLAYER_LEAVED_ROOM: {
			const newMessages = addMessage(
				state.messages,
				generatePlayerActionMessage(payload.player, ':player has leaved room.')
			);
			return updateChat(state, { messages: newMessages });
		}

		case PLAYER_KICKED: {
			const newMessages = addMessage(
				state.messages,
				generatePlayerActionMessage(payload.player, ':player has been kicked from room by admin.')
			);
			return updateChat(state, { messages: newMessages });
		}

		case REPLACE_ADMIN_ROOM: {
			const newMessages = addMessage(
				state.messages,
				generatePlayerActionMessage(payload.player, ':player is now room admin.')
			);
			return updateChat(state, { messages: newMessages });
		}

		case CLEAR_CHAT_DATA: {
			return { ...initialState };
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

export const generatePlayerActionMessage = (player, text) => ({
	id: player.id + '_' + player.username + v4(),
	text: text.replace(/:player/gi, player.username),
	player_id: '#playerActionMessage'
});
