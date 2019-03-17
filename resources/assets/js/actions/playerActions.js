import {
	CREATING_PLAYER,
	CREATE_PLAYER_SUCCESS,
	CREATE_PLAYER_FAILURE,
	CLEAR_PLAYER_DATA
} from './types';

export const clearPlayerData = () => ({ type: CLEAR_PLAYER_DATA });

export const createPlayer = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_PLAYER });

	// za pravljenje form data form data
	const fData = new FormData();
	fData.append('username', data.username);
	fData.append('avatar', data.avatar);
	fData.append('fd', getState().socket.fd);

	return api.player.create(fData).then(response => {
		dispatch(createPlayerSuccess(response.data));
		return response;
	});
};

export const createPlayerSuccess = userData => ({ type: CREATE_PLAYER_SUCCESS, payload: userData });
