import {
	SENDING_MESSAGE_ROOM,
	SEND_MESSAGE_ROOM_SUCCESS,
	SEND_MESSAGE_ROOM_FAILURE,
	RECEIVE_MESSAGE_ROOM,
	CLEAR_CHAT_DATA
} from './types';

import { ws_connect, ws_subscribe, ws_emit } from './websocketActions';

export const subscribeToChatGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	dispatch(ws_subscribe('game', SEND_MESSAGE_ROOM_SUCCESS));
	dispatch(ws_subscribe('game', SEND_MESSAGE_ROOM_FAILURE));
	dispatch(ws_subscribe('game', RECEIVE_MESSAGE_ROOM));
};

export const clearChatData = () => ({ type: CLEAR_CHAT_DATA });

export const sendMessageRoom = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: SENDING_MESSAGE_ROOM });

	if (sockets.game.connection.connected) {
		const { id, username, password } = getState().player;
		const { uuid } = getState().room;
		const dataMessage = {
			message: { text: data.text },
			player: {
				id,
				username,
				password
			},
			room: {
				uuid
			}
		};

		dispatch(ws_emit('game', 'SEND_MESSAGE_ROOM', dataMessage));
	}
};

// export const sendMessageRoomSuccessfull = userData => ({
// 	type: CREATE_PLAYER_SUCCESS,
// 	payload: userData
// });
// export const sendMessageRoomFailure = userData => ({
// 	type: CREATE_PLAYER_SUCCESS,
// 	payload: userData
// });
