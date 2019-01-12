import React, { Component } from 'react';
import Page from '../Page';

class Home extends Component {
	state = {};
	render() {
		return (
			<Page title="Home - Drawthing">
				<div className="home-page-banner text-center">
					<a href="#" className="mybtn1">
						<i className="fa fa-play mr-2" aria-hidden="true" />
						Play now!
					</a>
					<a href="#" className="text-center rules-button">
						Rules
						<br />
						<i className="fa fa-chevron-down" aria-hidden="true" />
					</a>
				</div>
			</Page>
		);
	}
}

export default Home;
