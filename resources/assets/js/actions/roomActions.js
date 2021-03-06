import {
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	JOINING_ROOM,
	JOIN_ROOM_SUCCESS,
	JOIN_ROOM_FAILURE,
	PLAYER_JOINED_ROOM,
	PLAYER_LEAVED_ROOM,
	KICKING_PLAYER,
	PLAYER_KICK_SUCCESS,
	PLAYER_KICK_FAILURE,
	PLAYER_KICKED,
	REPLACE_ADMIN_ROOM,
	CLEAR_ROOM_DATA,
	STARTING_GAME,
	UPDATE_PLAYER,
	ROOM_FORM_UPDATED
} from './types';
import { ws_connect, ws_subscribe, ws_emit, ws_unsubscribe } from './websocketActions';

import { push, replace } from 'connected-react-router';

import Helpers from '../utils/Helpers';

import { debounce as _debounce } from 'lodash';

const globalEvents = [
	PLAYER_JOINED_ROOM,
	PLAYER_KICKED,
	PLAYER_LEAVED_ROOM,
	REPLACE_ADMIN_ROOM,
	STARTING_GAME,
	ROOM_FORM_UPDATED
];

export const subscribeToRoomGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_subscribe('game', e)));
};

export const unsubscribeToRoomGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_unsubscribe('game', e)));
};

export const clearRoomData = () => ({ type: CLEAR_ROOM_DATA });

//ROOM CREATE
export const createRoom = (data = null) => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_ROOM });

	const { id, username, password } = getState().player;

	const fData = Helpers.objToFormData({ id, username, password }, 'player');

	return api.room
		.create(fData)
		.then(response => {
			dispatch(createRoomSuccess(response.data));
			return response;
		})
		.catch(error => {
			console.log(error.response);
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

			const { player, room } = response.data;
			if (player) dispatch({ type: UPDATE_PLAYER, payload: { player } });
			if (room.has_game_in_progress) {
				dispatch({ type: STARTING_GAME, payload: { game: room.game } });
				dispatch(replace('/game'));
			}

			return response;
		})
		.catch(error => {
			console.log(error.response);
			console.log(error.response.data);
			dispatch(joinRoomFailure(error.response.data));
		});
};

export const joinRoomSuccess = room => ({ type: JOIN_ROOM_SUCCESS, payload: room });
export const joinRoomFailure = error => ({ type: JOIN_ROOM_FAILURE, payload: error });

export const kickPlayer = playerId => (dispatch, getState, { api, sockets }) => {
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
			id: playerId
		}
	};

	return api.room
		.kick(fdata)
		.then(response => {
			dispatch(kickPlayerSuccess(response.data));
			return response;
		})
		.catch(error => {
			console.log(error.response);
			console.log(error.response.data);
			dispatch(kickPlayerFailure(error.response.data));
		});
};

export const kickPlayerSuccess = room => ({ type: PLAYER_KICK_SUCCESS, payload: room });
export const kickPlayerFailure = error => ({ type: PLAYER_KICK_FAILURE, payload: error });

export const leaveRoom = data => (dispatch, getState, { api, sockets }) => {
	dispatch(ws_emit('game', 'LEAVE_ROOM', null));
};

export const emitRoomFormUpdate = data => (dispatch, getState, { api, sockets }) => {
	const { id, username, password } = getState().player;
	const { uuid, number_of_games, round_length } = getState().room;
	const fdata = {
		player: {
			id,
			username,
			password
		},
		room: {
			uuid,
			number_of_games,
			round_length,
			...data
		}
	};

	dispatch({ type: ROOM_FORM_UPDATED, payload: { room: fdata.room } });
	debouncedEmitRoomFormUpdate(fdata, dispatch);
};

export const debouncedEmitRoomFormUpdate = _debounce((fdata, dispatch) => {
	dispatch(ws_emit('game', 'ROOM_FORM_UPDATE', fdata));
}, 500);
