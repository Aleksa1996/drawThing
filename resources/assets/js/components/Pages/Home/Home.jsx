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
				<div className="page-home-rules container-fluid">
					<div className="page-home-rules-map" />
					<div className="row page-home-rules-item-container">
						<div className="col-md-12 page-home-playnow-container text-center bg-white">
							<div className="page-home-main-txt mb-2">
								<h1>Drawthing</h1>
								<p className="special-text">
									Join players from around the world in this weird and wild online game. Can you
									figure out the secret word or phrase that will be drawn during each round? You can
									join in the fun by drawing one too.
								</p>
							</div>

							<Link to="/game" className="mybtn2">
								<i className="fa fa-play mr-2" aria-hidden="true" />
								Play now!
							</Link>
						</div>

						<div className="col-md-6 page-home-rules-item-text">
							<h2>Draw your avatar</h2>
							<p className="page-home-max-width-800 special-text">
								Your first step is to draw your avatar on canvas, personalize your avatar however
								you wish. Next to avatar canvas, you have field for your username. Just type in your
								username there, and you are good to go!
							</p>
							<span className="page-home-rules-pulse page-home-rules-pulse-right rounded-circle">
								<i className="fa fa-paint-brush" aria-hidden="true" />
							</span>
						</div>
						<div className="col-md-6 page-home-rules-item-image">
							<a href="javascript:void(0)">
								<img src="/img/placeholder.png" className="img-fluid shadow" />
							</a>
						</div>
						<div className="col-md-6 page-home-rules-item-image">
							<a href="javascript:void(0)">
								<img src="/img/placeholder.png" className="img-fluid shadow" />
							</a>
						</div>
						<div className="col-md-6 page-home-rules-item-text">
							<h2>Create / Join room</h2>
							<p className="page-home-max-width-800 special-text">
								Choose whether you want to create private room, and invite your friends or you want
								to play in a public room. Note that if you choose to create private room, you will
								automatically become room admin, so you can control which players may play and which
								don't.
							</p>
							<span className="page-home-rules-pulse page-home-rules-pulse-left rounded-circle">
								<i className="fa fa-users" aria-hidden="true" />
							</span>
						</div>
						<div className="col-md-6 page-home-rules-item-text">
							<h2>Draw / Guess</h2>
							<p className="page-home-max-width-800 special-text">
								Finally, the game starts! After the countdown is over, one random player needs to
								choose 1 out of 3 words. Game round begins, your concentration to the maximum. You
								need to guess what others draw or to draw chosen word. For better score you need to
								do that as fast as possible, or you will loose!
							</p>
							<span className="page-home-rules-pulse page-home-rules-pulse-right rounded-circle">
								<i className="fa fa-play-circle" aria-hidden="true" />
							</span>
						</div>
						<div className="col-md-6 page-home-rules-item-image">
							<a href="javascript:void(0)">
								<img src="/img/placeholder.png" className="img-fluid shadow" />
							</a>
						</div>
					</div>
				</div>
			</Page>
		);
	}
}

export default Home;
