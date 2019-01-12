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

							{/* <div className="form-group">
							<div className="input-label-material">
								<input
									onChange={e => this.setState({ [e.target.name]: e.target.value })}
									type="email"
									className="form-control"
									id="email"
									name="email"
									value={this.state.email}
								/>
								<label className={`text-secondary ${this.state.email.length > 0 ? 'label-material' : ''}`} htmlFor="email">
									Email address
								</label>
							</div>
							<small id="emailHelp" className="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className="form-group">
							<div className="input-label-material">
								<input
									onChange={e => this.setState({ [e.target.name]: e.target.value })}
									type="password"
									className="form-control"
									id="password"
									name="password"
									value={this.state.password}
								/>
								<label htmlFor="password" className={`text-secondary ${this.state.password.length > 0 ? 'label-material' : ''}`}>
									Password
								</label>
							</div>
						</div>
						<div className="form-group form-check">
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" htmlFor="exampleCheck1">
								Check me out
							</label>
						</div> */}
							<Button type="submit" className="btn btn-primary">
								Submit
							</Button>
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
