import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Page from '../Page';

class Page404 extends Component {
	state = {};
	render() {
		return (
			<Page title="404 Not found - Drawthing" className="page-404">
				<div className="page-status-text-wrapper text-center rounded shadow">
					<h1 className="page-status-heading">404 - Page not found</h1>
					<p className="page-status-text">
						The page you were looking for is not here. <br />
						Perhaps you want to <Link to="/play">play new game</Link>. <br />
						Maybe you tried to find more <Link to="/about">about</Link> this project. <br />
						You wanted to <Link to="/contact">contact me</Link> ?
					</p>
					<Link to="/" className="mybtn2 page-status-link">
						<i className="fa fa-home mr-2" aria-hidden="true" />
						Go to homepage
					</Link>
				</div>
			</Page>
		);
	}
}

export default Page404;
