import React, { Component } from 'react';

class Footer extends Component {
	state = {};
	render() {
		return (
			<footer className="container-fluid main-footer footer py-3">
				<div className="row">
					<div className="col-xs-6 col-sm-6 col-md-6 text-left justify-content-center align-items-center d-flex">
						&copy; 2019 &nbsp;
						<a
							href="https://aleksajovanovic.com"
							className="basic-link-white text-decoration-none"
							title="My portfolio"
						>
							Aleksa Jovanovic
						</a>
						&nbsp; 179/15
					</div>
					<div className="col-xs-6 col-sm-6  col-md-6 text-right justify-content-center align-items-center d-flex">
						<ul className="main-footer-icons p-0">
							<li className="mx-3">
								<a href="#">
									<i className="fa fa-book" aria-hidden="true" title="Project documentation" />
								</a>
							</li>
							<li className="mx-3">
								<a href="https://github.com/Aleksa1996">
									<i className="fa fa-github" aria-hidden="true" title="My github profile" />
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
