import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import { fetchTodos } from '../../../actions/todoActions';

import { RenderInput, RenderTextarea } from '../../../hocs';
import Button from '../../Form/Button';

import { formFields } from './fields';
import { validate } from '../../../utils';

import Page from '../Page';

class Contact extends Component {
	state = {
		email: '',
		password: ''
	};

	componentDidMount() {
		// this.props.fetchTodos();
		console.log(formFields);
	}

	handleContactForm = values => {
		console.log(values);
	};

	render() {
		const { handleSubmit } = this.props;
		return (
			<Page title="Contact me - Drawthing">
				<div id="contactComponent" className="row justify-content-md-center">
					<div className="bg-white rounded shadow px-5 py-3 col-md-7">
						<form onSubmit={handleSubmit(this.handleContactForm)}>
							<Field name="name" component={RenderInput} {...formFields.name} />
							<Field name="email" component={RenderInput} {...formFields.email} />
							<Field name="subject" component={RenderInput} {...formFields.subject} />
							<Field name="message" component={RenderTextarea} {...formFields.message} />
							<div className="col-md-12">
								<Button type="submit" className="btn btn-primary">
									Submit
								</Button>
							</div>
						</form>
					</div>
				</div>
			</Page>
		);
	}
}

// Contact.serverFetch = fetchTodos;

export default connect(
	state => ({ todos: state.todoReducer.todos }),
	{ fetchTodos }
)(
	reduxForm({
		form: 'contact-form',
		validate: validate(formFields),
		enableReinitialize: true
	})(Contact)
);
