import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Page extends Component {
	state = {};
	render() {
		return (
			<div className={this.props.className || ''}>
				<Helmet>
					<title>{this.props.title || 'Drawthing'}</title>
				</Helmet>
				{this.props.children}
			</div>
		);
	}
}

export default Page;
