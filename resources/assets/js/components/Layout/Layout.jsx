import React, { Component } from 'react';

import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

import Router from '../../Router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Layout extends Component {
	state = {};

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
