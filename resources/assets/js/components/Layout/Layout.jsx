import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import Router from '../../Router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { debounce as _debounce } from 'lodash';

class Layout extends Component {
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
		this.setState({ scrollTop: window.pageYOffset });
	};

	render() {
		const currentKey = this.props.location.pathname.split('/')[1] || '/';
		const timeout = { enter: 300, exit: 200 };
		return (
			<React.Fragment>
				<Navigation scrollTop={this.state.scrollTop} {...this.props} />
				<div id="main-container">
					<TransitionGroup>
						<CSSTransition key={currentKey} classNames="fade" timeout={timeout} appear>
							<Router {...this.props} />
						</CSSTransition>
					</TransitionGroup>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Layout;
