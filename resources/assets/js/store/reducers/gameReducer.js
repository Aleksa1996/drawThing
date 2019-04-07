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
	FINISHING_GAME,
	//
	STARTING_ROUND,
	FINISHING_ROUND,
	//
	CLEAR_GAME_DATA,
	//
	PLAYER_GUESSED_WORD
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';
import { get as _get } from 'lodash';

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
	rounds: [],
	nextGame: null,
	nextRound: null
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
		case STARTING_ROUND: {
			const newRounds = addRound(state.rounds, payload.round);
			return updateGame(state, { rounds: newRounds });
		}
		//
		case FINISHING_ROUND: {
			return updateGame(state, { rounds: payload.rounds });
		}
		//
		case FINISHING_GAME: {
			let { game, rounds, isThereNextGame } = payload;

			let nextRound = null;
			let nextGame = null;
			if (isThereNextGame) {
				nextRound = { ..._get(payload, 'nextRound', null), score: [] };
				nextGame = { ..._get(payload, 'nextGame', null), rounds: [] };
			}

			return updateGame(state, {
				...game,
				rounds,
				isThereNextGame,
				nextRound,
				nextGame
			});
		}
		case PLAYER_GUESSED_WORD: {
			const { player } = payload;
			const newRounds = updateScoreInRound(state.rounds, player.score);
			return updateGame(state, { rounds: newRounds });
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

export const updateGame = (state, game) => _fp_assign(state, game);

export const addDrawing = (drawings, drawing) => drawings.concat([drawing]);

export const undoDrawing = drawings => [...drawings].slice(0, -1);

export const addRound = (rounds, round) => rounds.concat([round]);

export const updateScoreInRound = (rounds, newScore) =>
	rounds.map(r => {
		if (r.id == newScore.round_id) {
			let score = r.score.map(s => {
				if (s.id == newScore.id) {
					return { ...s, ...newScore };
				}
				return { ...s };
			});
			return { ...r, score };
		}
		return { ...r };
	});
