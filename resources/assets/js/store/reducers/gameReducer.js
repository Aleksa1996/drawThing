import {
	GAME_STARTED,
	SKETCHPAD_DRAW,
	SKETCHPAD_UNDO,
	SKETCHPAD_CLEAR,
	SENDING_DRAWING,
	SEND_DRAWING,
	SEND_DRAWING_SUCCESS,
	SEND_DRAWING_FAILURE,
	RECEIVE_DRAWING,
	CLEAR_GAME_DATA
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	started: false,
	drawing: {
		items: []
	}
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case GAME_STARTED: {
			return updateGame(state, { started: true });
		}
		case SKETCHPAD_DRAW: {
			const newDrawings = addDrawing(state.drawing.items, payload);
			return updateGame(state, { drawing: { items: newDrawings } });
		}
		case SKETCHPAD_UNDO: {
			const newDrawings = undoDrawing(state.drawing.items);
			return updateGame(state, { drawing: { items: newDrawings } });
		}
		case SKETCHPAD_CLEAR: {
			return updateGame(state, { drawing: { items: [] } });
		}
		case RECEIVE_DRAWING: {
			return updateGame(state, { drawing: { items: payload.drawing.items } });
		}
		case CLEAR_GAME_DATA: {
			return { ...initialState };
		}
		default:
			return { ...state };
	}
};

export default reducer;

export const selector = state => {};

export const updateGame = (state, game) => {
	return _fp_assign(state, game);
};

export const addDrawing = (drawings, drawing) => {
	return drawings.concat([drawing]);
};

export const undoDrawing = drawings => {
	return [...drawings].slice(0, -1);
};
