import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../Router';

import { debounce as _debounce } from 'lodash';

class Navigation extends Component {
	state = {
		pageYOffset: 0,
		scrolled: false
	};

	componentDidMount() {
		window.addEventListener('scroll', _debounce(this.onScroll, 90));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll);
	}

	onScroll = ev => {
		this.setState(prevState => ({
			scrolled: prevState.pageYOffset < window.pageYOffset,
			pageYOffset: window.pageYOffset
		}));
	};

	render() {
		const { location } = this.props;
		const disappearOnPage = ['/game', '/play'];

		if (disappearOnPage.includes(location.pathname)) {
			return null;
		}

		return (
			<nav
				className={`main-nav navbar navbar-expand-lg fixed-top shadow ${
					this.state.scrolled ? 'main-nav-scrolled' : ''
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
						{routes
							.filter(r => r.mainNav.show)
							.map(r => (
								<li key={r.id} className="nav-item active mx-2">
									<NavLink activeClassName="nav-link-active" exact to={r.link} className="nav-link">
										{r.mainNav.text}
									</NavLink>
								</li>
							))}
					</ul>
				</div>
			</nav>
		);
	}
}
export default Navigation;
