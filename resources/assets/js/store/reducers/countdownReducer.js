import { SHOW_COUNTDOWN, HIDE_COUNTDOWN } from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	countdownFrom: 0,
	inProgress: false,
	show: false,
	countdownEndText: null
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SHOW_COUNTDOWN: {
			return updateCountdown(state, { ...payload, show: true, inProgress: true });
		}

		case HIDE_COUNTDOWN: {
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
export const updateCountdown = (state, countdown) => {
	return _fp_assign(state, countdown);
};
