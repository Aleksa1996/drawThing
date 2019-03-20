import {
	CREATING_PLAYER,
	CREATE_PLAYER_SUCCESS,
	CREATE_PLAYER_FAILURE,
	CLEAR_PLAYER_DATA,
	UPDATE_PLAYER
} from '../../actions/types';

import LocalStorage from '../../utils/classes/LocalStorage';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	id: null,
	username: null,
	avatar: null,
	password: null,
	//
	creating: false,
	created: false
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		// case '@@INIT': {
		// 	return updatePlayer(state, LocalStorage.get('player'));
		// }

		case CREATING_PLAYER: {
			return updatePlayer(state, { creating: true });
		}

		case CREATE_PLAYER_SUCCESS: {
			const { player } = payload;
			const newPlayer = {
				...state.player,
				...player,
				creating: false,
				created: true,
				password: generatePassword(player.id, player.username)
			};
			return updatePlayer(state, newPlayer);
		}

		case CREATE_PLAYER_FAILURE: {
			return updatePlayer(state, { creating: false, created: false });
		}

		case UPDATE_PLAYER: {
			const { player } = payload;
			const newPlayer = {
				...state.player,
				...payload.player,
				password: generatePassword(player.id, player.username)
			};
			return updatePlayer(state, newPlayer);
		}

		case CLEAR_PLAYER_DATA: {
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
export const updatePlayer = (state, player) => {
	return _fp_assign(state, player);
};

export const generatePassword = (id, username) =>
	username.toLowerCase().replace(/\s+/g, '') + '_' + id;
