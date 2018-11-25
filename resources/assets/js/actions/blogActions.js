import { FETCHING_BLOGS, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_FAILURE } from './types';

export const fetchBlogs = () => (dispatch, getState, api) => {
	dispatch({ type: FETCHING_BLOGS });

	return api.blog
		.get()
		.then(response => {
			dispatch(fetchBlogsSuccess(response));
		})
		.catch(error => {
			dispatch(fetchBlogsFailure(e));
		});
};

export const fetchBlogsSuccess = blogs => ({ type: FETCH_BLOGS_SUCCESS, payload: blogs });

export const fetchBlogsFailure = error => ({ type: FETCH_BLOGS_FAILURE, payload: error });
