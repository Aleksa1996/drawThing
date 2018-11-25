import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import Router from '../../Router';

class Layout extends Component {
	state = {};
	render() {
		return (
			<div>
				<Navigation />
				<div className="container">
					<Router />
				</div>
			</div>
		);
	}
}

export default Layout;
