import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import api from '../api';

import createWSMiddleware from './middlewares/websocketMiddleware';
import { sockets } from '../store/middlewares/websocketMiddleware';

import crashReporterMiddleware from './middlewares/crashReporterMiddleware';

import globals from '../globals';

/*Do not remove comments below or modify them... it may break cli */
//Reducer imports
import socketReducer from './reducers/socketReducer';
import commonReducer from './reducers/commonReducer';
import playerReducer from './reducers/playerReducer';
import roomReducer from './reducers/roomReducer';
import chatReducer from './reducers/chatReducer';
import gameReducer from './reducers/gameReducer';
import modalReducer from './reducers/modalReducer';
import countdownReducer from './reducers/countdownReducer';
import roundReducer from './reducers/roundReducer';

//Reducer imports end

const isServer = !(
	typeof window !== 'undefined' &&
	window.document &&
	window.document.createElement
);

const composeEnhancers =
	process.env.NODE_ENV === 'production'
		? null || compose
		: (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const history = isServer
	? createMemoryHistory({
			initialEntries: ['/']
	  })
	: createBrowserHistory();

const rootReducer = combineReducers({
	router: connectRouter(history),
	form: formReducer,
	common: commonReducer,
	socket: socketReducer,
	player: playerReducer,
	room: roomReducer,
	chat: chatReducer,
	game: gameReducer,
	modal: modalReducer,
	countdown: countdownReducer,
	round: roundReducer
});

let serverState = {};
if (!isServer) {
	// Grab the state from a global variable injected into the server-generated HTML
	serverState = window.__PRELOADED_STATE__;
	// Allow the passed state to be garbage-collected
	delete window.__PRELOADED_STATE__;
}

const middleware = [
	thunk.withExtraArgument({ api, sockets }),
	routerMiddleware(history),
	createWSMiddleware({ game: globals.url.host }),
	crashReporterMiddleware //ALWAYS KEEP IT ON END TO REPORT ALL
];
const store = createStore(
	rootReducer,
	serverState,
	composeEnhancers(applyMiddleware(...middleware))
);

export { store, history };
