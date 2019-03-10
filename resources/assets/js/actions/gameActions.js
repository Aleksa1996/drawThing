import {
	STARTING_GAME,
	START_GAME_SUCCESS,
	START_GAME_FAILURE,
	SKETCHPAD_DRAW,
	SKETCHPAD_UNDO,
	SKETCHPAD_CLEAR,
	SENDING_DRAWING,
	SEND_DRAWING,
	SEND_DRAWING_SUCCESS,
	SEND_DRAWING_FAILURE,
	RECEIVE_DRAWING,
	CLEAR_GAME_DATA
} from './types';

import { ws_connect, ws_subscribe, ws_emit, ws_unsubscribe } from './websocketActions';

const globalEvents = [SEND_DRAWING_SUCCESS, SEND_DRAWING_FAILURE, RECEIVE_DRAWING];

export const subscribeToGameGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_subscribe('game', e)));
};

export const unsubscribeToGameGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_unsubscribe('game', e)));
};

export const clearGameData = () => ({ type: CLEAR_GAME_DATA });

export const startGame = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: STARTING_GAME });

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
			console.log(response);
			dispatch(startGameSuccess(response.data));
		})
		.catch(error => {
			console.log(error.response);
			dispatch(startGameFailure(error.response.data.error));
		});
};
export const startGameSuccess = data => ({ type: START_GAME_SUCCESS, payload: data });
export const startGameFailure = error => ({ type: START_GAME_FAILURE, payload: error });
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
//
export const sketchSendDrawings = items => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: SENDING_DRAWING });

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
