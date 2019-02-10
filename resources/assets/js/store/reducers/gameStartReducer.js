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
} from '../../actions/types';

import { assign as fp_assign } from 'lodash/fp';

import { mapValues as _mapValues } from 'lodash';

const initialState = {
	formErrors: { avatar: null, username: null },
	creatingRoom: false,
	createdRoom: false,
	connectingRoom: false,
	user: {
		username: '',
		avatar: '',
		socket: null
	},
	room: {
		users: [
			{
				username: '',
				avatar: ''
			}
		],
		chat: {
			messages: []
		}
	}
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATING_ROOM: {
			return { ...state, creatingRoom: true, createdRoom: false };
		}
		case CREATE_ROOM_SUCCESS: {
			return {
				...state,
				user: fp_assign(state.user, action.payload),
				creatingRoom: false,
				createdRoom: true
			};
		}
		case CREATE_ROOM_FAILURE: {
			return {
				...state,
				formErrors: _mapValues(action.payload, v => v[0] || null),
				creatingRoom: false,
				createdRoom: false
			};
		}
		case GAME_START_FORM_ERROR_RESET: {
			return { ...state, formErrors: { avatar: null, username: null } };
		}

		case ROOM_CONNECTING: {
			return { ...state, connectingRoom: true };
		}

		case ROOM_CONNECT_SUCCESS: {
			return {
				...state,
				user: fp_assign(state.user, { socket: action.payload }),
				connectingRoom: false
			};
		}

		case ROOM_CONNECT_FAILURE: {
			return { ...state, user: action.payload, connectingRoom: false };
		}

		case 'ROOM_UPDATE': {
			console.log(action);
		}
		case 'ROOM_ERROR': {
			console.log(action);
		}
		default:
			return { ...state };
	}
};

export default reducer;

export const selector = state => {};
