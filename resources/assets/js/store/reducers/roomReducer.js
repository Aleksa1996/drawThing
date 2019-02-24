import {
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	JOINING_ROOM,
	JOIN_ROOM_SUCCESS,
	JOIN_ROOM_FAILURE,
	PLAYER_JOINED_ROOM
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
			return updateRoom(state, { creating: false, created: false, createError: payload.message });
		}

		case JOINING_ROOM: {
			return updateRoom(state, { joining: true });
		}

		case JOIN_ROOM_SUCCESS: {
			return updateRoom(state, { joining: false, joined: true, ...payload.room });
		}

		case JOIN_ROOM_FAILURE: {
			return updateRoom(state, { joining: false, joined: false, joinError: payload.message });
		}

		case PLAYER_JOINED_ROOM: {
			const newPlayers = addPlayer(state.players, payload.player);
			return updateRoom(state, { players: newPlayers });
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
