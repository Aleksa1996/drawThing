import { FETCHING_BLOGS, FETCH_BLOGS_SUCCESS } from '../../actions/types';

const initialState = {
	blogs: [],
	fetched: 0
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_BLOGS: {
			return { ...state, fetched: state.fetched + 1 };
		}
		case FETCH_BLOGS_SUCCESS: {
			// console.log(action.payload);
			return { ...state, blogs: action.payload };
		}
		default:
			return { ...state };
	}
};

export default reducer;

export const selector = state => {};
