import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from './Modal';

import { hideModal, startNextGame } from '../../../actions';
import { first as _first } from 'lodash';

import PlayerModel from '../../../utils/classes/Player';
import RoomModel from '../../../utils/classes/Room';
import GameModel from '../../../utils/classes/Game';

import { replace } from 'connected-react-router';

class ScoreBoardModal extends Component {
	constructor(props) {
		super(props);
		this.countdownId = null;
		this.state = {
			countdown: 5
		};
	}
	componentDidMount() {
		this.countdownId = setInterval(this.countdown, 1000);
	}

	countdown = () => {
		if (this.state.countdown == 0) {
			clearInterval(this.countdownId);
			this.props.hideModal();
			if (this.props.game.isThereNextGame) {
				return this.props.startNextGame();
			}

			return this.props.replace('/play');
		}

		this.setState(({ countdown }) => ({ countdown: countdown - 1 }));
	};

	componentWillUnmount() {
		clearInterval(this.countdownId);
	}

	render() {
		const { player, room, game, hideModal } = this.props;

		const playerModel = new PlayerModel(player);
		const roomModel = new RoomModel(room);
		const gameModel = new GameModel(game);
		const playersWithScore = roomModel.getActivePlayers().map(p => ({
			...p,
			score: gameModel.isThereNextGame
				? gameModel.getScoreForPlayer(p)
				: gameModel.getFinalScoreForPlayer(p)
		}));

		const title = (
			<React.Fragment>
				<i className="fa fa-trophy" aria-hidden="true" /> Scoreboard
			</React.Fragment>
		);
		const footer = (
			<div className="text-center w-100">
				<small className="d-block bounceAnimation">
					{gameModel.isThereNextGame ? 'Next game starting in ' : 'Finishing game in '}
					{this.state.countdown} sec.
				</small>
			</div>
		);

		return (
			<Modal
				title={title}
				body=""
				footer={footer}
				handleClose={hideModal}
				shouldCloseOnOverlayClick={false}
				shouldHideCloseButton={true}
			>
				<div className="game-board-container-left">
					<div className="game-board-score">
						<ul className="game-board-score-list">
							{gameModel.sortPlayersByScore(playersWithScore).map((p, i) => (
								<li key={p.id} className="game-board-score-row rounded">
									<span className="game-board-score-avatar-container">
										<span className="game-board-score-avatar">
											<img src={p.avatar} className="shadow" />
											<span className="game-board-score-position">{i + 1}</span>
										</span>
									</span>
									<span className="game-board-score-username">
										{p.username} {playerModel.id == p.id ? <small> (you)</small> : null}
										<small className="game-board-score-points">({p.score}) points</small>
									</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</Modal>
		);
	}
}

export default connect(
	state => ({ player: state.player, room: state.room, game: state.game }),
	{ hideModal, startNextGame, replace }
)(ScoreBoardModal);
