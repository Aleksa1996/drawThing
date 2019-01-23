import React, { Component } from 'react';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className="container-fluid main-footer footer py-4">
				<div className="row">
					<div className="col-md-6 text-left justify-content-center align-items-center d-flex">
						&copy; 2019 &nbsp;{' '}
						<a href="https://aleksajovanovic.com" title="My portfolio">
							Aleksa Jovanovic
						</a>{' '}
						&nbsp; 179/15
					</div>
					<div className="col-md-6 text-right justify-content-center align-items-center d-flex">
						<ul className="main-footer-icons">
							<li className="mx-3">
								<a href="#">
									<i className="fa fa-book" aria-hidden="true" title="Project documentation" />
								</a>
							</li>
							<li className="mx-3">
								<a href="https://github.com/Aleksa1996">
									<i className="fa fa-github-alt" aria-hidden="true" title="My github profile" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
