import { CREATING_PLAYER, CREATE_PLAYER_SUCCESS, CREATE_PLAYER_FAILURE } from './types';

import { ws_connect, ws_subscribe, ws_emit } from './websocketActions';

import { connectRoom } from '../actions/roomActions';

export const createPlayer = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_PLAYER });

	const fData = new FormData();
	fData.append('username', data.username);
	fData.append('avatar', data.avatar);

	return api.game.createPlayer(fData).then(response => {
		dispatch(createPlayerSuccess(response.data));
		dispatch(connectRoom());
	});
};

export const createPlayerSuccess = userData => ({ type: CREATE_PLAYER_SUCCESS, payload: userData });
