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
			<Page title="Contact me - Drawthing" className="page-contact">
				<div className="page-padding page-contact-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h1 className="page-contact-heading">Get in touch !</h1>
								<p className="page-contact-description">
									If you have any questions about this project, how it works or maybe about technologies that i used, just say
									hello. Also I am always open to discussing new projects, creative ideas or opportunities.
								</p>

								<p className="page-contact-description">
									Author of this project:{' '}
									<a target="_blank" href="https://aleksajovanovic.com">
										Aleksa Jovanovic
									</a>
								</p>
								<div className="page-contact-icons">
									<ul>
										<li>
											<a target="_blank" href="mailto:aleksa.j.1996@gmail.com?Subject=Hello" className="mybtn1">
												<i className="fa fa-envelope-o" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a target="_blank" href="https://github.com/Aleksa1996/" className="mybtn1">
												<i className="fa fa-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a target="_blank" href="https://www.linkedin.com/in/aleksaj" className="mybtn1">
												<i className="fa fa-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-6">
								<div id="page-contact-form">
									<div className="bg-white rounded shadow py-3">
										<form onSubmit={handleSubmit(this.handleContactForm)}>
											<Field name="name" component={RenderInput} {...formFields.name} />
											<Field name="email" component={RenderInput} {...formFields.email} />
											<Field name="subject" component={RenderInput} {...formFields.subject} />
											<Field name="message" component={RenderTextarea} {...formFields.message} />
											<div className="col-md-12">
												<Button type="submit" icon="fa-paper-plane" className="mybtn2">
													Submit
												</Button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
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
