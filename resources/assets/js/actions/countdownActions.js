import { SHOW_COUNTDOWN, HIDE_COUNTDOWN } from './types';

export const showCountdown = countDownOptions => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: SHOW_COUNTDOWN, payload: countDownOptions });

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve();
		}, (countDownOptions.countdownFrom + 1) * 1000);
	});
};

export const hideCountdown = () => ({ type: HIDE_COUNTDOWN });
