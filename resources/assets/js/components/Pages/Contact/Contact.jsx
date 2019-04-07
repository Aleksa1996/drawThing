import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitContactForm } from '../../../actions';

import Page from '../Page';
import ContactForm from './ContactForm';

class Contact extends Component {
	state = {};

	handleMailTo = e => {
		e.preventDefault();
		window.location.href =
			'mailto:&#97;&#108;&#101;&#107;&#115;&#97;.j.&#49;&#57;96&#64;&#103;m&#97;&#105;l&#46;&#99;&#111;&#109;?Subject=Hello';
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
											<a href="javascript:void(0)" onClick={this.handleMailTo} className="mybtn1">
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
										<ContactForm handleSubmitContactForm={this.props.submitContactForm} />
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
	state => ({}),
	{ submitContactForm }
)(Contact);
