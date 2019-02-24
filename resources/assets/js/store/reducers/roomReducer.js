import {
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	JOINING_ROOM,
	JOIN_ROOM_SUCCESS,
	JOIN_ROOM_FAILURE,
	PLAYER_JOINED_ROOM,
	PLAYER_KICKED,
	CLEAR_ROOM_DATA
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	id: null,
	uuid: null,
	created_at: null,
	created_by: null,
	//
	creating: false,
	created: false,
	createError: null,
	//
	joining: false,
	joined: false,
	joinError: null,
	//
	lastKickedPlayer: {
		// zero is because of componentDidUpdate : Room Maximum update depth exceeded
		id: 0
	},
	//
	players: []
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CREATING_ROOM: {
			return updateRoom(state, { creating: true });
		}

		case CREATE_ROOM_SUCCESS: {
			return updateRoom(state, { creating: false, created: true, ...payload.room });
		}

		case CREATE_ROOM_FAILURE: {
			return updateRoom(state, { creating: false, created: false, createError: payload });
		}
		//
		case JOINING_ROOM: {
			return updateRoom(state, { joining: true });
		}

		case JOIN_ROOM_SUCCESS: {
			return updateRoom(state, { joining: false, joined: true, ...payload.room });
		}

		case JOIN_ROOM_FAILURE: {
			return updateRoom(state, { joining: false, joined: false, joinError: payload });
		}

		case PLAYER_JOINED_ROOM: {
			const newPlayers = addPlayer(state.players, payload.player);
			return updateRoom(state, { players: newPlayers });
		}

		case PLAYER_KICKED: {
			const newPlayers = removePlayer(state.players, payload.player);
			return updateRoom(state, { players: newPlayers, lastKickedPlayer: payload.player });
		}

		case CLEAR_ROOM_DATA: {
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
export const updateRoom = (state, room) => {
	return _fp_assign(state, room);
};

export const addPlayer = (players, player) => {
	return players.concat([player]);
};

export const removePlayer = (players, player) => {
	return players.filter(p => p.id != player.id);
};
