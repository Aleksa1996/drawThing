import React, { Component } from 'react';

import { connect } from 'react-redux';

import Page from '../Page';
import ContactForm from './ContactForm';

class Contact extends Component {
	state = {};

	handleSubmitContactForm = values => {
		console.log(values);
	};

	render() {
		return (
			<Page title="Contact me - Drawthing" className="page-contact">
				<div className="page-padding page-contact-wrapper">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h1 className="page-contact-heading">Get in touch !</h1>
								<p className="page-contact-description">
									If you have any questions about this project, how it works or maybe about
									technologies that i used, just say hello. Also I am always open to discussing new
									projects, creative ideas or opportunities.
								</p>

								<p className="page-contact-description">
									Author of this project: &nbsp;
									<a target="_blank" href="https://aleksajovanovic.com">
										Aleksa Jovanovic
									</a>
								</p>
								<div className="page-contact-icons">
									<ul>
										<li>
											<a
												target="_blank"
												href="mailto:aleksa.j.1996@gmail.com?Subject=Hello"
												className="mybtn1"
											>
												<i className="fa fa-envelope-o" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a target="_blank" href="https://github.com/Aleksa1996/" className="mybtn1">
												<i className="fa fa-github" aria-hidden="true" />
											</a>
										</li>
										<li>
											<a
												target="_blank"
												href="https://www.linkedin.com/in/aleksaj"
												className="mybtn1"
											>
												<i className="fa fa-linkedin" aria-hidden="true" />
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-6">
								<div id="page-contact-form">
									<div className="bg-white rounded shadow py-3">
										<ContactForm handleSubmitContactForm={this.handleSubmitContactForm} />
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
export default Contact;
// export default connect(
// 	state => ({ todos: state.todoReducer.todos }),
// 	{ fetchTodos }
// )(Contact);
