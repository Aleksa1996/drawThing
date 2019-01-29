import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { debounce as _debounce } from 'lodash';

class Navigation extends Component {
	state = {
		scrollTop: 0
	};

	componentDidMount() {
		window.addEventListener('scroll', _debounce(this.handleScroll, 70));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = ev => {
		if (this.props.location.pathname == '/') {
			this.setState({ scrollTop: window.pageYOffset });
		}
	};

	render() {
		let isHomePage = this.props.location.pathname == '/';
		let isScrolled = this.state.scrollTop >= 20;
		return (
			<nav
				className={`main-nav navbar navbar-expand-lg fixed-top ${
					isHomePage ? (isScrolled ? 'main-nav-scrolled' : '') : 'main-nav-scrolled'
				}`}
			>
				<Link to="/" className="navbar-brand text-uppercase my-3">
					DrawThing
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#mainnavbarToggler"
					aria-controls="mainnavbarToggler"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon d-flex justify-content-center align-items-center">
						<i className="fa fa-bars" aria-hidden="true" />
					</span>
				</button>
				<div className="navbar-collapse collapse" id="mainnavbarToggler">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item active mx-2">
							<Link to="/" className="nav-link">
								Home <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link to="/about" className="nav-link">
								About
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link to="/contact" className="nav-link">
								Contact
							</Link>
						</li>
						<li className="nav-item mx-2">
							<Link to="/game" className="nav-link">
								Play now !
							</Link>
						</li>
					</ul>
					{/* <form className="form-inline mt-2 mt-md-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />>
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
				</form> */}
				</div>
			</nav>
		);
	}
}
export default Navigation;
