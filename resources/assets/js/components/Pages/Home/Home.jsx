import React, { Component } from 'react';
import Page from '../Page';

class Home extends Component {
	state = {};
	render() {
		return (
			<Page title="Home - Drawthing" className="page-home">
				<div className="page-home-banner text-center">
					<div className="page-padding">
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
				</div>
				<div className="page-home-rules container-fluid">
					<div className="page-home-rules-map" />
					<div className="row page-home-rules-item-container">
						<div className="col-md-6 page-home-rules-item-text">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure esse, beatae et animi error itaque atque deserunt?
								Esse qui harum laudantium fugiat. Perferendis, at obcaecati voluptates eius aliquam necessitatibus autem!
							</p>
							<span className="page-home-rules-pulse">
								<i className="fa fa-question" aria-hidden="true" />
							</span>
						</div>
						<div className="col-md-6" style={{ height: '300px' }}>
							Image
						</div>
						<div className="col-md-6" style={{ height: '300px' }}>
							Image
						</div>
						<div className="col-md-6 page-home-rules-item-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam, iusto modi unde minima asperiores eum
							nesciunt voluptatem itaque iste sequi voluptates, laborum deleniti maiores inventore laudantium quis tempora esse.
						</div>
						<div className="col-md-6 page-home-rules-item-text">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quisquam, iusto modi unde minima asperiores eum
							nesciunt voluptatem itaque iste sequi voluptates, laborum deleniti maiores inventore laudantium quis tempora esse.
						</div>
						<div className="col-md-6" style={{ height: '300px' }}>
							Image
						</div>
					</div>
				</div>
			</Page>
		);
	}
}

export default Home;
