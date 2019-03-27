import {
	STARTING_GAME,
	STARTING_ROUND,
	PLAYER_CHOOSING_WORD,
	PLAYER_CHOOSED_WORD,
	START_ROUND,
	TICK_ROUND,
	CHOOSE_WORD,
	FINISHING_ROUND,
	CLEAR_ROUND_DATA
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	id: null,
	number: null,
	timer: '00:00',
	//
	status: null,
	localStatus: null,
	// starting: false,
	// started: false,
	// finished: true,

	// diffInSeconds: 0,
	started_at: 0,
	finishing_at: 0,
	//
	drawn_by: null,
	//
	words_to_choose: [],
	chosed_word: null
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case STARTING_GAME: {
			return updateRound(state, { ...payload.round });
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
		case STARTING_ROUND: {
			return updateRound(state, { ...payload.round, localStatus: 'STARTING_ROUND' });
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
				localStatus: 'ROUND_FINISHED'
			});
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
export const updateRound = (state, round) => {
	return _fp_assign(state, round);
};
