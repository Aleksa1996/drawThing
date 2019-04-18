import {
	STARTING_GAME,
	FINISHING_GAME,
	//
	STARTING_ROUND,
	FINISHING_ROUND,
	START_ROUND,
	TICK_ROUND,
	//
	PLAYER_CHOOSING_WORD,
	PLAYER_CHOOSED_WORD,
	CHOOSE_WORD,
	//
	CLEAR_ROUND_DATA,
	//
	PLAYER_GUESSED_WORD
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';
import { get as _get } from 'lodash';

const initialState = {
	id: null,
	number: null,
	timer: '00:00',
	seconds: null,
	//
	status: null,
	localStatus: null,
	//
	started_at: 0,
	finishing_at: 0,
	//
	drawn_by: null,
	//
	words_to_choose: [],
	chosed_word: null,
	//
	// { player_id,score_id,guessed,points}
	score: []
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case STARTING_GAME: {
			return updateRound(state, { ...payload.round });
		}
		case FINISHING_GAME: {
			return { ...initialState, timer: '00:00', seconds: 0 };
		}
		case STARTING_ROUND: {
			return updateRound(state, { ...payload.round, localStatus: 'ROUND_STARTING' });
		}
		case TICK_ROUND: {
			return updateRound(state, {
				...payload.round,
				localStatus: 'ROUND_IN_PROGRESS'
			});
		}
		case FINISHING_ROUND: {
			return updateRound(state, {
				drawn_by: payload.drawn_by,
				chosed_word: null,
				words_to_choose: [],
				localStatus: 'ROUND_FINISHED',
				timer: '00:00',
				seconds: 0
			});
		}
		case PLAYER_CHOOSING_WORD: {
			return updateRound(state, {
				localStatus: 'PLAYER_CHOOSING_WORD'
			});
		}
		case CHOOSE_WORD: {
			return updateRound(state, {
				words_to_choose: payload.round.words_to_choose
			});
		}
		case PLAYER_CHOOSED_WORD: {
			return updateRound(state, {
				localStatus: 'PLAYER_CHOOSED_WORD',
				chosed_word: payload.word
			});
		}
		case PLAYER_GUESSED_WORD: {
			const { player } = payload;
			const newScores = updateScore(state.score, player.score);
			return updateRound(state, { score: newScores });
		}
		case CLEAR_ROUND_DATA: {
			return { ...initialState };
		}

		default:
			return { ...state };
	}
};

export default reducer;

// selectors
export const selector = state => {};

// utility reducer functions
export const updateRound = (state, round) => _fp_assign(state, round);

export const updateScore = (score, newScore) =>
	score.map(s => {
		if (s.id == newScore.id) {
			return { ...s, ...newScore };
		}
		return { ...s };
	});
