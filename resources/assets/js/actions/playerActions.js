import {
	CREATING_PLAYER,
	CREATE_PLAYER_SUCCESS,
	CREATE_PLAYER_FAILURE,
	CLEAR_PLAYER_DATA
} from './types';

import Helpers from '../utils/Helpers';

export const clearPlayerData = () => ({ type: CLEAR_PLAYER_DATA });

export const createPlayer = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_PLAYER });

	const fData = Helpers.objToFormData({ ...data, fd: getState().socket.fd });

	return api.player.create(fData).then(
		response => {
			dispatch(createPlayerSuccess(response.data));
			return response;
		},
		error => {
			dispatch(createPlayerFailure());
			throw error;
		}
	);
};

export const createPlayerSuccess = userData => ({ type: CREATE_PLAYER_SUCCESS, payload: userData });
export const createPlayerFailure = () => ({ type: CREATE_PLAYER_FAILURE });
