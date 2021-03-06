import {
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	JOINING_ROOM,
	JOIN_ROOM_SUCCESS,
	JOIN_ROOM_FAILURE,
	PLAYER_JOINED_ROOM,
	PLAYER_LEAVED_ROOM,
	PLAYER_KICKED,
	REPLACE_ADMIN_ROOM,
	CLEAR_ROOM_DATA,
	ROOM_FORM_UPDATED
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	id: null,
	uuid: null,
	active: false,
	number_of_games: 3,
	current_game: 0,

	created_by: null,
	administered_by: null,

	created_at: null,
	//
	errors: [],
	//
	creating: false,
	created: false,
	//
	joining: false,
	joined: false,
	//
	lastKickedPlayer: {
		// zero is because of componentDidUpdate : Room Maximum update depth exceeded
		id: 0
	},
	//
	players: [],
	//
	has_game_in_progress: false,
	number_of_games: 3,
	round_length: 60
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CREATING_ROOM: {
			return updateRoom(state, { creating: true });
		}

		case CREATE_ROOM_SUCCESS: {
			return updateRoom(state, {
				creating: false,
				created: true,
				errors: [],
				...payload.room
			});
		}

		case CREATE_ROOM_FAILURE: {
			return updateRoom(state, { creating: false, created: false, errors: payload.errors });
		}

		case JOINING_ROOM: {
			return updateRoom(state, { joining: true });
		}

		case JOIN_ROOM_SUCCESS: {
			return updateRoom(state, { joining: false, joined: true, errors: [], ...payload.room });
		}

		case JOIN_ROOM_FAILURE: {
			return updateRoom(state, { joining: false, joined: false, errors: payload.errors });
		}

		case PLAYER_JOINED_ROOM: {
			const newPlayers = addPlayer(state.players, payload.player);
			return updateRoom(state, { players: newPlayers });
		}

		case PLAYER_LEAVED_ROOM: {
			const newPlayers = editPlayer(state.players, payload.player.id, { active: false });
			return updateRoom(state, { players: newPlayers });
		}

		case PLAYER_KICKED: {
			const newPlayers = editPlayer(state.players, payload.player.id, { active: false });
			return updateRoom(state, { players: newPlayers, lastKickedPlayer: payload.player });
		}

		case REPLACE_ADMIN_ROOM: {
			return updateRoom(state, { administered_by: payload.player.id });
		}

		case ROOM_FORM_UPDATED: {
			return updateRoom(state, { ...payload.room });
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

export const editPlayer = (players, id, player) =>
	players.map(p => {
		if (p.id == id) return _fp_assign(p, player);
		return p;
	});
