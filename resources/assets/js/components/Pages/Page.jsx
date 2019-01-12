import React, { Component } from 'react';
import Helmet from 'react-helmet';

class Page extends Component {
	state = {};
	render() {
		return (
			<div>
				<Helmet>
					<title>{this.props.title || 'Drawthing'}</title>
				</Helmet>
				{this.props.children}
			</div>
		);
	}
}

export default Page;
