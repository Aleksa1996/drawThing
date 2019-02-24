import {
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	JOINING_ROOM,
	JOIN_ROOM_SUCCESS,
	JOIN_ROOM_FAILURE,
	PLAYER_JOINED_ROOM,
	KICKING_PLAYER,
	PLAYER_KICK_SUCCESS,
	PLAYER_KICK_FAILURE,
	PLAYER_KICKED,
	CLEAR_ROOM_DATA
} from './types';
import { ws_connect, ws_subscribe, ws_emit } from './websocketActions';
import { clearChatData } from './chatActions';
import { clearPlayerData } from './playerActions';

export const subscribeToRoomGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	dispatch(ws_subscribe('game', PLAYER_JOINED_ROOM));
	dispatch(ws_subscribe('game', PLAYER_KICKED));
};

export const clearRoomData = () => ({ type: CLEAR_ROOM_DATA });

//ROOM CREATE
export const createRoom = (data = null) => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_ROOM });

	const { id, username, password } = getState().player;

	const fData = new FormData();
	fData.append('id', id);
	fData.append('username', username);
	fData.append('password', password);

	return api.room
		.create(fData)
		.then(response => {
			dispatch(createRoomSuccess(response.data));
			return response;
		})
		.catch(error => {
			console.log(error);
			console.log(error.response.data);
			dispatch(createRoomFailure(error.response.data));
		});
};
export const createRoomSuccess = room => ({ type: CREATE_ROOM_SUCCESS, payload: room });
export const createRoomFailure = error => ({ type: CREATE_ROOM_FAILURE, payload: error });

export const joinRoom = (data = null) => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: JOINING_ROOM });

	const { id, username, password } = getState().player;

	const fdata = {
		player: {
			id,
			username,
			password
		},
		room: {
			uuid: data.room.uuid
		}
	};

	return api.room
		.join(fdata)
		.then(response => {
			dispatch(joinRoomSuccess(response.data));
			return response;
		})
		.catch(error => {
			console.log(error);
			console.log(error.response.data);
			dispatch(joinRoomFailure(error.response.data));
		});
};

export const joinRoomSuccess = room => ({ type: JOIN_ROOM_SUCCESS, payload: room });
export const joinRoomFailure = error => ({ type: JOIN_ROOM_FAILURE, payload: error });

export const kickPlayer = (data = null) => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: KICKING_PLAYER });
	const { id, username, password } = getState().player;
	const { uuid } = getState().room;

	const fdata = {
		player: {
			id,
			username,
			password
		},
		room: {
			uuid
		},
		player_to_kick: {
			id: data.player_to_kick
		}
	};

	return api.room
		.kick(fdata)
		.then(response => {
			dispatch(kickPlayerSuccess(response.data));
			return response;
		})
		.catch(error => {
			console.log(error);
			console.log(error.response.data);
			dispatch(kickPlayerFailure(error.response.data));
		});
};

export const kickPlayerSuccess = room => ({ type: PLAYER_KICK_SUCCESS, payload: room });
export const kickPlayerFailure = error => ({ type: PLAYER_KICK_FAILURE, payload: error });

export const clearDataAfterKick = () => (dispatch, getState, { api, sockets }) => {
	dispatch(clearRoomData());
	dispatch(clearChatData());
	dispatch(clearPlayerData());
};
