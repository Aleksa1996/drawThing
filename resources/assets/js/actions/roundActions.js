import { START_ROUND, TICK_ROUND } from './types';
import { ws_connect, ws_subscribe, ws_emit, ws_unsubscribe } from './websocketActions';

import Helpers from '../utils/Helpers';

const globalEvents = [];

export const subscribeToRoomGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_subscribe('game', e)));
};

export const unsubscribeToRoomGlobalEvents = () => (dispatch, getState, { api, sockets }) => {
	globalEvents.forEach(e => dispatch(ws_unsubscribe('game', e)));
};

export const startRound = (data = null) => (dispatch, getState, { api, sockets }) => {
	const roundInterval = setInterval(() => {
		if (getState().round.duration <= 0) return clearInterval(roundInterval);
		dispatch(tickRound());
	}, 1004);
	dispatch({ type: START_ROUND });
};

export const tickRound = () => ({ type: TICK_ROUND });
