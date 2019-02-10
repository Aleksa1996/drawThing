import {
	CREATING_ROOM,
	CREATE_ROOM_SUCCESS,
	CREATE_ROOM_FAILURE,
	RANDOMING_ROOM,
	RANDOM_ROOM_SUCCESS,
	RANDOM_ROOM_FAILURE,
	GAME_START_FORM_ERROR_RESET
} from './types';

export const createRoom = data => (dispatch, getState, api) => {
	dispatch({ type: CREATING_ROOM });

	const fData = new FormData();
	fData.append('username', data.username);
	fData.append('avatar', data.avatar);

	return api.game
		.createRoom(fData)
		.then(response => {
			console.log(response);
			dispatch(createRoomSuccess(response.data));
		})
		.catch(error => {
			console.log(error.response);
			dispatch(createRoomFailure(error.response.data.error));
		});
};

// export const randomRoom = () => (dispatch, getState, api) => {
//     RANDOMING_ROOM
// };

export const createRoomSuccess = userData => ({ type: CREATE_ROOM_SUCCESS, payload: userData });

export const createRoomFailure = error => ({ type: CREATE_ROOM_FAILURE, payload: error });

export const randomRoomSuccess = userData => ({ type: RANDOM_ROOM_SUCCESS, payload: userData });

export const randomRoomFailure = error => ({ type: RANDOM_ROOM_FAILURE, payload: error });

export const resetGameStartFormErrors = () => ({ type: GAME_START_FORM_ERROR_RESET });
