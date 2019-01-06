import { FETCHING_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from './types';

export const fetchTodos = () => (dispatch, getState, api) => {
	dispatch({ type: FETCHING_TODOS });

	return api.todo
		.get()
		.then(response => {
			dispatch(fetchTodosSuccess(response.data));
		})
		.catch(error => {
			dispatch(fetchTodosFailure(error));
		});
};

export const fetchTodosSuccess = todos => ({ type: FETCH_TODOS_SUCCESS, payload: todos });

export const fetchTodosFailure = error => ({ type: FETCH_TODOS_FAILURE, payload: error });
