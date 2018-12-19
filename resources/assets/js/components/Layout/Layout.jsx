import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Router from '../../Router';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Layout extends Component {
	state = {};

	render() {
		const currentKey = this.props.location.pathname.split('/')[1] || '/';
		const timeout = { enter: 300, exit: 200 };
		return (
			<React.Fragment>
				<Navigation />
				<div id="main-container" className="container">
					<TransitionGroup>
						<CSSTransition key={currentKey} classNames="fade" timeout={timeout} appear>
							<Router {...this.props} />
						</CSSTransition>
					</TransitionGroup>
				</div>
			</React.Fragment>
		);
	}
}

export default Layout;
