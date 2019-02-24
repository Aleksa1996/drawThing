import { CREATING_PLAYER, CREATE_PLAYER_SUCCESS, CREATE_PLAYER_FAILURE } from './types';
import { createRoom, joinRoom } from './roomActions';

export const createPlayer = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_PLAYER });

	const fData = new FormData();
	fData.append('username', data.username);
	fData.append('avatar', data.avatar);

	return api.game.createPlayer(fData).then(response => {
		dispatch(createPlayerSuccess(response.data));

		if (data.startType == 'create_room') {
			dispatch(createRoom());
		} else if (data.startType == 'random_room') {
		} else if (data.startType == 'join_room') {
			console.log(data);
			const { params } = data.routerMatch;
			dispatch(joinRoom({ room: { uuid: params.roomUUID } }));
		}
	});
};

export const createPlayerSuccess = userData => ({ type: CREATE_PLAYER_SUCCESS, payload: userData });
