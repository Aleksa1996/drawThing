import {
	SKETCHPAD_DRAW,
	SKETCHPAD_UNDO,
	SKETCHPAD_CLEAR,
	RECEIVE_DRAWING_GAME,
	//
	STARTING_GAME_REQUEST,
	STARTING_GAME_REQUEST_SUCCESS,
	STARTING_GAME_REQUEST_FAILURE,
	//
	STARTING_GAME_COUNTDOWN,
	PLAYER_CHOOSING_WORD,
	CHOOSED_WORD,
	//
	CHOOSE_WORD,
	//
	CLEAR_GAME_DATA
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	starting_game_request: false,
	starting_game_request_approved: false,
	starting_game_request_errors: [],
	//
	drawing: {
		items: []
	},
	status: 'NOT_STARTED',
	//
	drawn_by: null,
	//
	words_to_choose: [],
	chosed_word: null
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
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
		case RECEIVE_DRAWING_GAME: {
			return updateGame(state, { drawing: { items: payload.drawing.items } });
		}
		//
		case STARTING_GAME_REQUEST: {
			return updateGame(state, { starting_game_request: true });
		}
		case STARTING_GAME_REQUEST_SUCCESS: {
			return updateGame(state, {
				starting_game_request: false,
				starting_game_request_approved: true
			});
		}
		case STARTING_GAME_REQUEST_FAILURE: {
			return updateGame(state, {
				starting_game_request: false,
				starting_game_request_approved: false,
				starting_game_request_errors: payload.errors
			});
		}
		// REAL GAME STATUSES
		case STARTING_GAME_COUNTDOWN: {
			return updateGame(state, { status: 'STARTING', drawn_by: payload.drawn_by });
		}
		case PLAYER_CHOOSING_WORD: {
			return updateGame(state, {
				status: 'CHOOSING_WORD'
			});
		}
		case CHOOSED_WORD: {
			return updateGame(state, {
				status: 'STARTED',
				chosed_word: payload.word
			});
		}
		//
		case CHOOSE_WORD: {
			return updateGame(state, {
				words_to_choose: payload.game.words_to_choose
			});
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
