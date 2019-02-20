import {
	CONNECT_WS,
	DISCONNECT_WS,
	SUBSCRIBE_WS,
	UNSUBSCRIBE_WS,
	EMIT_WS,
	CONNECT_SOCKET_SUCCESS,
	CONNECT_SOCKET_FAILURE
} from './types';

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

export const ws_make_connection = socket => (dispatch, getState, { api, sockets }) => {
	dispatch(ws_connect(socket));

	dispatch(ws_subscribe(socket, 'connect', CONNECT_SOCKET_SUCCESS));
	dispatch(ws_subscribe(socket, 'connect_error', CONNECT_SOCKET_FAILURE));
	dispatch(ws_subscribe(socket, 'error', CONNECT_SOCKET_FAILURE));
};
