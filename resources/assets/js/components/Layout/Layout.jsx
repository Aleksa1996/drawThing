import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import Router from '../../Router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import ModalRoot from '../Common/Modal/ModalRoot';

class Layout extends Component {
	state = {};

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.location !== prevProps.location) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		const currentKey = this.props.location.pathname.split('/')[1] || '/';
		const timeout = { enter: 300, exit: 200 };
		return (
			<div id="main-content-layout">
				<Navigation scrollTop={this.state.scrollTop} {...this.props} />
				<div id="main-container">
					<TransitionGroup>
						<CSSTransition key={currentKey} classNames="fade" timeout={timeout} appear>
							<Router {...this.props} />
						</CSSTransition>
					</TransitionGroup>
				</div>
				<Footer />

				<ModalRoot />
			</div>
		);
	}
}

export default Layout;
