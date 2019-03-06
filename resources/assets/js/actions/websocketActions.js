import {
	CONNECT_WS,
	DISCONNECT_WS,
	SUBSCRIBE_WS,
	UNSUBSCRIBE_WS,
	EMIT_WS,
	CONNECT_SOCKET_SUCCESS,
	CONNECT_SOCKET_FAILURE,
	CONNECT_SOCKET_DATA
} from './types';

const globalEvents = [
	{ eType: 'connect', action: CONNECT_SOCKET_SUCCESS },
	{ eType: 'CONNECT_SOCKET_DATA', action: CONNECT_SOCKET_DATA },
	{ eType: 'connect_error', action: CONNECT_SOCKET_FAILURE },
	{ eType: 'error', action: CONNECT_SOCKET_FAILURE },
	{ eType: 'disconnect', action: CONNECT_SOCKET_FAILURE }
];

export const ws_make_connection = socket => (dispatch, getState, { api, sockets }) => {
	dispatch(ws_connect(socket));
	globalEvents.forEach(e => dispatch(ws_subscribe(socket, e.eType, e.action)));
};

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

export const ws_unsubscribe = (socketID, event = []) => ({
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
