import React, { Component } from 'react';
import Page from '../Page';

import { Link } from 'react-router-dom';

class Home extends Component {
	componentDidMount() {
		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}
	}
	render() {
		return (
			<Page title="Home - Drawthing" className="page-home">
				<div className="page-home-banner text-center">
					<div className="page-padding">
						<Link to="/game" className="mybtn1">
							<i className="fa fa-play mr-2" aria-hidden="true" />
							Play now !
						</Link>
						<a href="#" className="text-center rules-button">
							Rules
							<br />
							<i className="fa fa-chevron-down" aria-hidden="true" />
						</a>
					</div>
				</div>
				<div className="page-home-rules container-fluid">
					<div className="page-home-rules-map" />
					<div className="row page-home-rules-item-container">
						<div className="col-md-6 page-home-rules-item-text">
							<h2>Some heading 1</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure esse, beatae et animi
								error itaque atque deserunt? Esse qui harum laudantium fugiat. Perferendis, at
								obcaecati voluptates eius aliquam necessitatibus autem!
							</p>
							<span className="page-home-rules-pulse page-home-rules-pulse-right rounded-circle">
								<i className="fa fa-question" aria-hidden="true" />
							</span>
						</div>
						<div className="col-md-6 page-home-rules-item-image">
							<img src="/img/placeholder.png" className="img-fluid shadow" />
						</div>
						<div className="col-md-6 page-home-rules-item-image">
							<img src="/img/placeholder.png" className="img-fluid shadow" />
						</div>
						<div className="col-md-6 page-home-rules-item-text">
							<h2>Maybe next heading over here!</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam, iusto
								modi unde minima asperiores eum nesciunt voluptatem itaque iste sequi voluptates,
								laborum deleniti maiores inventore laudantium quis tempora esse.
							</p>
							<span className="page-home-rules-pulse page-home-rules-pulse-left rounded-circle">
								<i className="fa fa-exclamation" aria-hidden="true" />
							</span>
						</div>
						<div className="col-md-6 page-home-rules-item-text">
							<h2>And here is our last heading</h2>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam, iusto
								modi unde minima asperiores eum nesciunt voluptatem itaque iste sequi voluptates,
								laborum deleniti maiores inventore laudantium quis tempora esse.
							</p>
							<span className="page-home-rules-pulse page-home-rules-pulse-right rounded-circle">
								<i className="fa fa-paint-brush" aria-hidden="true" />
							</span>
						</div>
						<div className="col-md-6 page-home-rules-item-image">
							<img src="/img/placeholder.png" className="img-fluid shadow" />
						</div>
						<div className="col-md-12 text-center bg-white">
							<Link to="/game" className="mybtn2 mb-4">
								<i className="fa fa-play mr-2" aria-hidden="true" />
								Play now !
							</Link>
						</div>
					</div>
				</div>
			</Page>
		);
	}
}

export default Home;
