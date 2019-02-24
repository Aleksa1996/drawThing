import {
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	JOINING_ROOM,
	JOIN_ROOM_SUCCESS,
	JOIN_ROOM_FAILURE,
	PLAYER_JOINED_ROOM
} from './types';
import { ws_connect, ws_subscribe, ws_emit } from './websocketActions';

//ROOM CREATE
export const createRoom = (data = null) => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_ROOM });

	const { id, username, password } = getState().player;
	dispatch(subscribeToCreateRoom());
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

export const subscribeToCreateRoom = () => (dispatch, getState, { api, sockets }) => {
	dispatch(ws_subscribe('game', CREATE_ROOM_SUCCESS));
	dispatch(ws_subscribe('game', CREATE_ROOM_FAILURE));
	dispatch(ws_subscribe('game', PLAYER_JOINED_ROOM));
};

export const joinRoom = (data = null) => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: JOINING_ROOM });

	const { id, username, password } = getState().player;
	dispatch(subscribeToJoinRoom());

	dispatch(
		ws_emit('game', 'JOIN_ROOM', {
			player: {
				id,
				username,
				password
			},
			room: {
				uuid: data.room.uuid
			}
		})
	);
};

export const subscribeToJoinRoom = () => (dispatch, getState, { api, sockets }) => {
	dispatch(ws_subscribe('game', JOIN_ROOM_SUCCESS));
	dispatch(ws_subscribe('game', JOIN_ROOM_FAILURE));
	dispatch(ws_subscribe('game', PLAYER_JOINED_ROOM));
};
