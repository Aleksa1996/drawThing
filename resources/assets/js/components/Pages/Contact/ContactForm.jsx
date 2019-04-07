import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Field } from 'redux-form';
import { RenderInput, RenderTextarea } from '../../../hocs';
import Button from '../../Form/Button';

import { validate } from '../../../utils';
import { formFields } from './fields';

import { throttle as _throttle } from 'lodash';

class ContactForm extends Component {
	state = {};

	handleContactForm = _throttle(values => this.props.handleSubmitContactForm(values), 1000);

	render() {
		const { handleSubmit, submitting, submitSucceeded, anyTouched, error } = this.props;
		const { name, email, subject, message } = formFields;
		return (
			<form onSubmit={handleSubmit(this.handleContactForm)}>
				<Field name="name" component={RenderInput} {...name} />
				<Field name="email" component={RenderInput} {...email} />
				<Field name="subject" component={RenderInput} {...subject} />
				<Field name="message" component={RenderTextarea} {...message} />
				<div className="col-md-12">
					{!anyTouched && submitSucceeded && (
						<small className="text-success d-block my-3">Message successfully sent!</small>
					)}
					{error && <small className="text-danger d-block my-3">{error}</small>}
					<Button type="submit" icon="fa-paper-plane" className="mybtn2" disabled={submitting}>
						Submit
					</Button>
				</div>
			</form>
		);
	}
}

export default reduxForm({
	form: 'contactForm',
	validate: validate(formFields),
	enableReinitialize: true
})(ContactForm);
