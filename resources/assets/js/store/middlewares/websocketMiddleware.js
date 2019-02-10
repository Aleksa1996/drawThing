import {
	CONNECT_WS,
	DISCONNECT_WS,
	SUBSCRIBE_WS,
	UNSUBSCRIBE_WS,
	EMIT_WS
} from '../../actions/types';

let config = {};
const sockets = {};

function connect(url, socketID) {
	sockets[socketID] = {
		connection: io(url, { transports: ['websocket'] })
	};
}

function disconnect(socketID) {
	sockets[socketID].connection.disconnect();
	sockets[socketID] = undefined;
}

function subscribe(socketID, event, customActionType, dispatch) {
	const actionType =
		typeof customActionType == 'undefined' || !customActionType ? event : customActionType;

	const listener = data => dispatch({ type: actionType, data });

	sockets[socketID].listener = listener;
	sockets[socketID].connection.on(event, listener);
}

function unsubscribe(socketID, event) {
	sockets[socketID].connection.removeListener(event, sockets[socketID].listener);
}

function emit(socketID, event, data) {
	sockets[socketID].connection.emit(event, data);
}

export default function createWSMiddleware(wsConfig) {
	config = wsConfig;

	return store => next => action => {
		const { type, socketID, event, data, customActionType } = action;

		if (type === CONNECT_WS) {
			connect(
				config[socketID],
				socketID
			);
		}

		if (type === DISCONNECT_WS) {
			disconnect(socketID);
		}

		if (type === SUBSCRIBE_WS) {
			subscribe(socketID, event, customActionType, store.dispatch);
		}

		if (type === UNSUBSCRIBE_WS) {
			unsubscribe(socketID, event);
		}

		if (type === EMIT_WS) {
			emit(socketID, event, data);
		}

		return next(action);
	};
}
