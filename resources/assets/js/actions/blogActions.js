import { FETCHING_BLOGS, FETCH_BLOGS_SUCCESS, FETCH_BLOGS_FAILURE } from './types';

export const fetchBlogs = () => async (dispatch, getState, api) => {
	dispatch({ type: FETCHING_BLOGS });

	api.blog
		.get()
		.then(response => {
			console.log(response);
			dispatch(fetchBlogsSuccess(response.data.blogs));
		})
		.catch(error => {
			console.log(error);
			dispatch(fetchBlogsFailure(e));
		});
};

export const fetchBlogsSuccess = blogs => ({ type: FETCH_BLOGS_SUCCESS, payload: blogs });

export const fetchBlogsFailure = error => ({ type: FETCH_BLOGS_FAILURE, payload: error });
