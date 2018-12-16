import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory, createMemoryHistory } from 'history';
import api from '../api';
/*Do not remove comments below or modify them... it may break cli */
//Reducer imports
import commonReducer from './reducers/commonReducer';
import blogReducer from './reducers/blogReducer';
//Reducer imports end

const isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

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
	commonReducer: commonReducer,
	blogReducer: blogReducer
});

let serverState = {};
if (!isServer) {
	// Grab the state from a global variable injected into the server-generated HTML
	serverState = window.__PRELOADED_STATE__;
	// Allow the passed state to be garbage-collected
	delete window.__PRELOADED_STATE__;
}

const middleware = [thunk.withExtraArgument(api), routerMiddleware(history)];
const store = createStore(rootReducer, serverState, composeEnhancers(applyMiddleware(...middleware)));

export { store, history };