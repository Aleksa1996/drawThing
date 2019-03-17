import {
	SKETCHPAD_DRAW,
	SKETCHPAD_UNDO,
	SKETCHPAD_CLEAR,
	SEND_DRAWING,
	RECEIVE_DRAWING,
	//
	STARTING_GAME_REQUEST,
	STARTING_GAME_REQUEST_SUCCESS,
	STARTING_GAME_REQUEST_FAILURE,
	//
	STARTING_GAME_COUNTDOWN,
	PLAYER_CHOOSING_WORD,
	CHOSED_WORD,
	//
	CHOOSE_WORD,
	//
	CLEAR_GAME_DATA
} from './types';

import { ws_connect, ws_subscribe, ws_emit, ws_unsubscribe } from './websocketActions';

const globalEvents = [RECEIVE_DRAWING, CHOOSE_WORD];

export const subscribeToGameGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_subscribe('game', e)));
};

export const unsubscribeToGameGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_unsubscribe('game', e)));
};
//
export const clearGameData = () => ({ type: CLEAR_GAME_DATA });
//
export const sketchDraw = item => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: SKETCHPAD_DRAW, payload: item });
	dispatch(sketchSendDrawings(getState().game.drawing.items));
};
export const sketchUndo = item => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: SKETCHPAD_UNDO });
	dispatch(sketchSendDrawings(getState().game.drawing.items));
};
export const sketchClear = item => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: SKETCHPAD_CLEAR });
	dispatch(sketchSendDrawings(getState().game.drawing.items));
};
export const sketchSendDrawings = items => (dispatch, getState, { api, sockets }) => {
	const { id, username, password } = getState().player;
	const { uuid } = getState().room;
	const dataDrawing = {
		drawing: { items },
		player: {
			id,
			username,
			password
		},
		room: {
			uuid
		}
	};
	dispatch(ws_emit('game', SEND_DRAWING, dataDrawing));
};
//
export const startGame = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: STARTING_GAME_REQUEST });

	const { id, username, password } = getState().player;
	const { uuid } = getState().room;

	const fdata = {
		player: {
			id,
			username,
			password
		},
		room: {
			uuid
		}
	};

	return api.game
		.start(fdata)
		.then(response => {
			dispatch(startingGameSuccess(response.data));
		})
		.catch(error => {
			console.log(error.response);
			dispatch(startingGameFailure(error.response.data.error));
		});
};
export const startingGameSuccess = data => ({ type: STARTING_GAME_REQUEST_SUCCESS, payload: data });
export const startingGameFailure = error => ({
	type: STARTING_GAME_REQUEST_FAILURE,
	payload: error
});
//
export const chooseWord = word => (dispatch, getState, { api, sockets }) => {
	dispatch(ws_emit('game', CHOSED_WORD, { word }));
};
