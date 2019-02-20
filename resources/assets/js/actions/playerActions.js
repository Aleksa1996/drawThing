import { CREATING_PLAYER, CREATE_PLAYER_SUCCESS, CREATE_PLAYER_FAILURE } from './types';
import { createRoom } from './roomActions';

export const createPlayer = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_PLAYER });

	const fData = new FormData();
	fData.append('username', data.username);
	fData.append('avatar', data.avatar);

	return api.game.createPlayer(fData).then(response => {
		dispatch(createPlayerSuccess(response.data));
		dispatch(createRoom());
	});
};

export const createPlayerSuccess = userData => ({ type: CREATE_PLAYER_SUCCESS, payload: userData });
