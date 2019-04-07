import {
	SENDING_MESSAGE_ROOM,
	SEND_MESSAGE_ROOM_SUCCESS,
	SEND_MESSAGE_ROOM_FAILURE,
	RECEIVE_MESSAGE_ROOM,
	CLEAR_CHAT_DATA,
	PLAYER_JOINED_ROOM,
	PLAYER_LEAVED_ROOM,
	PLAYER_KICKED,
	REPLACE_ADMIN_ROOM,
	CLEAR_CHAT_MESSAGES,
	PLAYER_GUESSED_WORD,
	PLAYER_WAS_CLOSE
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

import { v4 } from 'uuid';

const initialState = {
	// {id, text, player_id, color}
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
	],
	types: {
		info: { className: 'text-warning' },
		success: { className: 'text-success' },
		danger: { className: 'text-danger' },
		message: { className: '' }
	}
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SENDING_MESSAGE_ROOM: {
			return updateChat(state, { sending: true });
		}
		case SEND_MESSAGE_ROOM_SUCCESS: {
			let newMessages = addMessage(state.messages, payload.message);
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
				generateActionMessage(`${payload.player.username} has joined room.`, state.types.success)
			);
			return updateChat(state, { messages: newMessages });
		}

		case PLAYER_LEAVED_ROOM: {
			const newMessages = addMessage(
				state.messages,
				generateActionMessage(`${payload.player.username} has leaved room.`, state.types.danger)
			);
			return updateChat(state, { messages: newMessages });
		}

		case PLAYER_KICKED: {
			const newMessages = addMessage(
				state.messages,
				generateActionMessage(
					`${payload.player.username} has been kicked from room by admin.`,
					state.types.danger
				)
			);
			return updateChat(state, { messages: newMessages });
		}

		case REPLACE_ADMIN_ROOM: {
			const newMessages = addMessage(
				state.messages,
				generateActionMessage(`${payload.player.username} is now room admin.`, state.types.info)
			);
			return updateChat(state, { messages: newMessages });
		}

		case PLAYER_GUESSED_WORD: {
			const { player } = payload;
			let newMessages = [];

			if (player.score.guessed) {
				newMessages = addMessage(
					state.messages,
					generateActionMessage(
						`${player.username} successfully guessed word! (${player.score.points} point${
							player.score.points > 1 ? 's' : ''
						})`,
						state.types.success
					)
				);
			} else {
				newMessages = [...state.messages];
			}

			return updateChat(state, { messages: newMessages });
		}

		case PLAYER_WAS_CLOSE: {
			const newMessages = addMessage(
				state.messages,
				generateActionMessage('Ouff.. you are so close!', state.types.info)
			);
			return updateChat(state, { messages: newMessages });
		}

		case CLEAR_CHAT_DATA: {
			return { ...initialState };
		}

		case CLEAR_CHAT_MESSAGES: {
			return updateChat(state, { messages: [] });
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

export const generateActionMessage = (text, type = null) => ({
	id: v4(),
	text,
	type
});
