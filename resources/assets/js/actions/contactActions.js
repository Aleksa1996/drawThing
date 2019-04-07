import {
	SUBMITTING_CONTACT_FORM,
	SUBMIT_CONTACT_FORM_SUCCESS,
	SUBMIT_CONTACT_FORM_FAILURE
} from './types';

import Helpers from '../utils/Helpers';
import Errors from '../utils/classes/Errors';

import { SubmissionError, reset } from 'redux-form';

export const submitContactForm = data => (dispatch, getState, { api, sockets }) => {
	dispatch({ type: SUBMITTING_CONTACT_FORM });

	const fData = Helpers.objToFormData(data);

	return api.contact
		.submit(fData)
		.then(response => {
			dispatch(submitContactFormSuccess(response.data));
			dispatch(reset('contactForm'));
			return response;
		})
		.catch(error => {
			dispatch(submitContactFormFailure());
			throw new SubmissionError({
				...Errors.initFromRequest(error).formatForReduxForm()
			});
		});
};

export const submitContactFormSuccess = userData => ({
	type: SUBMIT_CONTACT_FORM_SUCCESS,
	payload: userData
});
export const submitContactFormFailure = () => ({ type: SUBMIT_CONTACT_FORM_FAILURE });
