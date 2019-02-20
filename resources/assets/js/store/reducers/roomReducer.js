import { CREATING_ROOM, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE } from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	id: null,
	uuid: null,
	created_at: null,

	creating: false,
	created: false,
	createError: null,
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
