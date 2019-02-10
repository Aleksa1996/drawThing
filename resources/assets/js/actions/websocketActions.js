import { CONNECT_WS, DISCONNECT_WS, SUBSCRIBE_WS, UNSUBSCRIBE_WS, EMIT_WS } from './types';

export const ws_connect = socketID => ({ type: CONNECT_WS, socketID });

export const ws_disconnect = socketID => ({
	type: DISCONNECT_WS,
	socketID
});

export const ws_subscribe = (socketID, event, customActionType = null) => ({
	type: SUBSCRIBE_WS,
	socketID,
	event,
	customActionType
});

export const ws_unsubscribe = (socketID, event) => ({
	type: UNSUBSCRIBE_WS,
	socketID,
	event
});

export const ws_emit = (socketID, event, data = {}) => ({
	type: EMIT_WS,
	socketID,
	event,
	data
});
