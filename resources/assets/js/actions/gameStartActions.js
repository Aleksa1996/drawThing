import {
	CREATING_PLAYER,
	CREATE_PLAYER_SUCCESS,
	CREATE_PLAYER_FAILURE,
	//
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	//
	CONNECTING_ROOM,
	CONNECT_ROOM_SUCCESS,
	CONNECT_ROOM_FAILURE,
	//
	GAME_START_FORM_ERROR_RESET
} from './types';

import { ws_connect, ws_subscribe, ws_emit } from './websocketActions';

export const resetGameStartFormErrors = () => ({ type: GAME_START_FORM_ERROR_RESET });

export const createPlayer = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_PLAYER });

	const fData = new FormData();
	fData.append('username', data.username);
	fData.append('avatar', data.avatar);

	return api.game
		.createPlayer(fData)
		.then(response => {
			dispatch(createPlayerSuccess(response.data));
			dispatch(connectRoom());
		})
		.catch(error => {
			dispatch(createPlayerFailure(error.response.data.error));
		});
};

export const createPlayerSuccess = userData => ({ type: CREATE_PLAYER_SUCCESS, payload: userData });
export const createPlayerFailure = error => ({ type: CREATE_PLAYER_FAILURE, payload: error });

// export const randomRoom = () => (dispatch, getState, {api,sockets}) => {
//     RANDOMING_ROOM
// };
// export const randomRoomSuccess = userData => ({ type: RANDOM_ROOM_SUCCESS, payload: userData });
// export const randomRoomFailure = error => ({ type: RANDOM_ROOM_FAILURE, payload: error });

//ROOM CONNECT
export const connectRoom = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CONNECTING_ROOM });

	dispatch(ws_connect('game'));
	dispatch(ws_subscribe('game', 'error', CONNECT_ROOM_FAILURE));

	// TODO: ako treba da se kreira ako ne onda se konektuje na random
	dispatch(connectRoomSuccess());
	dispatch(createRoom());
};
export const connectRoomSuccess = data => ({ type: CONNECT_ROOM_SUCCESS, payload: data });

//ROOM CREATE
export const createRoom = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_ROOM });

	// Listening for that events in reducer
	dispatch(ws_subscribe('game', CREATE_ROOM_SUCCESS));
	dispatch(ws_subscribe('game', CREATE_ROOM_FAILURE));

	const { id, username, password } = getState().gameStartReducer.player;
	dispatch(
		ws_emit('game', 'CREATE_ROOM', {
			player: {
				id,
				username,
				password
			}
		})
	);
};
