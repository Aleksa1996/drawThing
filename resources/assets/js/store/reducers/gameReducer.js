// import {
// 	CREATING_ROOM,
// 	CREATE_ROOM_SUCCESS,
// 	CREATE_ROOM_FAILURE,
// 	RANDOMING_ROOM,
// 	RANDOM_ROOM_SUCCESS,
// 	RANDOM_ROOM_FAILURE,
// 	GAME_START_FORM_ERROR_RESET
// } from '../../actions/types';

import { mapValues as _mapValues } from 'lodash';

const initialState = {};

const reducer = (state = initialState, action) => {
	// switch (action.type) {
	// 	case CREATING_ROOM: {
	// 		return { ...state, creatingRoom: true };
	// 	}
	// 	case CREATE_ROOM_SUCCESS: {
	// 		return { ...state, userData: action.payload, valid: true };
	// 	}
	// 	case CREATE_ROOM_FAILURE: {
	// 		return { ...state, formErrors: _mapValues(action.payload, v => v[0] || null), valid: false };
	// 	}
	// 	case GAME_START_FORM_ERROR_RESET: {
	// 		return { ...state, formErrors: { avatar: null, username: null }, valid: true };
	// 	}
	// 	default:
	// 		return { ...state };
	// }

	return { ...state };
};

export default reducer;

export const selector = state => {};
