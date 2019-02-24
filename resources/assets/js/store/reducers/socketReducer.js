import {
	CONNECTING_SOCKET,
	CONNECT_SOCKET_SUCCESS,
	CONNECT_SOCKET_FAILURE,
	CONNECT_SOCKET_DATA
} from '../../actions/types';

import { assign as _fp_assign } from 'lodash/fp';

const initialState = {
	socket: null,
	fd: null,
	created_at: null,
	//
	connecting: false,
	connected: false,
	connectionError: null
};

const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case CONNECTING_SOCKET: {
			return updateSocketState(state, { connecting: true });
		}

		case CONNECT_SOCKET_SUCCESS: {
			return updateSocketState(state, {
				connecting: false,
				connected: true,
				created_at: new Date()
			});
		}

		case CONNECT_SOCKET_FAILURE: {
			return updateSocketState(state, {
				connecting: false,
				connected: false,
				connectionError: payload.message
			});
		}

		case CONNECT_SOCKET_DATA: {
			return updateSocketState(state, { fd: payload.fd });
		}
		default:
			return { ...state };
	}
};

export default reducer;

// selectors
export const selector = state => {};

// utility reducer functions
export const updateSocketState = (state, socket) => {
	return _fp_assign(state, socket);
};
