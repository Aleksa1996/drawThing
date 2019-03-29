import {
	CONNECT_WS,
	DISCONNECT_WS,
	SUBSCRIBE_WS,
	UNSUBSCRIBE_WS,
	EMIT_WS
} from '../../actions/types';

let config = {};
export const sockets = {};

function connect(url, socketID) {
	sockets[socketID] = {
		connection: io(url, { transports: ['websocket'], reconnectionAttempts: 5 })
	};
}

function disconnect(socketID) {
	sockets[socketID].connection.disconnect();
	sockets[socketID] = undefined;
}

function subscribe(socketID, event, customActionType, dispatch) {
	const actionType =
		typeof customActionType == 'undefined' || !customActionType ? event : customActionType;

	const listener = data => dispatch({ type: actionType, payload: data });

	sockets[socketID].connection.on(event, listener);
}

function unsubscribe(socketID, event) {
	if (!Array.isArray(event)) {
		event = [event];
	}
	event.forEach(e => {
		sockets[socketID].connection.removeAllListeners(e);
	});
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

		if (!socketExists(socketID)) return next(action);

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

export const socketExists = socketID => {
	return (
		typeof sockets[socketID] !== 'undefined' && typeof sockets[socketID].connection !== 'undefined'
	);
};
