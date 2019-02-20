import { CREATING_ROOM, CREATE_ROOM_SUCCESS, CREATE_ROOM_FAILURE } from './types';
import { ws_connect, ws_subscribe, ws_emit } from './websocketActions';

//ROOM CREATE
export const createRoom = (data = null) => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: CREATING_ROOM });

	const { id, username, password } = getState().player;
	dispatch(subscribeToCreateRoom());
	dispatch(
		ws_emit('game', 'CREATE_ROOM', {
			player: {
				id,
				username,
				password
			}
		})
	);
};

export const subscribeToCreateRoom = () => (dispatch, getState, { api, sockets }) => {
	dispatch(ws_subscribe('game', CREATE_ROOM_SUCCESS));
	dispatch(ws_subscribe('game', CREATE_ROOM_FAILURE));
};
