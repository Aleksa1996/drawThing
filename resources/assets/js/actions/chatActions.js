import {
	SENDING_MESSAGE_ROOM,
	SEND_MESSAGE_ROOM_SUCCESS,
	SEND_MESSAGE_ROOM_FAILURE,
	RECEIVE_MESSAGE_ROOM,
	CLEAR_CHAT_DATA,
	CLEAR_CHAT_MESSAGES
} from './types';

import { ws_connect, ws_subscribe, ws_emit, ws_unsubscribe } from './websocketActions';

import { pick as _pick } from 'lodash';

const globalEvents = [SEND_MESSAGE_ROOM_SUCCESS, SEND_MESSAGE_ROOM_FAILURE, RECEIVE_MESSAGE_ROOM];

export const subscribeToChatGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_subscribe('game', e)));
};

export const unsubscribeToChatGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_unsubscribe('game', e)));
};

export const clearChatData = () => ({ type: CLEAR_CHAT_DATA });
export const clearChatMessages = () => ({ type: CLEAR_CHAT_MESSAGES });

export const sendMessageRoom = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: SENDING_MESSAGE_ROOM });

	if (sockets.game.connection.connected) {
		const player = _pick(getState().player, ['id', 'username', 'password']);
		const room = _pick(getState().room, ['uuid']);
		const game = _pick(getState().game, ['id', 'status']);
		// const round = _pick(getState().round, ['id', 'status']);
		const dataMessage = {
			message: { text: data.text },
			player,
			room,
			game
		};

		// if (game.id && game.status) {
		// 	dataMessage['game'] = game;
		// }

		dispatch(ws_emit('game', 'SEND_MESSAGE_ROOM', dataMessage));
	}
};
