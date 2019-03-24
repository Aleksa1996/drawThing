import { START_ROUND, TICK_ROUND, STARTING_ROUND } from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	duration: 1,
	starting: false,
	started: false,
	finished: false,

	startedAt: 0,
	finishingAt: 0
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case STARTING_ROUND: {
			return updateRound(state, { starting: true });
		}

		case START_ROUND: {
			const startedAt = new Date().getTime();
			return updateRound(state, {
				...payload,
				starting: false,
				started: true,
				finished: false,
				startedAt,
				// finishingAt: startedAt + 120000
				finishingAt: startedAt + 22000
			});
		}

		// case STOP_ROUND: {
		// 	return { ...initialState };
		// }

		// case FINISH_ROUND: {
		// 	return { ...initialState };
		// }

		case TICK_ROUND: {
			const newDuration = state.finishingAt - new Date().getTime();
			return updateRound(state, { duration: newDuration, finished: false });
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
