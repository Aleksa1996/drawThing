import {
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	//
	CONNECTING_ROOM,
	CONNECT_ROOM_SUCCESS,
	CONNECT_ROOM_FAILURE
} from './types';
import { ws_connect, ws_subscribe, ws_emit } from './websocketActions';

//ROOM CONNECT
export const connectRoom = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CONNECTING_ROOM });

	dispatch(ws_connect('game'));

	dispatch(ws_subscribe('game', 'connect', CONNECT_ROOM_SUCCESS));
	dispatch(ws_subscribe('game', 'connect_error', CONNECT_ROOM_FAILURE));

	// TODO: ako treba da se kreira ako ne onda se konektuje na random
	dispatch(createRoom());
};

//ROOM CREATE
export const createRoom = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_ROOM });

	// Listening for that events in reducer
	dispatch(ws_subscribe('game', CREATE_ROOM_SUCCESS));
	dispatch(ws_subscribe('game', CREATE_ROOM_FAILURE));
	const { id, username, password } = getState().player;
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
