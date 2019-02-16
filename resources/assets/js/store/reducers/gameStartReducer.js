import {
	CREATING_PLAYER,
	CREATE_PLAYER_SUCCESS,
	CREATE_PLAYER_FAILURE,
	//
	CONNECTING_ROOM,
	CONNECT_ROOM_SUCCESS,
	CONNECT_ROOM_FAILURE,
	//
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	//
	GAME_START_FORM_ERROR_RESET
} from '../../actions/types';

import { assign as fp_assign } from 'lodash/fp';

import { mapValues as _mapValues } from 'lodash';

import LocalStorage from '../../utils/classes/LocalStorage';

const initialState = {
	formErrors: { avatar: null, username: null, generalError: '' },
	//
	player: {
		id: null,
		username: null,
		avatar: null,
		password: null,

		creating: false,
		created: false,

		connectingToRoom: false,
		connectedToRoom: false
	},
	//
	room: {
		id: null,
		uuid: null,
		created_at: null,

		creating: false,
		created: false,
		//
		players: [
			{
				id: null,
				username: null,
				avatar: null
			}
		]
	}
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case '@@INIT': {
			return { ...state, player: fp_assign(state.player, LocalStorage.get('player')) };
		}

		case GAME_START_FORM_ERROR_RESET: {
			return { ...state, formErrors: { avatar: null, username: null } };
		}

		case CREATING_PLAYER: {
			return { ...state, player: fp_assign(state.player, { creating: true }) };
		}

		case CREATE_PLAYER_SUCCESS: {
			const player = fp_assign(state.player, {
				id: payload.id,
				creating: false,
				created: true,
				username: payload.username,
				avatar: payload.avatar,
				password: payload.username.toLowerCase().replace(/\s+/g, '') + '_' + payload.id
			});

			LocalStorage.save('player', player);

			return {
				...state,
				player
			};
		}

		case CREATE_PLAYER_FAILURE: {
			return {
				...state,
				formErrors: _mapValues(payload, v => v[0] || null),
				player: fp_assign(state.player, {
					creating: false,
					created: false,
					username: '',
					avatar: ''
				})
			};
		}

		case CONNECTING_ROOM: {
			return { ...state, player: fp_assign(state.player, { connectingToRoom: true }) };
		}

		case CONNECT_ROOM_SUCCESS: {
			return {
				...state,
				player: fp_assign(state.player, { connectingToRoom: false, connectedToRoom: true })
			};
		}

		case CONNECT_ROOM_FAILURE: {
			return {
				...state,
				player: fp_assign(state.player, { connectingToRoom: false, connectedToRoom: false })
			};
		}

		case CREATING_ROOM: {
			return { ...state, room: fp_assign(state.room, { creating: true }) };
		}

		case CREATE_ROOM_SUCCESS: {
			return {
				...state,
				room: fp_assign(state.room, {
					creating: false,
					created: true,
					...payload.room
				})
			};
		}

		case CREATE_ROOM_FAILURE: {
			return {
				...state,
				room: fp_assign(state.room, {
					creating: false,
					created: false,
					generalError: payload.message
				})
			};
		}

		default:
			return fp_assign(state, {});
	}
};

export default reducer;

export const selector = state => {};
