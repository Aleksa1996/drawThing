import { CREATING_PLAYER, CREATE_PLAYER_SUCCESS, CREATE_PLAYER_FAILURE } from '../../actions/types';

import LocalStorage from '../../utils/classes/LocalStorage';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	id: null,
	username: null,
	avatar: null,
	password: null,

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
			const newPlayer = {
				...state.player,
				...payload.player,
				creating: false,
				created: true,
				password:
					payload.player.username.toLowerCase().replace(/\s+/g, '') + '_' + payload.player.id
			};

			// save player in localstorage
			// LocalStorage.save('player', newPlayer);

			return updatePlayer(state, newPlayer);
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
