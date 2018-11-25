export const commonAction = () => {
	console.log('commonAction');
	return { type: '', payload: '' };
};

export const commonThunkAction = () => {
	return (dispatch, getState) => {};
};
