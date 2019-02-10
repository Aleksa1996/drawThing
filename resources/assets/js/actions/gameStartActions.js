import {
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	RANDOMING_ROOM,
	RANDOM_ROOM_SUCCESS,
	RANDOM_ROOM_FAILURE,
	GAME_START_FORM_ERROR_RESET,
	ROOM_CONNECTING,
	ROOM_CONNECT_SUCCESS,
	ROOM_CONNECT_FAILURE
} from './types';

import { ws_connect, ws_subscribe, ws_emit } from './websocketActions';

export const createRoom = data => (dispatch, getState, api) => {
	dispatch({ type: CREATING_ROOM });

	const fData = new FormData();
	fData.append('username', data.username);
	fData.append('avatar', data.avatar);

	return api.game
		.validateUser(fData)
		.then(response => {
			dispatch(createRoomSuccess(response.data));
			dispatch(roomConnect());
		})
		.catch(error => {
			dispatch(createRoomFailure(error.response.data.error));
		});
};

// export const randomRoom = () => (dispatch, getState, api) => {
//     RANDOMING_ROOM
// };

export const createRoomSuccess = userData => ({ type: CREATE_ROOM_SUCCESS, payload: userData });

export const createRoomFailure = error => ({ type: CREATE_ROOM_FAILURE, payload: error });

export const randomRoomSuccess = userData => ({ type: RANDOM_ROOM_SUCCESS, payload: userData });

export const randomRoomFailure = error => ({ type: RANDOM_ROOM_FAILURE, payload: error });

export const resetGameStartFormErrors = () => ({ type: GAME_START_FORM_ERROR_RESET });

//ROOM CONNECT
export const roomConnect = data => (dispatch, getState, api) => {
	dispatch({ type: ROOM_CONNECTING });

	dispatch(ws_connect('game'));

	dispatch(ws_subscribe('game', 'ROOM_UPDATE'));

	dispatch(ws_subscribe('game', 'error', 'ROOM_ERROR'));

	dispatch(ws_emit('game', 'CREATE_ROOM', {}));
};

export const roomConnectSuccess = socket => ({ type: ROOM_CONNECT_SUCCESS, payload: socket });
export const roomConnectFailure = error => ({ type: ROOM_CONNECT_FAILURE, payload: error });
