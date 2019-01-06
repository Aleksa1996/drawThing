import { FETCHING_TODOS, FETCH_TODOS_SUCCESS } from '../../actions/types';

const initialState = {
	todos: [],
	fetched: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_TODOS: {
			return { ...state, fetched: state.fetched + 1 };
		}
		case FETCH_TODOS_SUCCESS: {
			return { ...state, todos: action.payload };
		}
		default:
			return { ...state };
	}
};

export default reducer;

export const selector = state => {};
