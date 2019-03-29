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
	STARTING_GAME,
	//
	FINISHING_ROUND,
	//
	FINISHING_GAME,
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
	//
	id: null,
	status: null,
	number_of_rounds: null,
	room_id: null,
	created_at: null,
	//
	isThereNextGame: false,
	//
	rounds: []
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
		//
		case STARTING_GAME: {
			return updateGame(state, { ...payload.game });
		}
		//
		case FINISHING_ROUND: {
			return updateGame(state, { rounds: payload.rounds });
		}
		//
		case FINISHING_GAME: {
			return updateGame(state, {
				...payload.game,
				rounds: payload.rounds,
				isThereNextGame: payload.isThereNextGame
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
