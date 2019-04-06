import {
	REQUEST_WORDS,
	CHOOSED_WORD,
	PLAYER_CHOOSING_WORD,
	PLAYER_CHOOSED_WORD,
	CHOOSE_WORD,
	START_ROUND,
	TICK_ROUND,
	FINISHING_ROUND,
	CLEAR_ROUND_DATA,
	PLAYER_GUESSED_WORD,
	PLAYER_WAS_CLOSE
} from './types';
import { ws_connect, ws_subscribe, ws_emit, ws_unsubscribe } from './websocketActions';

const globalEvents = [
	PLAYER_CHOOSING_WORD,
	PLAYER_CHOOSED_WORD,
	CHOOSE_WORD,
	TICK_ROUND,
	FINISHING_ROUND,
	PLAYER_GUESSED_WORD,
	PLAYER_WAS_CLOSE
];

export const subscribeToRoundGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_subscribe('game', e)));
};

export const unsubscribeToRoundGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_unsubscribe('game', e)));
};

export const clearRoundData = () => ({ type: CLEAR_ROUND_DATA });

//
export const requestWordsToChoose = () => (dispatch, getState, { api, sockets }) => {
	const { id, username, password } = getState().player;
	dispatch(
		ws_emit('game', REQUEST_WORDS, {
			player: { id, username, password },
			room: { uuid: getState().room.uuid }
		})
	);
};

export const chooseWord = word => (dispatch, getState, { api, sockets }) => {
	const { id, username, password } = getState().player;
	dispatch(
		ws_emit('game', CHOOSED_WORD, {
			player: { id, username, password },
			word,
			room: { uuid: getState().room.uuid }
		})
	);
};

export const roundStart = word => (dispatch, getState, { api, sockets }) => {};

// export const startRound = (data = null) => (dispatch, getState, { api, sockets }) => {
// 	const roundInterval = setInterval(() => {
// 		if (getState().round.duration <= 0) return clearInterval(roundInterval);
// 		dispatch(tickRound());
// 	}, 1004);
// 	dispatch({ type: START_ROUND });
// };

// export const tickRound = () => ({ type: TICK_ROUND });
